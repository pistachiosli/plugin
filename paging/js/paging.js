/**
 * 分页插件
 * 欲用此插件，必先在使用此插件的模块上有一个updatePage函数,用来点击之后刷新页面
 * page:当前页
 * to_page:输入框的数据（到第几页）
 * allpage:总共多少页
 * @return {[type]} [description]
 */
;(function() {
	var Paging = function() {};

	Paging.prototype = {
		init: function(view) {
			var me = this;
			var template = `<div class="nd-plugin-paging">
					            <span>共<span class="red">{{total}}</span>条记录</span>
					            <span>共<span class="red">{{allpage}}</span>页</span>
					            <span>当前第<span class="red">{{page}}</span>页</span>
					            <div class="toFirst">首页</div>
					            <div class="toPrev">上一页</div>
					            <div class="toNext">下一页</div>
					            <div class="toLast">末页</div>
					            <span>转到:</span>
					            <input type="number" x-field="to_page">
					            <div class="goTo">GO</div>
					        </div>`;
			view.innerHTML = template;
			DD.Compiler.compile(view,view.$module);
			view.$forceRender = true;
		},
		render:function(view){
			new DD.Event({
				eventName:'click',
				view:view.querySelector('.toFirst'),
				handler:function(e,d,v){
	                if(this.data.page!==1){
	                    this.data.page = 1;
	                    this.module.methodFactory.methods.updatePage.call(this);
	                }
				}
			});
			new DD.Event({
				eventName:'click',
				view:view.querySelector('.toLast'),
				handler:function(e,d,v){
	                if(this.data.page!==this.data.allpage){
	                    this.data.page = this.data.allpage;
	                	this.module.methodFactory.methods.updatePage.call(this);
	                }
				}
			});
			new DD.Event({
				eventName:'click',
				view:view.querySelector('.toPrev'),
				handler:function(e,d,v){
	                if(this.data.page>1){
	                    this.data.page--;
	                	this.module.methodFactory.methods.updatePage.call(this);
	                }
				}
			});
			new DD.Event({
				eventName:'click',
				view:view.querySelector('.toNext'),
				handler:function(e,d,v){
	                if(this.data.page<this.data.allpage){
	                    this.data.page++;
	                	this.module.methodFactory.methods.updatePage.call(this);
	                }
				}
			});
			new DD.Event({
				eventName:'click',
				view:view.querySelector('.goTo'),
				handler:function(e,d,v){
	                if(this.data.page !== this.data.to_page&&
	                    this.data.to_page>0&&
	                    this.data.to_page<this.data.allpage){
	                    this.data.page = this.data.to_page;
	                	this.module.methodFactory.methods.updatePage.call(this);
	                }
				}
			});
		}
	}

	DD.Plugin.create('paging', Paging);
}());