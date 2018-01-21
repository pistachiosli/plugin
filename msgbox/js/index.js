DD.createModule({
	name: 'code1'
	el: '.code1',
	modules: [{
		name: 'code2',
		el: '.code2',
		data: {
			title: '确定',
			content: '点击确定按钮关闭消息框',
			aaa: false,
			module: this.module,
			buttons: [{
				text: '确定'
			}]
		},
		methods: {
			//按钮click事件
			showbox: function() {
				this.data.aaa = true;
			},
			change: function() {

			}
		},
	}]
});