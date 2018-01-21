;(function(){
	/**
	*ischecked:true or false
	*/
	var Switcher = function(){
	}

	Switcher.prototype = {
		init:function(view){
			var me = this;
			var template = `<div class="nd-plugin-sbutton-box">
								<span class="nd-plugin-sbutton-circle"></span>
								<div class="nd-plugin-sbutton-pushbutton"></div>
							</div>`;
			view.$dataItem = DD.attr(view,'dataItem') || 'data';
			me.yesvalue = DD.attr(view,'yes-value')||'true';
			me.novalue = DD.attr(view,'no-value')||'false';
			view.removeAttribute('dataItem');
			view.innerHTML = template;
			DD.Compiler.compile(view,view.$module);
			view.$forceRender = true;
		},
	 	render:function(view){
	 		var me = this;
	 		var data = view.$getData().data;
	 		var mybutton;
	 		var pushbutton;
			if(mybutton = view.children[0]){
				if(pushbutton = view.children[0].children[1]){
					if(data[view.$dataItem] == me.yesvalue){
						mybutton.style.backgroundColor = '#49ca5f';
						pushbutton.style.left = 30+'px';
					}else{
						mybutton.style.backgroundColor = '#ffffff';
						pushbutton.style.left = 0+'px';
					}
				}
			}
			new DD.Event({
				view:view,
				eventName:'click',
				handler:function(){
					if(data[view.$dataItem] == me.yesvalue){
						data[view.$dataItem] = me.novalue;
					}else{
						data[view.$dataItem] = me.yesvalue;
					}
					view.$forceRender = true;
				}
			});
	 	}
	}
	DD.Plugin.create('switch',Switcher);
}());