(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70fbfdca"],{"5db0":function(t,a,e){},"7c33":function(t,a,e){t.exports=e.p+"img/hot.8f9ed16f.svg"},b288:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("van-nav-bar",{attrs:{fixed:!0,border:!1},scopedSlots:t._u([{key:"left",fn:function(){return[e("div",{staticClass:"home-title"},[t.isLogin?e("span",[t._v(t._s(t.timeText)+", "+t._s(t.userInfo.nickName))]):e("span",{on:{click:t.goLogin}},[t._v("请先去登录")])])]},proxy:!0}])}),e("div",{staticClass:"banner-box"},[e("van-swipe",{attrs:{autoplay:5e3,"show-indicators":!1,height:"200"}},t._l(t.bannerData,(function(a,i){return e("van-swipe-item",{key:i,on:{click:function(e){return t.viewProductInfo(a.pid)}}},[e("img",{staticClass:"auto-img",attrs:{src:a.bannerImg,alt:""}}),e("van-tag",{attrs:{round:"",color:"white","text-color":"#000",size:"large"}},[t._v(t._s(a.name))])],1)})),1)],1),e("div",{staticClass:"hot-product"},[t._m(0),e("div",{staticClass:"product-box clearfix"},t._l(t.hotProducts,(function(a,i){return e("div",{key:i,staticClass:"product-item fl",class:[i%2==0?"p-left":"p-right"]},[e("div",{staticClass:"p-img",on:{click:function(e){return t.viewProductInfo(a.pid)}}},[e("img",{staticClass:"auto-img",attrs:{src:a.smallImg,alt:""}})]),e("div",{staticClass:"pro-name one-text"},[t._v(t._s(a.name))]),e("div",{staticClass:"clearfix"},[e("div",{staticClass:"pro-price fl"},[t._v("￥"+t._s(a.price))])])])})),0)])],1)},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"hot-product-title"},[t._v(" 人气 "),i("span",[t._v("Top")]),i("img",{attrs:{src:e("7c33"),alt:""}})])}],n=(e("5db0"),{name:"Home",data:function(){return{timeText:"",bannerData:[],hotProducts:[],userInfo:{},isLogin:!1}},created:function(){this.getTime(),this.getUserInfo(),this.getbannerData(),this.getHotProducts()},methods:{goLogin:function(){this.$router.push({name:"Login"})},getTime:function(){var t=(new Date).getHours();this.timeText=t>=6&&t<12?"早上好":t>=12&&t<18?"下午好":t>=18&&t<24?"晚上好":"深夜好"},getUserInfo:function(){var t=this,a=localStorage.getItem("CSTK");a&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"get",url:"/findMy",params:{appkey:this.appkey,tokenString:a}}).then((function(a){t.$toast.clear(),"A001"==a.data.code&&a.data.result.length>0&&(t.isLogin=!0,t.userInfo=a.data.result[0])})).catch((function(a){t.$toast.clear()})))},getbannerData:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/banner",params:{appkey:this.appkey}}).then((function(a){t.$toast.clear(),300==a.data.code&&(t.bannerData=a.data.result)})).catch((function(a){t.$toast.clear()}))},getHotProducts:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/typeProducts",params:{appkey:this.appkey,key:"isHot",value:1}}).then((function(a){t.$toast.clear(),500==a.data.code&&(t.hotProducts=a.data.result)})).catch((function(a){t.$toast.clear()}))},viewProductInfo:function(t){this.$router.push({name:"Detail",query:{pid:t}})}}}),o=n,r=e("9ca4"),c=Object(r["a"])(o,i,s,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-70fbfdca.19db1e33.js.map