(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},85:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(3),n=c.n(s),i=c(33),r=c.n(i),o=(c(59),c(60),c(6)),l=c(8),j=c(14),d=c(5),b=(c(61),c(29)),u=c(51),m=c(17),O=c(15),_=c(34),h=c(28),x=c(25),f=(c(45),x.a.default.initializeApp({apiKey:"AIzaSyAfvXF_83pyCtFPcgjNA85DqD0dTZb5tO4",authDomain:"addenda-303ae.firebaseapp.com",projectId:"addenda-303ae",storageBucket:"addenda-303ae.appspot.com",messagingSenderId:"875879462267",appId:"1:875879462267:web:b06dcdb743eb1a9b0d79de"}));function v(){return x.a.firestore(f)}c(63);var p=c(0),N=c(19),g=Object(s.createContext)(),k=function(e){var t=e.children,c=Object(s.useState)([]),n=Object(d.a)(c,2),i=n[0],r=n[1],o=Object(s.useState)(),l=Object(d.a)(o,2),j=l[0],b=l[1],u=function(e){return i.find((function(t){return t.item.bookId===e}))},m=function(e,t){u(e).quantity+=t},O=function(e,t,c){i.length&&u(t)?m(t,c):r([].concat(Object(N.a)(i),[e]))},_=function(){return i.reduce((function(e,t){return e+t.quantity}),0)},h=Object(s.useState)([]),x=Object(d.a)(h,2),f=x[0],v=x[1],p=function(e){return f.find((function(t){return t.id===e.id}))};return Object(a.jsx)(g.Provider,{value:{cart:i,setCart:r,searchIdInCart:u,stock:j,setStock:b,addMoreToCart:m,changeQuantity:function(e,t){u(e).quantity=t,r(Object(N.a)(i))},removeFromCart:function(e){var t=i.filter((function(t){return t.item.bookId!==e}));r(t)},addProduct:function(e,t){var c={item:{bookId:e.id,picture:e.pictureurl,name:e.name,author:e.author,price:e.price,stock:e.stock,editorial:e.editorial,isbn:e.isbn},quantity:t};O(c,c.item.bookId,t),_()},mergeDuplicate:O,clearCart:function(){r([])},total:function(){return i.reduce((function(e,t){return e+t.item.price*t.quantity}),0)},cartCounter:_,favourites:f,inFav:p,addFavourite:function(e){!p(e)&&v([].concat(Object(N.a)(f),[e]))},removeFavourite:function(e){var t=f.filter((function(t){return t.id!==e.id}));v(t)}},children:t})},y=function(){var e=Object(s.useContext)(g),t=e.cart,c=e.cartCounter,n=c();return t.length&&c(),Object(a.jsx)("div",{className:"user__cart",children:Object(a.jsxs)(o.b,{to:"/cart",children:[Object(a.jsx)(p.b.Provider,{value:{className:"cart__icon"},children:Object(a.jsxs)("span",{className:"cart__link link",href:"#home",children:["Carrito",Object(a.jsx)(O.a,{})]})}),Object(a.jsxs)("p",{className:"cart__counter",children:["\xcdtems: ",n||0]})]})})},C=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){v().collection("categories").orderBy("order","asc").get().then((function(e){0===e.size&&console.log("No hay resultados");var t=e.docs.map((function(e){return Object(j.a)({catId:e.id},e.data())}));n(t)}))}),[]),Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsxs)("div",{className:"navbar__main",children:[Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("img",{src:"/images/addenda1.png",className:"navbar__logo",alt:"logo"})}),Object(a.jsxs)("div",{className:"menu__icon",children:[Object(a.jsx)(o.b,{to:"/cart",children:Object(a.jsx)(O.a,{className:"user__cart__icon icon"})}),Object(a.jsx)("a",{href:"#user__tab",children:Object(a.jsx)(_.a,{className:"user__menu__icon icon"})}),Object(a.jsx)("a",{href:"#navbar__menu",className:"dropdown",children:Object(a.jsx)(m.d,{className:"navbar__menu__icon icon"})})]}),Object(a.jsxs)("ul",{className:"navbar__menu",id:"navbar__menu",children:[Object(a.jsx)("a",{href:"#close",children:Object(a.jsx)(h.a,{className:"navbar__close"})}),Object(a.jsx)("li",{className:"menu__item",children:Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("span",{className:"menu__link link",children:"Home"})})}),Object(a.jsxs)("li",{className:"menu__item catalogo",children:[Object(a.jsx)(o.b,{to:"/",children:Object(a.jsxs)("span",{className:"menu__link link main__link",children:["Cat\xe1logo",Object(a.jsx)(u.a,{className:"catalogo__icon"})]})}),Object(a.jsx)("ul",{className:"catalogo__dropdown",children:c.map((function(e){return Object(a.jsx)("li",{className:"cat-dropdown__item",children:Object(a.jsx)(o.b,{to:"/category/".concat(e.catId),children:e.name})},e.catId)}))})]}),Object(a.jsx)("li",{className:"menu__item",children:Object(a.jsx)(o.b,{to:"/ubicacion",children:Object(a.jsx)("span",{className:"menu__link link",children:"Ubicaci\xf3n"})})}),Object(a.jsx)("li",{className:"menu__item",children:Object(a.jsx)(o.b,{to:"/contacto",children:Object(a.jsx)("span",{className:"menu__link link",children:"Contacto"})})})]})]}),Object(a.jsxs)("div",{className:"navbar__user",children:[Object(a.jsx)(y,{}),Object(a.jsxs)("div",{className:"user__tab",id:"user__tab",children:[Object(a.jsxs)("span",{children:["Nombre.usuario",Object(a.jsx)(b.a,{className:"user__arrowicon"}),Object(a.jsx)("a",{href:"#close",children:Object(a.jsx)(h.a,{className:"usermenu__close"})})]}),Object(a.jsx)("ul",{className:"user__menu",children:["Registrarse","Ingresar",{name:"Favoritos",link:"/favourites"},{name:"Carrito",link:"/cart"}].map((function(e,t){return"string"===typeof e?Object(a.jsx)("li",{className:"user-menu__item",children:e},t):Object(a.jsx)(o.b,{className:e.name,to:e.link,children:Object(a.jsx)("li",{className:"user-menu__item",children:e.name})},t)}))})]})]}),Object(a.jsx)("div",{className:"navbar__search",children:Object(a.jsxs)("div",{className:"navbar__search--container",children:[Object(a.jsx)("input",{className:"search__input",type:"text",placeholder:"Ingresar t\xedtulo, autor, ISBN o palabra clave"}),Object(a.jsx)("select",{className:"search__select",children:["Palabra clave","T\xedtulo","Autor","ISBN"].map((function(e,t){return Object(a.jsx)("option",{className:"select__item",children:e},t)}))}),Object(a.jsx)("div",{className:"search__button",children:Object(a.jsx)(b.b,{className:"search__icon"})})]})})]})},w=(c(68),c(69),function(e){var t=e.item;return Object(a.jsx)(n.a.Fragment,{children:Object(a.jsxs)("div",{className:"item__div",children:[Object(a.jsx)(o.b,{to:"/item/".concat(t.id),children:Object(a.jsx)("img",{src:""+t.pictureurl,className:"item__cover",alt:"book-cover"})}),Object(a.jsxs)("div",{className:"item__info",children:[Object(a.jsx)("span",{className:"info__title",children:t.name}),Object(a.jsx)("span",{className:"info__author",children:t.author}),Object(a.jsxs)("span",{className:"info__price",children:["AR$ ",t.price]})]})]},t.id)})}),I=function(e){var t=e.items;return Object(a.jsx)("div",{className:"item-list",children:t.map((function(e){return Object(a.jsx)(w,{item:e},e.id)}))})};c(70);function S(e){var t=e.loading;return Object(a.jsxs)("div",{className:"loading__div",children:[Object(a.jsx)("h1",{className:"message__title",children:t}),Object(a.jsx)("img",{src:"/images/spinner.png",className:"App-logo",alt:"logo"})]})}c(71);var A=function(e){var t=e.text;return Object(a.jsxs)("div",{className:"not__found",children:[Object(a.jsx)("img",{src:"/images/404.png",alt:"error 404"}),Object(a.jsx)("h1",{children:t})]})},F=(c(72),function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],i=function(){!c&&window.pageYOffset>400?n(!0):c&&window.pageYOffset<=400&&n(!1)};Object(s.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}));return Object(a.jsx)(b.c,{className:"scroll__top",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:c?"flex":"none"}})}),E=function(e){var t=e.loading,c=e.noMatch,n=Object(s.useState)([]),i=Object(d.a)(n,2),r=i[0],o=i[1],b=Object(s.useState)(!1),u=Object(d.a)(b,2),m=u[0],O=u[1],_=Object(l.f)().categoryId;return Object(s.useEffect)((function(){var e=v();return(_?e.collection("catalog").where("categoryId","array-contains",_).where("stock",">",0):e.collection("catalog").where("stock",">",0)).get().then((function(e){0===e.size&&console.log("No hay resultados");var t=e.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));t.length?o(t):O(!0)})),function(){return o([])+O(!1)}}),[_]),Object(a.jsxs)("div",{className:"item-list-display",children:[Object(a.jsx)(I,{items:r}),r.length||m?null:Object(a.jsx)(S,{loading:t}),!r.length&&m?Object(a.jsx)(A,{text:c}):null,Object(a.jsx)(F,{})]})},z=(c(73),c(74),c(20)),P=(c(75),function(e){var t=e.initial,c=e.stock,n=e.onAdd,i=Object(s.useState)(t),r=Object(d.a)(i,2),o=r[0],l=r[1];return Object(s.useEffect)((function(){return 0===c&&l(0),function(){l(t)}}),[c,t]),Object(a.jsxs)("div",{className:"item-counter",children:[Object(a.jsxs)("div",{className:"counter-controls",children:[Object(a.jsx)("button",{onClick:function(){o>=t&&l(o-1)},className:"button",disabled:0===o||0===c,children:Object(a.jsx)(m.a,{className:"minus-icon"})}),Object(a.jsx)("span",{className:"counter",children:o}),Object(a.jsx)("button",{onClick:function(){o<c&&l(o+1)},className:"button",disabled:o===c||0===c,children:Object(a.jsx)(m.b,{className:"plus-icon"})})]}),c>0?Object(a.jsxs)("button",{className:"add-item",disabled:0===o,onClick:function(){n(o)},children:["Agregar ",o>0&&" ".concat(o),Object(a.jsx)(O.a,{className:"cart-icon"})]}):Object(a.jsx)("button",{className:"add-item",disabled:!0,children:"Sin stock"})]})}),q=(c(76),function(e){var t=e.item,c=e.setModal,n=e.addItems,i=e.setAddItems,r=e.stock,l=e.setStock,j=Object(s.useState)(!1),b=Object(d.a)(j,2),u=b[0],m=b[1],_=Object(s.useState)(!1),h=Object(d.a)(_,2),x=h[0],f=h[1],v=Object(s.useContext)(g).addProduct;return Object(a.jsx)("div",{className:"modal__div",children:Object(a.jsxs)("div",{className:"cart__modal",children:[Object(a.jsx)("button",{className:"modal__exit",onClick:function(){i(n-n),c(!1)},children:"X"}),Object(a.jsx)("img",{className:"modal__cover",src:""+t.pictureurl,alt:"foto de portada"}),Object(a.jsxs)("div",{className:"modal__info",children:[Object(a.jsxs)("div",{className:"m-info__item",children:[Object(a.jsx)("h1",{className:"item__name",children:t.name}),Object(a.jsx)("h2",{className:"item__author",children:t.author}),Object(a.jsxs)("span",{className:"item__price",children:["AR$ ",t.price]})]}),Object(a.jsxs)("div",{className:"m-info__cart",children:[Object(a.jsxs)("div",{className:"cart__detail",children:[Object(a.jsx)("span",{className:"detail__text",children:"Subtotal: "}),Object(a.jsxs)("div",{className:"detail__math",children:[Object(a.jsxs)("span",{className:"math__quantity",children:["Libro x ",n]}),Object(a.jsxs)("span",{className:"math__subtotal",children:["AR$ ",n*t.price]})]})]}),!u&&Object(a.jsx)("button",{className:x?"cart__confirm loading-state":"cart__confirm",onClick:function(){f(!0),l(r-n),v(t,n),setTimeout((function(){m(!0)}),1e3)},children:x?Object(a.jsxs)("span",{className:"span__loading",children:["Confirmando ",Object(a.jsx)("img",{className:"loading",src:"/images/greenloading.gif",alt:"loading"})]}):"Confirmar compra"}),u&&Object(a.jsx)(o.b,{to:"/cart",children:Object(a.jsxs)("button",{className:"cart__goCart",children:["Ir al carrito",Object(a.jsx)(O.a,{className:"cart__icon"})]})})]})]})]})})}),M=function(e){var t=e.item,c=Object(s.useContext)(g),n=c.stock,i=c.setStock,r=Object(s.useContext)(g),l=r.inFav,j=r.addFavourite,b=r.removeFavourite,u=Object(s.useState)(0),m=Object(d.a)(u,2),O=m[0],_=m[1],h=Object(s.useState)(!1),x=Object(d.a)(h,2),f=x[0],v=x[1],p=Object(s.useState)(!1),N=Object(d.a)(p,2),k=N[0],y=N[1];Object(s.useEffect)((function(){i(t.stock),l(t)&&y(!0)}),[i,t,l]);return Object(a.jsxs)("div",{className:"item__detail",children:[Object(a.jsxs)("div",{className:"detail__photo",children:[Object(a.jsx)("img",{src:""+t.pictureurl,alt:"foto de portada"}),Object(a.jsxs)("span",{className:"photo__favourite",children:[Object(a.jsx)(z.a,{onClick:function(){k?(y(!1),b(t)):(y(!0),j(t))},className:"favourite__icon",style:{color:k?"gold":"white"}}),k?Object(a.jsx)(o.b,{to:"/favourites",className:"favourites__link",children:Object(a.jsx)("p",{className:"favourite__added",children:"Mis favoritos"})}):Object(a.jsx)("p",{className:"favourite__add",children:"Agregar a favoritos"})]})]}),Object(a.jsxs)("div",{className:"detail__info",children:[Object(a.jsx)("h1",{className:"d-info__name",children:t.name}),Object(a.jsx)("h2",{className:"d-info__author",children:t.author}),Object(a.jsxs)("p",{className:"d-info__tags",children:["Categor\xedas:",void 0!==t.genre&&t.genre.map((function(e){return Object(a.jsxs)(o.b,{to:"/category/".concat(e.catId),children:[Object(a.jsx)("span",{children:e.name})," "]},e.catId)}))]}),Object(a.jsx)("p",{className:"d-info__synopsis",children:t.genre?"string"===typeof t.synopsis?t.synopsis:t.synopsis.map((function(e){return Object(a.jsx)("span",{className:"parr",children:e},e)})):null}),Object(a.jsxs)("div",{className:"detail__footer",children:[Object(a.jsxs)("div",{className:"detail__f-tecnica",children:[Object(a.jsx)("h3",{children:"Ficha t\xe9cnica"}),Object(a.jsxs)("p",{children:["Editorial: ",t.editorial]}),Object(a.jsxs)("p",{children:["A\xf1o de edici\xf3n: ",t.a\u00f1oedicion]}),Object(a.jsxs)("p",{children:["Encuadernaci\xf3n: ",t.encuadernacion]}),Object(a.jsxs)("p",{children:["ISBN: ",t.isbn]}),t.traduccion&&Object(a.jsxs)("p",{children:["Traducci\xf3n: ",t.traduccion]}),t.ilustracion&&Object(a.jsxs)("p",{children:["Ilustraci\xf3n: ",t.ilustracion]})]}),Object(a.jsxs)("div",{className:"detail__itemcounter",children:[Object(a.jsxs)("div",{className:"itemcounter__price",children:[Object(a.jsx)("span",{children:"Precio unitario: "}),Object(a.jsxs)("span",{className:"price__tag",children:["AR$ ",t.price]})]}),Object(a.jsx)(P,{initial:1,stock:n,onAdd:function(e){v(!0),_(e)}})]})]})]},t.id),f?Object(a.jsx)(q,{item:t,setModal:v,addItems:O,setAddItems:_,stock:n,setStock:i}):null]})},T=function(e){var t=e.loading,c=e.noMatch,n=Object(s.useState)({}),i=Object(d.a)(n,2),r=i[0],o=i[1],b=Object(s.useState)(!1),u=Object(d.a)(b,2),m=u[0],O=u[1],_=Object(l.f)().itemId;return Object(s.useEffect)((function(){return v().collection("catalog").doc(_).get().then((function(e){e.exists?o(Object(j.a)({id:e.id},e.data())):O(!0)})).catch((function(e){return console.log("Ocurri\xf3 un error: ".concat(e))})),function(){return O(!1)}}),[_]),Object(a.jsxs)("div",{className:"item-detail-display",children:[r.hasOwnProperty("id")?Object(a.jsx)(M,{item:r}):!m&&Object(a.jsx)(S,{loading:t}),m&&Object(a.jsx)(A,{text:c}),Object(a.jsx)(F,{})]})},$=(c(77),c(35)),B=(c(85),c(52)),R=function(e){var t=e.purchase,c=Object(s.useContext)(g),n=c.changeQuantity,i=c.removeFromCart,r=Object(s.useState)(0),o=Object(d.a)(r,2),l=o[0],j=o[1],b=Object(s.useState)(!1),u=Object(d.a)(b,2),O=u[0],_=u[1];return Object(a.jsxs)("li",{className:"itemlist__item",children:[Object(a.jsxs)("div",{className:"item__data",children:[Object(a.jsx)("img",{className:"item__cover cover__view",src:""+t.item.picture,alt:"portada"}),Object(a.jsxs)("div",{className:"data__main",children:[Object(a.jsx)("h2",{children:t.item.name}),Object(a.jsx)("h3",{children:t.item.author}),Object(a.jsx)("p",{children:t.item.editorial}),Object(a.jsxs)("p",{children:["ISBN: ",t.item.isbn]})]})]}),Object(a.jsx)("div",{className:O?"item__edit item__editing":"item__edit",children:O?Object(a.jsx)("button",{onClick:function(){return e=t.item.bookId,n(e,l),void _(!1);var e},children:"Guardar"}):Object(a.jsx)("button",{onClick:function(){return e=t.quantity,j(e),void _(!0);var e},children:"Editar"})}),Object(a.jsx)("div",{className:"item__pricee",children:Object(a.jsxs)("span",{children:["AR$ ",t.item.price]})}),Object(a.jsxs)("div",{className:O?"item__quantity item__editing":"item__quantity",children:[O&&Object(a.jsxs)("div",{className:"cart__counter",children:[Object(a.jsx)("button",{className:"button button-cart",onClick:function(){l>1&&j(l-1)},children:Object(a.jsx)(m.a,{className:"minus-icon minus-cart"})}),Object(a.jsx)("span",{children:l}),Object(a.jsx)("button",{className:"button button-cart",onClick:function(){return e=t.item.stock,void(l<e&&j(l+1));var e},children:Object(a.jsx)(m.b,{className:"plus-icon plus-cart"})})]}),!O&&Object(a.jsx)("span",{children:t.quantity})]}),Object(a.jsx)("div",{className:"item__subtotal",children:Object(a.jsxs)("span",{children:["AR$ ",t.item.price*t.quantity]})}),Object(a.jsx)("div",{className:"item__remove",children:Object(a.jsx)("button",{onClick:function(){return e=t.item.bookId,void i(e);var e},children:Object(a.jsx)(B.a,{})})})]},t.item.bookId)},D=c(44),L=c.n(D),G=c(53),H=(c(87),c(26)),Y=(c(88),function(e){var t=e.name,c=e.type,s=e.placeholder,i=e.valueHandler,r=e.validate,o=e.formError,l=o&&o.field_id===t,j=o&&o.field_id!==t;return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)("input",{type:c,name:t,placeholder:s,disabled:j,className:l?"form__input error__input":"form__input",onChange:i,onBlur:function(e){return r(e,e.target.value)}}),l?Object(a.jsx)("span",{children:o.message}):null]})}),J=function(e){var t=e.getInfo,c=e.orderId,i=Object(s.useState)(!1),r=Object(d.a)(i,2),o=r[0],l=r[1],b=Object(s.useState)(!1),u=Object(d.a)(b,2),m=u[0],O=u[1],_=Object(s.useState)({fullname:"",telephone:"",email:""}),h=Object(d.a)(_,2),x=h[0],f=h[1],v=Object(s.useState)(null),p=Object(d.a)(v,2),N=p[0],g=p[1],k={fullname:{regex:/^[a-zA-z]+ (.+\s+.*)|(.*\s+.+)[a-zA-z]+$/i,error:"Ingrese su nombre completo"},telephone:{regex:/^((\(?\d{3}\)?[-. ]?\d{4})|(\(?\d{4}\)?[-. ]?\d{3})|(\(?\d{5}\)?[-. ]?\d{2}))[-. ]?\d{4}$/,error:"Ingrese un n\xfamero v\xe1lido para Argentina. Ej: (011) 4780-9032"},email:{regex:/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,error:"Ingrese una direcci\xf3n de correo v\xe1lida"}},y=function(e,t){var c=k[e.target.name];c.regex.test(t)?g(null):g({field_id:e.target.name,message:c.error})},C=function(e){var t=Object(j.a)({},x);t[e.target.name]=e.target.value,f(t),N&&y(e,e.target.value)};return Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)("h2",{className:"form__title",children:"Complete sus datos"}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(!0),$.animateScroll.scrollToBottom({delay:1e3,smooth:"linear"}),setTimeout((function(){!N&&t(x),O(!0)}),1e3)},className:"form__form",children:[[{name:"fullname",type:"text",placeholder:"Nombre completo"},{name:"telephone",type:"tel",placeholder:"(011) 4780-9032"},{name:"email",type:"email",placeholder:"Email"}].map((function(e){return Object(a.jsx)(Y,{name:e.name,type:e.type,placeholder:e.placeholder,valueHandler:C,validate:y,formError:N},e.name)})),m?Object(a.jsx)("button",{className:"cartview__button form__submit",children:"Orden generada"}):Object(a.jsx)("button",{className:o?"cartview__button form__submit loading-state":"cartview__button form__submit",type:"submit",disabled:c,children:m||o?Object(a.jsxs)("span",{className:"span__loading",children:["Confirmando ",Object(a.jsx)("img",{className:"loading",src:"/images/greenloading.gif",alt:"loading"})]}):"Generar orden de compra"})]})]})},Q=(c(89),function(e){var t=e.userInfo,c=e.orderId,n=Object(s.useContext)(g).clearCart,i=Object(s.useState)(""),r=Object(d.a)(i,2),o=r[0],l=r[1],j=Object(s.useRef)(null);return Object(a.jsxs)("div",{className:"orderbill__div",name:"billing",children:[Object(a.jsxs)("p",{style:{color:"white"},children:["Gracias por tu compra ",t.fullname,"."]}),Object(a.jsxs)("span",{style:{color:"white"},children:["Est\xe9 es el c\xf3digo de tu pedido:",Object(a.jsx)("input",{value:c,ref:j,readOnly:!0,className:"orderId"})]}),Object(a.jsx)("button",{onClick:function(e){j.current.select(),document.execCommand("copy"),e.target.focus(),l("Copiado!")},className:"cartview__button copy",children:Object(a.jsx)(h.b,{})}),Object(a.jsx)("span",{className:"success",children:o}),Object(a.jsx)("button",{className:"cartview__button checkout",onClick:n,children:"CheckOut"})]})}),X=function(e){var t=e.cart,c=e.total,n=Object(s.useState)(),i=Object(d.a)(n,2),r=i[0],o=i[1],l=Object(s.useState)(""),b=Object(d.a)(l,2),u=b[0],m=b[1];Object(s.useEffect)((function(){r&&function(){var e=v().collection("orders"),a={buyer:r,items:t,date:x.a.firestore.Timestamp.fromDate(new Date),total:c};e.add(a).then((function(e){var t=e.id;m(t)})).catch((function(e){return console.log("Ha habido un error:",e)}))}()}),[r,t,c]),Object(s.useEffect)((function(){u&&Object(G.a)(L.a.mark((function e(){var c,a,s,n,i;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=v(),a=c.collection("catalog").where(x.a.firestore.FieldPath.documentId(),"in",t.map((function(e){return e.item.bookId}))),e.next=4,a.get();case 4:if(s=e.sent,n=c.batch(),i=[],s.docs.forEach((function(e,c){e.data().stock>=t[c].quantity?n.update(e.ref,{stock:e.data().stock-t[c].quantity}):i.push(Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id}))})),e.t0=0===i.length,!e.t0){e.next=12;break}return e.next=12,n.commit();case 12:case"end":return e.stop()}}),e)})))()}),[u,t]);var O=Object(H.b)({from:{opacity:0,transform:"translateY(-90%)"},to:{opacity:1,transform:"translateY(0%)"}});return Object(a.jsxs)(H.a.div,{className:"cartorder__div",style:O,children:[Object(a.jsx)(J,{getInfo:function(e){o(e)},orderId:u}),u&&Object(a.jsx)(Q,{userInfo:r,cart:t,orderId:u})]})},K=function(){var e=Object(s.useContext)(g),t=e.cart,c=e.total,i=e.clearCart,r=e.cartCounter,l=Object(s.useState)(!1),j=Object(d.a)(l,2),b=j[0],u=j[1],m=c(),_=r();return Object(a.jsxs)(n.a.Fragment,{children:[!t.length&&Object(a.jsx)("div",{className:"cartview__div wall",children:Object(a.jsxs)("div",{className:"cartview__display",children:[Object(a.jsxs)("div",{className:"cartview__firstrow",children:[Object(a.jsxs)("h1",{className:"cartview__title",children:["Mi Carrito",Object(a.jsx)(O.a,{})]}),Object(a.jsx)(o.b,{to:"/favourites",children:Object(a.jsxs)("button",{className:"cartview__favourite cartview__button",children:["Mis favoritos",Object(a.jsx)(z.a,{className:"cartview__icon"})]})})]}),Object(a.jsxs)("div",{className:"grid__banner tablet__view",children:[Object(a.jsx)("span",{className:"banner__product",children:"Producto"}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{children:"Precio"}),Object(a.jsx)("span",{children:"Cantidad"}),Object(a.jsx)("span",{children:"Subtotal"})]}),Object(a.jsxs)("div",{className:"cartview__notFound",children:[Object(a.jsx)("h2",{children:"Su carrito est\xe1 vac\xedo"}),Object(a.jsx)("img",{src:"/images/empty-box.png",alt:"carrito vac\xedo"}),Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("button",{className:"cartview__button",children:"Seguir comprando"})})]})]})}),t.length>=1&&Object(a.jsx)("div",{className:"cartview__div wall",style:{height:t.length>1&&"100%"},children:Object(a.jsxs)("div",{className:"cartview__display",children:[Object(a.jsxs)("div",{className:"cartview__firstrow",children:[Object(a.jsxs)("h1",{className:"cartview__title",children:["Mi Carrito",Object(a.jsx)(O.a,{className:"cartview__icon"}),Object(a.jsxs)("span",{className:"title__number",children:["(",_," Items)"]})]}),Object(a.jsxs)("button",{className:"cartview__favourite cartview__button",children:["Mis favoritos",Object(a.jsx)(z.a,{className:"cartview__icon"})]})]}),Object(a.jsxs)("div",{className:"grid__banner",children:[Object(a.jsx)("span",{className:"banner__product",children:"Producto"}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{children:"Precio"}),Object(a.jsx)("span",{children:"Cantidad"}),Object(a.jsx)("span",{className:"subtotal",children:"Subtotal"})]}),Object(a.jsx)("ul",{className:"grid__itemlist",children:t.map((function(e){return Object(a.jsx)(R,{purchase:e},e.item.bookId)}))}),Object(a.jsxs)("div",{className:"cartview__controls",children:[Object(a.jsxs)("div",{className:"align",children:[Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("button",{className:"cartview__button",children:"Seguir comprando"})}),Object(a.jsx)("button",{onClick:i,className:"cartview__button",children:"Vaciar carrito"})]}),Object(a.jsxs)("div",{className:"controls__total",children:[Object(a.jsxs)("div",{className:"total__row",children:[Object(a.jsx)("span",{children:"Subtotal:"})," ",Object(a.jsxs)("span",{className:"span__price",children:["AR$ ",m]})]}),Object(a.jsxs)("div",{className:"total__row",children:[Object(a.jsx)("span",{children:"Total:"})," ",Object(a.jsxs)("span",{className:"span__price",children:["AR$ ",m]})]}),Object(a.jsx)("button",{className:"cartview__button purchase",onClick:function(){return u(!0),void $.animateScroll.scrollToBottom()},children:"Iniciar compra"})]})]}),b&&Object(a.jsx)(X,{cart:t,total:m})]})})]})},U=(c(90),function(){var e=Object(s.useContext)(g),t=e.favourites,c=e.removeFavourite,n=Object(s.useState)(!1),i=Object(d.a)(n,2),r=i[0],l=i[1],j=Object(H.b)({from:{x:0},to:{x:1},config:{duration:400}});return Object(a.jsxs)("div",{className:"favourites__div wall",style:{backgroundImage:"url(".concat("images/bookshelf.png",")")},children:[r?Object(a.jsxs)("div",{className:"control__div",children:[Object(a.jsx)(z.b,{className:"control control__save",onClick:function(){return l(!1)}}),Object(a.jsx)("span",{children:"Guardar"})]}):Object(a.jsxs)("div",{className:"control__div",children:[Object(a.jsx)(_.b,{className:"control control__remove",onClick:function(){return l(!0)}}),Object(a.jsx)("span",{children:"Eliminar"})]}),Object(a.jsx)("div",{className:"bookshelf__display",children:t.map((function(e,t){return Object(a.jsxs)("div",{className:"bookshelf__item",children:[r&&Object(a.jsx)(m.c,{className:"favourite__remove",onClick:function(){return c(e)}}),Object(a.jsx)(o.b,{to:"/item/".concat(e.id),className:r?"link__disable":void 0,children:Object(a.jsx)(H.a.img,{src:e.pictureurl,style:{transform:j.x.interpolate({range:[0,.25,.5,.75,1],output:[0,-5,0,5,0]}).interpolate((function(e){return"rotate(".concat(e,"deg)")}))}})})]},t)}))})]})});var V=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(o.a,{children:Object(a.jsxs)(k,{children:[Object(a.jsx)(C,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(E,{loading:"Cargando..."})}),Object(a.jsx)(l.a,{exact:!0,path:"/category/:categoryId",children:Object(a.jsx)(E,{loading:"Cargando...",noMatch:"No se encontraron coincidencias"})}),Object(a.jsx)(l.a,{exact:!0,path:"/item/:itemId",children:Object(a.jsx)(T,{loading:"Cargando...",noMatch:"No se encontraron coincidencias"})}),Object(a.jsx)(l.a,{exact:!0,path:"/cart",children:Object(a.jsx)(K,{loading:"Cargando..."})}),Object(a.jsx)(l.a,{exact:!0,path:"/favourites",children:Object(a.jsx)(U,{})})]})]})})})},Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,92)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root")),Z()}},[[91,1,2]]]);
//# sourceMappingURL=main.e047aa1a.chunk.js.map