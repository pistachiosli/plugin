DD.createModule({
	el:'.code1',
	data:{
		title:'按钮选择',
		content:'点击不同按钮显示不同提示',
		buttons:[
			{text:'确定'},
			{text:'取消'},
			{text:'忽略'}
		],
		callbacks:['ok','cancel','ignore'],
		module:this.module,
		msgshow:false
	},
	methods:{
		//按钮click事件
		showbox:function(){
			this.data.msgshow = true;
		},
		ok:function(){
			alert('确定 is clicked');
		},
		cancel:function(){
			alert('取消 is clicked');
		},
		ignore:function(){
			alert('忽略 is clicked');
		}
	}		
});