(this["webpackJsonpcustomer-products-test-task"]=this["webpackJsonpcustomer-products-test-task"]||[]).push([[0],{49:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(19),r=c.n(a),s=c(23),i=c(10),o="PRODUCT_FETCH",l="PRODUCT_DATA",d="PRODUCT_ERROR",u="PRODUCT_ADD",j="PRODUCT_EDIT",m="PRODUCT_REMOVE",b="PRODUCT_SORT_BY_COUNT",p="PRODUCT_SORT_BY_NAME",h="PRODUCT_ADD_COMMENT",O="PRODUCT_DELETE_COMMENT",x="PRODUCT_SET_ACTIVE",g="PRODUCT_DELETE_ACTIVE",f=function(){return{type:o}},v=function(e){return{type:l,payload:e}},N=function(e){return{type:d,error:e}},w=c(27),y=c(3),C={list:[],active:null,loading:!1},I=c(11),k=c.n(I),S=c(8),D=[{id:1,imageUrl:"https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg",name:"Cabbage",count:4,size:{width:200,height:200},weight:"200g",comments:[{id:1,productId:1,description:"some text here",date:"14:00 22.08.2021"},{id:2,productId:1,description:"some text here",date:"14:00 22.08.2021"},{id:3,productId:1,description:"some text here",date:"14:00 22.08.2021"}]},{id:2,imageUrl:"https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg",name:"Pineapple",count:42,size:{width:200,height:200},weight:"200g",comments:[{id:1,productId:2,description:"some text here",date:"14:00 22.08.2021"},{id:2,productId:2,description:"some text here",date:"14:00 22.08.2021"},{id:3,productId:2,description:"some text here",date:"14:00 22.08.2021"}]},{id:3,imageUrl:"https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg",name:"Apple",count:2,size:{width:200,height:200},weight:"200g",comments:[{id:1,productId:3,description:"some text here",date:"14:00 22.08.2021"},{id:2,productId:3,description:"some text here",date:"14:00 22.08.2021"},{id:3,productId:3,description:"some text here",date:"14:00 22.08.2021"}]},{id:4,imageUrl:"https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg",name:"Kiwi",count:0,size:{width:200,height:200},weight:"200g",comments:[{id:1,productId:4,description:"some text here",date:"14:00 22.08.2021"},{id:2,productId:4,description:"some text here",date:"14:00 22.08.2021"},{id:3,productId:4,description:"some text here",date:"14:00 22.08.2021"}]},{id:5,imageUrl:"https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg",name:"Tomato",count:0,size:{width:200,height:200},weight:"200g",comments:[{id:1,productId:5,description:"some text here",date:"14:00 22.08.2021"},{id:2,productId:5,description:"some text here",date:"14:00 22.08.2021"},{id:3,productId:5,description:"some text here",date:"14:00 22.08.2021"}]},{id:6,imageUrl:"https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg",name:"Cucumber",count:4,size:{width:200,height:200},weight:"200g",comments:[{id:1,productId:6,description:"some text here",date:"14:00 22.08.2021"},{id:2,productId:6,description:"some text here",date:"14:00 22.08.2021"},{id:3,productId:6,description:"some text here",date:"14:00 22.08.2021"}]},{id:7,imageUrl:"https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg",name:"Mango",count:23,size:{width:200,height:200},weight:"200g",comments:[{id:1,productId:7,description:"some text here",date:"14:00 22.08.2021"}]},{id:8,imageUrl:"https://agrosealgh.com/wp-content/uploads/2021/05/cabbage.jpg",name:"Cranberries",count:400,size:{width:200,height:200},weight:"200g",comments:[{id:1,productId:8,description:"some text here",date:"14:00 22.08.2021"},{id:3,productId:8,description:"some text here",date:"14:00 22.08.2021"}]}],E="productData",T=k.a.mark(P),U=k.a.mark(A),z=k.a.mark(M),R=k.a.mark(F),_=k.a.mark(J);function P(e){var t,c,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.getItem("productData");case 3:if(t=e.sent,null!==(c=JSON.parse(t))){e.next=10;break}return localStorage.setItem(E,JSON.stringify(D)),c=D,e.next=10,Object(S.c)(v(c));case 10:return e.next=12,Object(S.c)(v(c));case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(0),n=e.t0.response,e.next=19,Object(S.c)(N(n));case 19:case"end":return e.stop()}}),T,null,[[0,14]])}function A(e){var t,c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(S.d)((function(t){return t.public.products.list.filter((function(t){return t.id!==e.payload}))}));case 3:return t=n.sent,n.next=6,localStorage.setItem(E,JSON.stringify(t));case 6:return n.next=8,Object(S.c)(f());case 8:n.next=16;break;case 10:return n.prev=10,n.t0=n.catch(0),console.log(n.t0),c=n.t0.response,n.next=16,Object(S.c)(N(c));case 16:case"end":return n.stop()}}),U,null,[[0,10]])}function M(e){var t,c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(S.d)((function(t){return t.public.products.list.concat(e.payload)}));case 3:return t=n.sent,n.next=6,localStorage.setItem(E,JSON.stringify(t));case 6:return n.next=8,Object(S.c)(f());case 8:n.next=16;break;case 10:return n.prev=10,n.t0=n.catch(0),console.log(n.t0),c=n.t0.response,n.next=16,Object(S.c)(N(c));case 16:case"end":return n.stop()}}),z,null,[[0,10]])}function F(e){var t,c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(S.d)((function(t){return t.public.products.list.map((function(t){return t.id===e.payload.id?e.payload:t}))}));case 3:return t=n.sent,n.next=6,localStorage.setItem(E,JSON.stringify(t));case 6:return n.next=8,Object(S.c)(f());case 8:n.next=16;break;case 10:return n.prev=10,n.t0=n.catch(0),console.log(n.t0),c=n.t0.response,n.next=16,Object(S.c)(N(c));case 16:case"end":return n.stop()}}),R,null,[[0,10]])}function J(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.f)(o,P);case 2:return e.next=4,Object(S.f)(m,A);case 4:return e.next=6,Object(S.e)(u,M);case 6:return e.next=8,Object(S.e)(j,F);case 8:case"end":return e.stop()}}),_)}var B=c(9),H=c(7),q=(c(49),c(1)),Y=function(){return Object(q.jsx)("nav",{id:"navbar",className:"navbar-wrapper",children:Object(q.jsx)("ul",{className:"navbar-links-wrapper",children:Object(q.jsx)("li",{className:"navbar-item",children:Object(q.jsx)(s.b,{to:"/",children:"Home"})})})})},$=(c(53),function(e){var t=e.item,c=e.setConfirmToDelete,n=Object(i.g)(),a=Object(B.b)();return Object(q.jsxs)("div",{className:" position-relative",children:[Object(q.jsxs)("div",{className:"d-flex align-items-center flex-column product-item",children:[Object(q.jsx)("p",{className:"text-center",children:t.name}),Object(q.jsx)("img",{width:t.size.width,height:t.size.height,src:t.imageUrl,alt:"item-img",className:"c-pointer",onClick:function(){var e;a((e=t.id,{type:x,payload:e})),n.push("/product")}}),Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"row justify-content-center",children:[Object(q.jsx)("div",{className:"col-lg-5",children:"Count: "}),Object(q.jsx)("div",{className:"col-lg-5",children:t.count})]})}),Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"row justify-content-center",children:[Object(q.jsx)("div",{className:"col-lg-5",children:"Comments: "}),Object(q.jsx)("div",{className:"col-lg-5",children:t.comments.length})]})}),Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"row justify-content-center",children:[Object(q.jsx)("div",{className:"col-lg-5",children:"Weight: "}),Object(q.jsx)("div",{className:"col-lg-5",children:t.weight})]})})]}),Object(q.jsx)("span",{className:"product-item-delete-mark",onClick:function(){c({id:t.id,show:!0})},children:"\u2716"})]})}),V=c(65),L=(c(54),c(66)),W=c(67),K=(c(55),function(e){var t=e.show,c=e.handleClose,n=e.id,a=Object(B.b)(),r=function(){c()};return Object(q.jsxs)(L.a,{show:t,onHide:r,children:[Object(q.jsx)(L.a.Header,{closeButton:!0,children:Object(q.jsx)(L.a.Title,{children:"Delete"})}),Object(q.jsx)(L.a.Body,{children:"Are you sure to delete item?"}),Object(q.jsx)(L.a.Footer,{children:Object(q.jsx)("div",{className:"container btn-delete-group",children:Object(q.jsxs)("div",{className:"row",children:[Object(q.jsx)("div",{className:"col-lg-6",children:Object(q.jsx)(W.a,{size:"lg",variant:"danger",onClick:r,children:"No"})}),Object(q.jsx)("div",{className:"col-lg-6",children:Object(q.jsx)(W.a,{size:"lg",variant:"success",onClick:function(){"number"===typeof n&&a({type:m,payload:n}),r()},children:"Yes"})})]})})})]})}),G=function(){var e=Object(B.c)((function(e){return e.public.products.list})),t=Object(B.c)((function(e){return e.public.products.loading})),c=Object(B.b)(),a=Object(n.useState)({id:null,show:!1}),r=Object(H.a)(a,2),s=r[0],i=r[1];return Object(q.jsxs)("div",{className:"container",children:[Object(q.jsx)("div",{className:"row",children:t?Object(q.jsx)("div",{className:"mt-5 d-flex justify-content-center",children:Object(q.jsx)(V.a,{animation:"border"})}):e.length>0?e.map((function(e){return Object(q.jsx)("div",{className:"col-lg-4 product-item-wrapper",children:Object(q.jsx)($,{item:e,setConfirmToDelete:i})},e.id)})):Object(q.jsxs)("div",{className:"text-center",children:["Dont have items... Create new or",Object(q.jsx)("span",{className:"inline-load-mocked",onClick:function(){localStorage.setItem(E,JSON.stringify(D)),c(f())},children:" load mocked"})]})}),Object(q.jsx)(K,{show:s.show,id:s.id,handleClose:function(){i(Object(y.a)(Object(y.a)({},s),{},{show:!1}))}})]})},Q=(c(56),function(){var e=Object(B.b)(),t=Object(n.useState)(!1),c=Object(H.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),i=Object(H.a)(s,2),o=i[0],l=i[1];Object(n.useEffect)((function(){e({type:b,payload:a})}),[a]),Object(n.useEffect)((function(){e({type:p,payload:o})}),[o]);return Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"row",children:[Object(q.jsx)("div",{className:"col-lg-6",children:Object(q.jsxs)("button",{className:"btn btn-primary w-100 bg-transparent text-black",onClick:function(){r(!a)},children:["Sort by count ",Object(q.jsx)("span",{className:a?"fw-bold sort-by-count":"fw-bold sort-by-count rotate",children:"\u25bc"})]})}),Object(q.jsx)("div",{className:"col-lg-6",children:Object(q.jsx)("button",{className:"btn btn-primary w-100 bg-transparent text-black",onClick:function(){l(!o)},children:Object(q.jsxs)("span",{children:["Sort by name ",o?"(z-A)":"(A-z)"]})})})]})})}),X=(c(57),function(){return Date.now()+Math.random()}),Z=function(e){var t=e.show,c=e.handleClose,a=e.item,r=Object(B.b)(),s=Object(n.useState)(""),i=Object(H.a)(s,2),o=i[0],l=i[1],d=Object(n.useState)(""),m=Object(H.a)(d,2),b=m[0],p=m[1],h=Object(n.useState)(""),O=Object(H.a)(h,2),x=O[0],g=O[1],f=Object(n.useState)(""),v=Object(H.a)(f,2),N=v[0],w=v[1];Object(n.useEffect)((function(){a&&(l(a.imageUrl),p(a.name),g(a.count.toString()),w(a.weight))}),[a]);var y=function(){c(!1)};return Object(q.jsxs)(L.a,{show:t,onHide:y,children:[Object(q.jsx)(L.a.Header,{closeButton:!0,children:Object(q.jsx)(L.a.Title,{children:a?"Redact":"Create"})}),Object(q.jsx)(L.a.Body,{children:Object(q.jsx)("form",{id:"product-modal",onSubmit:function(e){if(e.preventDefault(),a){var t={id:a.id,imageUrl:o,name:b,count:parseInt(x,10),weight:N,size:{width:200,height:200},comments:a.comments};r(function(e){return{type:j,payload:e}}(t)),l(""),p(""),g(""),w(""),y()}else{var c={id:X(),imageUrl:o,name:b,count:parseInt(x,10),weight:N,size:{width:200,height:200},comments:[]};r(function(e){return{type:u,payload:e}}(c)),l(""),p(""),g(""),w(""),y()}},children:Object(q.jsxs)("div",{className:"container",children:[Object(q.jsx)("div",{className:"row mb-3",children:Object(q.jsxs)("div",{className:"col-lg-12",children:[Object(q.jsx)("label",{htmlFor:"img-url",className:"form-label",children:"Product image"}),Object(q.jsx)("input",{required:!0,id:"img-url",type:"url",value:o,onChange:function(e){l(e.target.value)},placeholder:"Enter image url...",className:"form-control",pattern:"^https?://(?:[a-z0-9\\-]+\\.)+[a-z]{2,6}(?:/[^/#?]+)+\\.(?:jpg|gif|png)$"})]})}),Object(q.jsx)("div",{className:"row mb-3",children:Object(q.jsxs)("div",{className:"col-lg-12",children:[Object(q.jsx)("label",{htmlFor:"name",className:"form-label",children:"Product name"}),Object(q.jsx)("input",{required:!0,id:"name",type:"text",value:b,onChange:function(e){p(e.target.value)},placeholder:"Enter product name...",className:"form-control",pattern:"^[A-z\\s]+$"})]})}),Object(q.jsx)("div",{className:"row mb-3",children:Object(q.jsxs)("div",{className:"col-lg-12",children:[Object(q.jsx)("label",{htmlFor:"count",className:"form-label",children:"Product amount"}),Object(q.jsx)("input",{required:!0,id:"count",type:"number",value:x,onChange:function(e){g(e.target.value)},placeholder:"Enter product amount...",className:"form-control",min:"0"})]})}),Object(q.jsx)("div",{className:"row mb-3",children:Object(q.jsxs)("div",{className:"col-lg-12",children:[Object(q.jsx)("label",{htmlFor:"weight",className:"form-label",children:"Product weight"}),Object(q.jsx)("input",{required:!0,id:"weight",type:"text",value:N,onChange:function(e){w(e.target.value)},placeholder:"Enter product weight...",className:"form-control",pattern:"/^[\\d]${0,9}+\\.(?:g|kg)$/"})]})})]})})}),Object(q.jsx)(L.a.Footer,{children:Object(q.jsx)("div",{className:"container btn-product-modal",children:Object(q.jsxs)("div",{className:"row",children:[Object(q.jsx)("div",{className:"col-lg-6",children:Object(q.jsx)(W.a,{size:"lg",variant:"danger",onClick:y,children:"No"})}),Object(q.jsx)("div",{className:"col-lg-6",children:Object(q.jsx)(W.a,{type:"submit",form:"product-modal",size:"lg",variant:"success",children:"Yes"})})]})})})]})},ee=function(){var e=Object(n.useState)(!1),t=Object(H.a)(e,2),c=t[0],a=t[1];return Object(q.jsxs)("div",{children:[Object(q.jsx)(Y,{}),Object(q.jsx)(Q,{}),Object(q.jsx)("div",{className:"container pt-2",children:Object(q.jsx)("button",{className:"btn btn-primary",onClick:function(){return a(!0)},children:"+ New product"})}),Object(q.jsx)(G,{}),Object(q.jsx)(Z,{show:c,handleClose:a})]})},te=(c(58),function(e){return e<10?"0".concat(e):e.toString()}),ce=(c(59),function(e){var t=e.item,c=Object(B.b)(),a=Object(n.useState)(""),r=Object(H.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)({state:!1,message:""}),l=Object(H.a)(o,2),d=l[0],u=l[1];Object(n.useEffect)((function(){if(s.length>0){var e="";s.trim().match(/^[\w\s.]+$/)||(e+="Incorrect comment. Comment should not have a special symbols. "),s.length>=255&&(e+="Max symbols length - 255"),u(e?{state:!0,message:e}:{state:!1,message:""})}else u({state:!1,message:""})}),[s]);return Object(q.jsx)("div",{className:"d-flex flex-column new-comment-wrapper col-lg-12 pt-3 pb-3",children:Object(q.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n,a=new Date,r=te(a.getMonth()+1),o=te(a.getHours()),l=te(a.getMinutes()),d="".concat(o,":").concat(a.getMinutes()," ").concat(l,".").concat(r,".").concat(a.getFullYear()),u={productId:t.id,id:X(),date:d,description:s};console.log(X()),c((n={productId:t.id,comment:u},{type:h,payload:n})),i("")},children:[Object(q.jsx)("div",{className:"container",children:Object(q.jsx)("div",{className:"row mb-3",children:Object(q.jsxs)("div",{className:"col-lg-12",children:[Object(q.jsx)("label",{htmlFor:"new-comment",className:"form-label",children:"Create comment"}),Object(q.jsx)("input",{required:!0,id:"new-comment",type:"text",placeholder:"Enter your comment...",className:"form-control",value:s,onChange:function(e){var t=e.target;i(t.value)}}),d.state&&Object(q.jsx)("small",{className:"error-text fw-bold",children:d.message})]})})}),Object(q.jsx)("div",{className:"row",children:Object(q.jsx)("div",{className:"col-lg-2",children:Object(q.jsx)("button",{className:"btn btn-dark",type:"submit",disabled:d.state,children:"Comment"})})})]})})}),ne=(c(60),function(e){var t=e.item,c=Object(B.b)();return Object(q.jsxs)("div",{className:"d-flex flex-column comment-item position-relative",children:[Object(q.jsxs)("p",{className:"comment-item-date",children:["Date: ",t.date]}),Object(q.jsx)("p",{className:"comment-item-text",children:t.description}),Object(q.jsx)("span",{className:"product-item-delete-mark",onClick:function(){var e;c((e={productId:t.productId,commentId:t.id},{type:O,payload:e}))},children:"\u2716"})]})}),ae=function(e){var t=e.item,c=t.comments,a=Object(n.useState)(!1),r=Object(H.a)(a,2),s=r[0],i=r[1];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)("div",{className:"d-flex align-items-center flex-column product-item mb-3 col-lg-6 justify-content-center position-relative",children:[Object(q.jsx)("p",{className:"text-center",children:t.name}),Object(q.jsx)("img",{width:t.size.width,height:t.size.height,src:t.imageUrl,alt:"item-img"}),Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"row text-center",children:[Object(q.jsx)("div",{className:"col-lg-6",children:"Count: "}),Object(q.jsx)("div",{className:"col-lg-6",children:t.count})]})}),Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"row text-center",children:[Object(q.jsx)("div",{className:"col-lg-6",children:"Comments: "}),Object(q.jsx)("div",{className:"col-lg-6",children:t.comments.length})]})}),Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"row text-center",children:[Object(q.jsx)("div",{className:"col-lg-6",children:"Weight: "}),Object(q.jsx)("div",{className:"col-lg-6",children:t.weight})]})}),Object(q.jsx)("span",{className:"product-item-redact",onClick:function(){return i(!0)},children:"Redact"})]}),Object(q.jsxs)("div",{className:"d-flex flex-column comment-wrapper col-lg-12 mb-3",children:[Object(q.jsx)("h2",{className:"text-center",children:"Comments"}),c.length>0?c.map((function(e){return Object(q.jsx)(ne,{item:e},e.id.toString())})):Object(q.jsx)("div",{className:"text-center",children:"No comments here..."})]}),Object(q.jsx)(ce,{item:t}),Object(q.jsx)(Z,{show:s,handleClose:i,item:t})]})},re=function(){var e=Object(B.b)(),t=Object(B.c)((function(e){return e.public.products.active})),c=Object(B.c)((function(e){return e.public.products.list})),a=Object(n.useState)(c.find((function(e){return e.id===t}))),r=Object(H.a)(a,2),s=r[0],o=r[1];return Object(n.useEffect)((function(){null!==t&&o(c.find((function(e){return e.id===t})))}),[t,c]),Object(n.useEffect)((function(){return function(){e({type:g})}}),[]),Object(q.jsxs)("div",{children:[Object(q.jsx)(Y,{}),Object(q.jsx)("div",{className:"container",children:Object(q.jsx)("div",{className:"row justify-content-center",children:c&&t&&s?Object(q.jsx)(ae,{item:s}):Object(q.jsx)(i.a,{to:"/"})})})]})},se=function(){var e=Object(B.b)();return Object(n.useEffect)((function(){e(f())}),[]),Object(q.jsx)(s.a,{basename:"/customer-product-list",children:Object(q.jsxs)(i.d,{children:[Object(q.jsx)(i.b,{exact:!0,path:"/",component:ee}),Object(q.jsx)(i.b,{path:"/product",component:re}),Object(q.jsx)(i.b,{path:"**",children:Object(q.jsx)(i.a,{to:"/"})})]})})},ie=(c(61),c(62),function(){return Object(q.jsx)("div",{className:"app",children:Object(q.jsx)(se,{})})}),oe=c(22),le=c(39),de=k.a.mark(me),ue=k.a.mark(be),je=k.a.mark(pe);function me(e){var t,c,n,a,r;return k.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,t=e.payload,c=t.productId,n=t.comment,s.next=4,Object(S.d)((function(e){return e.public.products.list}));case 4:return a=(a=s.sent).map((function(e){return e.id===c?(e.comments.push(n),e):e})),s.next=8,localStorage.setItem(E,JSON.stringify(a));case 8:return s.next=10,Object(S.c)(f());case 10:s.next=18;break;case 12:return s.prev=12,s.t0=s.catch(0),console.log(s.t0),r=s.t0.response,s.next=18,Object(S.c)(N(r));case 18:case"end":return s.stop()}}),de,null,[[0,12]])}function be(e){var t,c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(S.d)((function(t){return t.public.products.list.map((function(t){var c=e.payload,n=c.productId,a=c.commentId;return t.id===n&&(t.comments=t.comments.filter((function(e){return e.id!==a}))),t}))}));case 3:return t=n.sent,n.next=6,localStorage.setItem(E,JSON.stringify(t));case 6:return n.next=8,Object(S.c)(f());case 8:n.next=16;break;case 10:return n.prev=10,n.t0=n.catch(0),console.log(n.t0),c=n.t0.response,n.next=16,Object(S.c)(N(c));case 16:case"end":return n.stop()}}),ue,null,[[0,10]])}function pe(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.f)(h,me);case 2:return e.next=4,Object(S.f)(O,be);case 4:case"end":return e.stop()}}),je)}var he=k.a.mark(ge),Oe=Object(oe.b)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case l:return Object(y.a)(Object(y.a)({},e),{},{loading:!1,list:t.payload});case d:return Object(y.a)(Object(y.a)({},e),{},{loading:!1,error:t.error});case x:return Object(y.a)(Object(y.a)({},e),{},{active:t.payload});case g:return Object(y.a)(Object(y.a)({},e),{},{active:null});case m:return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case u:case j:case b:return Object(y.a)(Object(y.a)({},e),{},{list:Object(w.a)(e.list.sort((function(e,c){return e.count>c.count?t.payload?-1:1:e.count<c.count?t.payload?1:-1:0})))});case p:return Object(y.a)(Object(y.a)({},e),{},{list:Object(w.a)(e.list.sort((function(e,c){return e.name>c.name?t.payload?-1:1:e.name<c.name?t.payload?1:-1:0})))});case h:case O:default:return e}}}),xe=Object(oe.b)({public:Oe});function ge(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)([Object(S.b)(J),Object(S.b)(pe)]);case 2:case"end":return e.stop()}}),he)}var fe=oe.c,ve=Object(le.a)(),Ne=Object(oe.d)(xe,fe(Object(oe.a)(ve)));ve.run(ge);r.a.render(Object(q.jsx)(B.a,{store:Ne,children:Object(q.jsx)(ie,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.e4ee7545.chunk.js.map