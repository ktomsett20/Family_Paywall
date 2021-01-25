function _rplg_badge_init(el){var badge_cnt=el.querySelector('.rplg-badge-cnt'),is_float=badge_cnt.className.indexOf('-fixed')>-1;if(is_float){document.body.appendChild(el);}
var badges=el.querySelectorAll('.rplg-badge2'),rplg=document.createElement('div');for(var i=0;i<badges.length;i++){var badge=badges[i],badge_key='badge_float_'+badge.getAttribute('data-provider'),session=sessionStorage.getItem(badge_key),btn=badge.querySelector('.rplg-badge2-btn'),close=badge.querySelector('.rplg-badge2-close'),form=badge.querySelector('.rplg-form');(function(badge,badge_key,session,btn,close,form){if(is_float){badge.style.display='block';}
if(close){if(session){var data=JSON.parse(session);if(data.hide){badge.style.display='none';}}
close.onclick=function(){badge.style.display='none';var value=JSON.parse(sessionStorage.getItem(badge_key)||'{}');value.hide=true;sessionStorage.setItem(badge_key,JSON.stringify(value));};}
if(form){btn.onclick=function(){rplg_load_imgs(form);form.style.display='block';};rplg.appendChild(form);}})(badge,badge_key,session,btn,close,form);}
if(rplg.hasChildNodes()){rplg.className='rplg';document.body.appendChild(rplg);}}
function rplg_load_imgs(el){var imgs=el.querySelectorAll('img.rplg-blazy[data-src]');for(var i=0;i<imgs.length;i++){imgs[i].setAttribute('src',imgs[i].getAttribute('data-src'));imgs[i].removeAttribute('data-src');}}
function rplg_next_reviews(pagin){var parent=this.parentNode,selector='.rplg .rplg-hide';reviews=parent.querySelectorAll(selector);for(var i=0;i<pagin&&i<reviews.length;i++){if(reviews[i]){reviews[i].className=reviews[i].className.replace('rplg-hide','');}}
reviews=parent.querySelectorAll(selector);if(reviews.length<1){parent.removeChild(this);}
window.rplg_blazy&&window.rplg_blazy.revalidate();return false;}
function rplg_leave_review_window(){_rplg_popup(this.getAttribute('href'),620,500);return false;}
function _rplg_lang(){var n=navigator;return(n.language||n.systemLanguage||n.userLanguage||'en').substr(0,2).toLowerCase();}
function _rplg_popup(url,width,height){var dual_left=window.screenLeft!=undefined?window.screenLeft:window.screenX,dual_top=window.screenTop!=undefined?window.screenTop:window.screenY,doc_elem=document.documentElement,screen_width=window.innerWidth?window.innerWidth:doc_elem.clientWidth?doc_elem.clientWidth:screen.width,screen_height=window.innerHeight?window.innerHeight:doc_elem.clientHeight?doc_elem.clientHeight:screen.height,left=((screen_width/2)-(width/2))+dual_left,top=((screen_height/2)-(height/2))+dual_top,win=window.open(url,'','scrollbars=yes, width='+width+', height='+height+', top='+top+', left='+left);if(window.focus){win.focus();}
return win;}
function _rplg_init_timeago(el){var els=el.querySelectorAll('.rplg-review-time');for(var i=0;i<els.length;i++){var clss=els[i].className,time;time=parseInt(els[i].getAttribute('data-time'))*1000;els[i].innerHTML=WPacTime.getTime(time,_rplg_lang(),'ago');}}
function _rplg_init_blazy(attempts){if(!window.Blazy){if(attempts>0){setTimeout(function(){_rplg_init_blazy(attempts-1);},200);}
return;}
window.rplg_blazy=new Blazy({selector:'img.rplg-blazy'});}
function _rplg_read_more(el){var read_more=el.querySelectorAll('.rplg-more-toggle');for(var i=0;i<read_more.length;i++){(function(rm){rm.onclick=function(){rm.parentNode.removeChild(rm.previousSibling.previousSibling);rm.previousSibling.className='';rm.textContent='';};})(read_more[i]);}}
function _rplg_init_slider(el,data){if(!window.Rplgsw){return setTimeout(function(){_rplg_init_slider(el,data);},200);}
var swiperEl=el.querySelector('.rplgsw-container'),swiperData={loop:true,autoplay:parseInt(data.speed),effect:data.effect,slidesPerView:parseInt(data.count),spaceBetween:parseInt(data.space),autoHeight:true,fade:{crossFade:true},breakpoints:{},onInit:function(swiper){setTimeout(function(){window.dispatchEvent(new Event('resize'));},500);},onTransitionEnd:function(swiper){window.rplg_blazy&&window.rplg_blazy.revalidate();}};if(data.pagin){swiperData.paginationClickable=true;swiperData.pagination='.rplgsw-pagination';}
if(data.nextprev){swiperData.nextButton=el.querySelector('.rplg-slider-next');swiperData.prevButton=el.querySelector('.rplg-slider-prev');}
swiperData.breakpoints[data.mobileBreakpoint]={slidesPerView:parseInt(data.mobileCount),spaceBetween:10};swiperData.breakpoints[data.tabletBreakpoint]={slidesPerView:parseInt(data.tabletCount),spaceBetween:20};swiperData.breakpoints[data.desktopBreakpoint]={slidesPerView:parseInt(data.desktopCount),spaceBetween:30};return new Rplgsw(swiperEl,swiperData);}
function _rplg_get_parent(el,cl){cl=cl||'rplg';if(el.className.split(' ').indexOf(cl)<0){while((el=el.parentElement)&&el.className.split(' ').indexOf(cl)<0){}}
return el;}
function rplg_init_slider_theme(el,data){el=_rplg_get_parent(el);_rplg_init_timeago(el);_rplg_read_more(el);_rplg_init_slider(el,data);_rplg_init_blazy(10);}
function rplg_init_grid_theme(el){el=_rplg_get_parent(el);_rplg_init_timeago(el);_rplg_read_more(el);_rplg_init_blazy(10);}
function rplg_init_list_theme(el){el=_rplg_get_parent(el);_rplg_init_timeago(el);_rplg_read_more(el);_rplg_init_blazy(10);}
function rplg_init_badge_theme(el){el=_rplg_get_parent(el);_rplg_init_timeago(el);_rplg_read_more(el);_rplg_badge_init(el);_rplg_init_blazy(10);}
function rplg_init_temp_theme(el,data){el=_rplg_get_parent(el);_rplg_read_more(el);_rplg_init_blazy(10);}