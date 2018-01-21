;(function(){
	var Carousel = function(){};
	Carousel.prototype = {
		init:function(view){
			var me = this;
			var template = `<div class="nd-plugin-carousel-box">
								<div class="nd-plugin-carousel-imgbox">
									<img class="nd-plugin-carousel-img" x-repeat="carouselarr" src="{{imgsrc}}">
								</div>
								<span x-repeat="carouselarr" class="nd-plugin-carousel-circle" x-show="{{$index}}"></span>
							</div>`;
			view.$dataItem = DD.attr(view,'dataItem') || 'data';
			me.move_Left = DD.attr(view,'move-Left')||'move-Left';
			me.move_Right = DD.attr(view,'move-Right')||'move-Right';
			view.removeAttribute('dataItem');
			view.innerHTML = template;
			DD.Compiler.compile(view,view.$module);
			view.$forceRender = true;
		},
		render:function(view){
			var me = this;
			var data = view.$getData().data;
			var timer;
			var imgbox;
			var img;
			var imglength;
			var translates;
			var move;
			var imgwidth;
			var moveLeft;
			var cantouch  = true;
			if(view.$dataItem===data[me.move_Right]){
				moveleft = false;
			}else{
				moveleft = true;
			}
			me.moveLeft = function(){
				translates-=imgwidth;
				// console.log(move,imglength-1)
				me.changeLeft();
				move++;
			}
			me.changeLeft = function(){
				if(move>imglength-2){
					move = 0;
					DD.css(imgbox,'left',-1*translates-imgwidth+'px');
				}
			}
			me.moveDraw = function(){
				DD.css(imgbox,'transform','translateX('+translates+'px)');
			}
			me.moveRight = function(){
				move--;
				translates+=imgwidth;
				me.changeRight();
			}
			me.changeRight = function(){
				if(move<1){
					move = imglength-1;
					DD.css(imgbox,'left',-1*translates-imgwidth*(imglength-2)+'px');
				}
			}
			me.addSpanClass = function(){
				if(moveleft){
					DD.addClass(document.querySelectorAll('.nd-plugin-carousel-circle')[move],'ischecked');
				}else{
					DD.addClass(document.querySelectorAll('.nd-plugin-carousel-circle')[move],'ischecked');
				}
			}
			me.removeSpanClass = function(){
				if(moveleft){
					DD.removeClass(document.querySelectorAll('.nd-plugin-carousel-circle')[move],'ischecked');
				}else{
					DD.removeClass(document.querySelectorAll('.nd-plugin-carousel-circle')[move],'ischecked');
				}
			}
			me.update = function(){
				clearInterval(window.timer);
				window.timer = setInterval(function(){
					me.removeSpanClass();
					if(moveleft){
						me.moveLeft();
					}else{
						me.moveRight();
					}
					me.moveDraw();
					me.addSpanClass();
				},2000);
			}
			if(data.carouselarr){
				if(data.carouselarr.length>1){
					data.carouselarr.push(DD.clone(data.carouselarr[0]));
					setTimeout(function(view){
						imgbox = document.querySelector('.nd-plugin-carousel-imgbox');//图片外层容器
						img = imgbox.querySelectorAll('img');//图片
						imglength = data.carouselarr.length;//图片数量
						imgwidth = parseInt(DD.css(document.querySelector('.nd-plugin-carousel-box'),'width'));//图片宽度
						DD.css(imgbox,'left',parseInt(imglength/-2)*imgwidth+'px');
						DD.css(imgbox,'width',imglength*imgwidth+'px');
						imgbox.addEventListener('transitionend',function(e){
							cantouch = true;
							touchStart = true;
						});//滑动完成后才能下次touch事件
						for(var i = 0;i<imglength;i++){
							DD.css(document.querySelectorAll('img')[i],'width',imgwidth+'px');//给图片赋宽度
						}
						for(var i = 0;i<imglength;i++){
							DD.css(document.querySelectorAll('.nd-plugin-carousel-circle')[i],'top',parseInt(DD.css(imgbox,'height'))-30+'px');//给图片赋宽度
						}
						translates = 0;//移动的px
						if(!moveleft){
							if(imglength%2===0){
								move = imglength-parseInt(imglength/2)+1;//初始位置
							}else{
								move = imglength-parseInt(imglength/2);
							}
						}else{
							// console.log(imglength)
							if(imglength%2===0){
								move = imglength-parseInt(imglength/2);//初始位置
							}else{
								move = imglength-parseInt(imglength/2)-1;
							}
						}
						me.update();
					},0);
					new DD.Event({
						eventName:'swipeleft',
						view:view,
						handler:function(e,d,v){
							if(cantouch){
								cantouch = false;
								clearInterval(window.timer);
								me.removeSpanClass();
								me.moveLeft();
								me.moveDraw();
								me.addSpanClass();
								me.update();
							}
						}
					});
					new DD.Event({
						eventName:'swiperight',
						view:view,
						handler:function(e,d,v){
							if(cantouch){
								cantouch = false;
								clearInterval(window.timer);
								me.removeSpanClass();
								me.moveRight();
								me.moveDraw();
								me.addSpanClass();
								me.update();
							}
						}
					});
					var touchStart = true;
					var touchTrans;
					console.log('222')
					new DD.Event({
						eventName:'touchstart',
						view:view,
						handler:function(e,d,v){
							if(cantouch&&touchStart){
								cantouch = false;
								touchTrans = 0;
								clearInterval(window.timer);
								console.log('start');
								// move++;
							}
						}
					});
					var start,end;
					new DD.Event({
						eventName:'touchmove',
						view:view,
						handler:function(e,d,v){
							console.log(touchStart)
							if(touchStart){
								start = end;
								end = e.changedTouches[0].pageX;
								if(end&&start){
									touchTrans+= end-start;
									console.log(touchTrans)
								}
								DD.css(imgbox,'transform','translateX('+(translates+touchTrans)+'px)');
							}
						}
					});
					new DD.Event({
						eventName:'touchend',
						view:view,
						handler:function(e,d,v){
							if(touchStart){
								console.log(touchTrans)
								touchStart = false;
							}
						}
					});
					console.log(window.timer);
				}
			}
		}
	}
	DD.Plugin.create('carousel',Carousel);
}())