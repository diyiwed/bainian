
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/list/list","pages/shopcart/shopcart","pages/my/my","pages/search/search","pages/search-list/search-list","pages/details/details"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#636263","selectedColor":"#636263","spacing":"8px","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/indexSelected.png","text":"首页"},{"pagePath":"pages/list/list","iconPath":"static/tabbar/list.png","selectedIconPath":"static/tabbar/listSelected.png","text":"分类"},{"pagePath":"pages/shopcart/shopcart","iconPath":"static/tabbar/shop.png","selectedIconPath":"static/tabbar/shopSelected.png","text":"购物车"},{"pagePath":"pages/my/my","iconPath":"static/tabbar/my.png","selectedIconPath":"./static/tabbar/mySelected.png","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-demo1","compilerVersion":"2.6.16","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"百年奥莱","navigationBarBackgroundColor":"#FFFFFF","scrollIndicator":"none","titleNView":{"buttons":[{"float":"left","fontSrc":"/static/iconfont.ttf","text":""},{"float":"right","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/list/list","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"类别","scrollIndicator":"none","titleNView":{"searchInput":{"placeholder":"请输入","disabled":true,"align":"left","autoFocus":"true","borderRadius":"#F7F7F7","placeholderColor":"#B3B3B3"}}}},{"path":"/pages/shopcart/shopcart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","scrollIndicator":"none","titleNView":{"searchInput":{"placeholder":"请输入","disabled":false,"align":"left","autoFocus":"true","borderRadius":"#F7F7F7","placeholderColor":"#B3B3B3"},"buttons":[{"float":"right","color":"#636263","text":"搜索","fontSize":"16px","width":"60px"}]}}},{"path":"/pages/search-list/search-list","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","scrollIndicator":"none","titleNView":{"searchInput":{"placeholder":"请输入","disabled":true,"align":"left","autoFocus":"true","borderRadius":"#F7F7F7","placeholderColor":"#B3B3B3"},"buttons":[{"float":"right","color":"#636263","text":"筛选","fontSize":"16px","width":"60px"}]}}},{"path":"/pages/details/details","meta":{},"window":{"navigationBarTitleText":"商品详情","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"},{"type":"share"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
