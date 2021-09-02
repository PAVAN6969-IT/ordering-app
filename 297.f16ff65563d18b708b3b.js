"use strict";(self.webpackChunkordering_app=self.webpackChunkordering_app||[]).push([[297],{297:(nt,C,f)=>{f.r(C),f.d(C,{OrderingComponent:()=>T,OrderingModule:()=>tt});var t=f(3018),m=f(8583),N=f(1103),h=f(7238);const w="400ms cubic-bezier(0.4,0.0,0.2,1)",S=[(0,h.oB)({height:0,visibility:"hidden"}),(0,h.jt)(w,(0,h.oB)({height:"*",visibility:"visible"}))],E=[(0,h.oB)({height:"*",visibility:"visible"}),(0,h.jt)(w,(0,h.oB)({height:0,visibility:"hidden"}))];let k=(()=>{class e{constructor(n,o,a){this._el=n,this._renderer=o,this.collapsed=new t.vpe,this.collapses=new t.vpe,this.expanded=new t.vpe,this.expands=new t.vpe,this.isExpanded=!0,this.collapseNewValue=!0,this.isCollapsed=!1,this.isCollapse=!0,this.isCollapsing=!1,this.isAnimated=!1,this._display="block",this._stylesLoaded=!1,this._COLLAPSE_ACTION_NAME="collapse",this._EXPAND_ACTION_NAME="expand",this._factoryCollapseAnimation=a.build(E),this._factoryExpandAnimation=a.build(S)}set display(n){this.isAnimated?(this._display=n,"none"!==n?this.show():this.hide()):this._renderer.setStyle(this._el.nativeElement,"display",n)}set collapse(n){this.collapseNewValue=n,(!this._player||this._isAnimationDone)&&(this.isExpanded=n,this.toggle())}get collapse(){return this.isExpanded}ngAfterViewChecked(){this._stylesLoaded=!0,this._player&&this._isAnimationDone&&(this._player.reset(),this._renderer.setStyle(this._el.nativeElement,"height","*"))}toggle(){this.isExpanded?this.hide():this.show()}hide(){this.isCollapsing=!0,this.isExpanded=!1,this.isCollapsed=!0,this.isCollapsing=!1,this.collapses.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._COLLAPSE_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.show():(this.collapsed.emit(this),this._renderer.setStyle(this._el.nativeElement,"display","none"))})}show(){this._renderer.setStyle(this._el.nativeElement,"display",this._display),this.isCollapsing=!0,this.isExpanded=!0,this.isCollapsed=!1,this.isCollapsing=!1,this.expands.emit(this),this._isAnimationDone=!1,this.animationRun(this.isAnimated,this._EXPAND_ACTION_NAME)(()=>{this._isAnimationDone=!0,this.collapseNewValue!==this.isCollapsed&&this.isAnimated?this.hide():(this.expanded.emit(this),this._renderer.removeStyle(this._el.nativeElement,"overflow"))})}animationRun(n,o){if(!n||!this._stylesLoaded)return r=>r();this._renderer.setStyle(this._el.nativeElement,"overflow","hidden"),this._renderer.addClass(this._el.nativeElement,"collapse");const a=o===this._EXPAND_ACTION_NAME?this._factoryExpandAnimation:this._factoryCollapseAnimation;return this._player&&this._player.destroy(),this._player=a.create(this._el.nativeElement),this._player.play(),r=>{var s;return null===(s=this._player)||void 0===s?void 0:s.onDone(r)}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(h._j))},e.\u0275dir=t.lG2({type:e,selectors:[["","collapse",""]],hostVars:10,hostBindings:function(n,o){2&n&&(t.uIk("aria-expanded",o.isExpanded)("aria-hidden",o.isCollapsed),t.ekj("collapse",o.isCollapse)("in",o.isExpanded)("show",o.isExpanded)("collapsing",o.isCollapsing))},inputs:{isAnimated:"isAnimated",display:"display",collapse:"collapse"},outputs:{collapsed:"collapsed",collapses:"collapses",expanded:"expanded",expands:"expands"},exportAs:["bs-collapse"]}),e})(),j=(()=>{class e{static forRoot(){return{ngModule:e,providers:[]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({}),e})();const D=["*"],B=function(e){return{"text-muted":e}};function F(e,i){if(1&e&&(t.TgZ(0,"button",7),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.Q6J("ngClass",t.VKq(2,B,n.isDisabled)),t.xp6(1),t.hij(" ",n.heading," ")}}const U=[[["","accordion-heading",""]],"*"],J=["[accordion-heading]","*"];let L=(()=>{class e{constructor(){this.closeOthers=!1,this.isAnimated=!1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=(0,t.Yz7)({factory:function(){return new e},token:e,providedIn:"root"}),e})(),x=(()=>{class e{constructor(n){this.isAnimated=!1,this.closeOthers=!1,this.groups=[],Object.assign(this,n)}closeOtherPanels(n){!this.closeOthers||this.groups.forEach(o=>{o!==n&&(o.isOpen=!1)})}addGroup(n){n.isAnimated=this.isAnimated,this.groups.push(n)}removeGroup(n){const o=this.groups.indexOf(n);-1!==o&&this.groups.splice(o,1)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(L))},e.\u0275cmp=t.Xpm({type:e,selectors:[["accordion"]],hostAttrs:["role","tablist",1,"panel-group",2,"display","block"],hostVars:1,hostBindings:function(n,o){2&n&&t.uIk("aria-multiselectable",o.closeOthers)},inputs:{isAnimated:"isAnimated",closeOthers:"closeOthers"},ngContentSelectors:D,decls:1,vars:0,template:function(n,o){1&n&&(t.F$t(),t.Hsn(0))},encapsulation:2}),e})(),R=(()=>{class e{constructor(n){this.isAnimated=!1,this.panelClass="panel-default",this.isDisabled=!1,this.isOpenChange=new t.vpe,this._isOpen=!1,this.accordion=n}get isOpen(){return this._isOpen}set isOpen(n){n!==this.isOpen&&(n&&this.accordion.closeOtherPanels(this),this._isOpen=n)}get isBs3(){return(0,N.XA)()}ngOnInit(){this.accordion.addGroup(this)}ngOnDestroy(){this.accordion.removeGroup(this)}toggleOpen(){this.isDisabled||(this.isOpen=!this.isOpen)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(x))},e.\u0275cmp=t.Xpm({type:e,selectors:[["accordion-group"],["accordion-panel"]],hostAttrs:[1,"panel",2,"display","block"],hostVars:2,hostBindings:function(n,o){2&n&&t.ekj("panel-open",o.isOpen)},inputs:{panelClass:"panelClass",isDisabled:"isDisabled",isOpen:"isOpen",heading:"heading"},outputs:{isOpenChange:"isOpenChange"},ngContentSelectors:J,decls:9,vars:6,consts:[[1,"panel","card",3,"ngClass"],["role","tab",1,"panel-heading","card-header",3,"ngClass","click"],[1,"panel-title"],["role","button",1,"accordion-toggle"],["class","btn btn-link","type","button",3,"ngClass",4,"ngIf"],["role","tabpanel",1,"panel-collapse","collapse",3,"collapse","isAnimated"],[1,"panel-body","card-block","card-body"],["type","button",1,"btn","btn-link",3,"ngClass"]],template:function(n,o){1&n&&(t.F$t(U),t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.NdJ("click",function(){return o.toggleOpen()}),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.YNc(4,F,2,4,"button",4),t.Hsn(5),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.Hsn(8,1),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.Q6J("ngClass",o.panelClass),t.xp6(1),t.Q6J("ngClass",o.isDisabled?"panel-disabled":"panel-enabled"),t.xp6(2),t.uIk("aria-expanded",o.isOpen),t.xp6(1),t.Q6J("ngIf",o.heading),t.xp6(2),t.Q6J("collapse",!o.isOpen)("isAnimated",o.isAnimated))},directives:[m.mk,m.O5,k],styles:["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"]}),e})(),V=(()=>{class e{static forRoot(){return{ngModule:e,providers:[]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.ez,j]]}),e})();function H(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",28),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit;return t.oxw(2).addItemBtn(a)}),t._uU(1,"Add"),t.qZA()}}function Q(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"button",29),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit;return t.oxw(2).backToAddItemBtn(a)}),t._UZ(2,"i",30),t.qZA(),t.TgZ(3,"span",31),t._uU(4),t.qZA(),t.TgZ(5,"button",29),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit;return t.oxw(2).addMoreQuantity(a)}),t._UZ(6,"i",32),t.qZA(),t.qZA()}if(2&e){const n=t.oxw().$implicit;t.xp6(4),t.Oqu(n.quantity)}}function Y(e,i){if(1&e&&(t.TgZ(0,"div",23),t.TgZ(1,"div",24),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5,"\u20b9 "),t.TgZ(6,"code"),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",25),t.YNc(9,H,2,0,"button",26),t.YNc(10,Q,7,1,"div",27),t.qZA(),t.qZA()),2&e){const n=i.$implicit;t.xp6(3),t.hij(" ",n.itemName," "),t.xp6(4),t.hij(" ",n.itemPrice,""),t.xp6(2),t.Q6J("ngIf",0==n.quantity),t.xp6(1),t.Q6J("ngIf",0!=n.quantity)}}function G(e,i){if(1&e&&(t.TgZ(0,"accordion",20),t.TgZ(1,"accordion-group",21),t.YNc(2,Y,11,4,"div",22),t.qZA(),t.qZA()),2&e){const n=i.$implicit;t.Q6J("isAnimated",!0),t.xp6(1),t.s9C("heading",n.menuHeading),t.xp6(1),t.Q6J("ngForOf",n.menuList)}}function $(e,i){if(1&e&&(t.TgZ(0,"code"),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.hij(" ",n.totalItemsSelected," Item")}}function z(e,i){if(1&e&&(t.TgZ(0,"div"),t.TgZ(1,"div",41),t.TgZ(2,"h6",38),t._uU(3),t.qZA(),t.TgZ(4,"p",38),t._uU(5," \u20b9 "),t.TgZ(6,"code"),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){const n=i.$implicit;t.xp6(3),t.Oqu(n.itemName),t.xp6(4),t.hij(" ",n.quantity*n.itemPrice,"")}}function K(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",33),t.TgZ(1,"div",34),t.TgZ(2,"h3"),t._uU(3,"Cart Empty"),t.qZA(),t.TgZ(4,"div",24),t.YNc(5,$,2,1,"code",27),t.qZA(),t.YNc(6,z,8,2,"div",35),t.qZA(),t.TgZ(7,"div",36),t.TgZ(8,"div",37),t.TgZ(9,"h5",38),t._uU(10,"Subtotal"),t.qZA(),t.TgZ(11,"p",38),t._uU(12," \u20b9 "),t.TgZ(13,"code"),t._uU(14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"button",39),t.NdJ("click",function(){return t.CHM(n),t.oxw().Checkout()}),t._uU(16,"Checkout "),t._UZ(17,"i",40),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(5),t.Q6J("ngIf",n.totalItemsSelected),t.xp6(1),t.Q6J("ngForOf",n.cartItems),t.xp6(8),t.hij(" ",n.subTotalVal,"")}}let T=(()=>{class e{constructor(){this.menuContent=[{menuHeading:"Recommended",menuList:[{id:1,itemName:"Chicken Tikka",itemPrice:229,quantity:0},{id:2,itemName:"Chicken 555 Full",itemPrice:299,quantity:0},{id:3,itemName:"Baby Corn Manchurian",itemPrice:240,quantity:0}]},{menuHeading:"Deserts",menuList:[{id:4,itemName:"Phirni",itemPrice:60,quantity:0},{id:5,itemName:"Kaddu Ki Kheer",itemPrice:70,quantity:0},{id:6,itemName:"Qubani Ka Meetha",itemPrice:70,quantity:0}]},{menuHeading:"Biryanis",menuList:[{id:7,itemName:"Egg Biryani",itemPrice:149,quantity:0},{id:8,itemName:"Chicken Biryani",itemPrice:199,quantity:0},{id:9,itemName:"Chicken Boneless Biryani",itemPrice:229,quantity:0}]},{menuHeading:"Kebabs",menuList:[{id:10,itemName:"Chicken Tikka",itemPrice:229,quantity:0},{id:11,itemName:"Chicken Reshmi Kebab",itemPrice:229,quantity:0},{id:12,itemName:"Tandoori Chicken",itemPrice:199,quantity:0}]},{menuHeading:"Non Veg Starters",menuList:[{id:13,itemName:"Chicken 555 Full",itemPrice:299,quantity:0},{id:14,itemName:"Chicken Manchurian",itemPrice:299,quantity:0},{id:15,itemName:"Chilli Chicken",itemPrice:299,quantity:0},{id:16,itemName:"Chicken Lollipop",itemPrice:199,quantity:0}]},{menuHeading:"Veg Starters",menuList:[{id:17,itemName:"Baby Corn Manchurian",itemPrice:240,quantity:0},{id:18,itemName:"Paneer Chilli",itemPrice:240,quantity:0},{id:19,itemName:"Paneer 65",itemPrice:240,quantity:0}]},{menuHeading:"Breads",menuList:[{id:20,itemName:"Tandoori Roti",itemPrice:25,quantity:0},{id:21,itemName:"Rumali Roti",itemPrice:20,quantity:0},{id:22,itemName:"Butter Roti",itemPrice:20,quantity:0},{id:23,itemName:"Plain Roti",itemPrice:25,quantity:0},{id:24,itemName:"Butter Roti",itemPrice:35,quantity:0}]}],this.enableAddBtn=!1,this.enableCart=!1,this.selectedNoItems=0,this.totalItemsSelected=0,this.subTotalVal=0,this.cartItems=[],this.checkoutList={menuList:{},tableno:0,totalItemsSelected:0,subTotalVal:0}}addItemBtn(n){n.quantity++,this.enableCart=!0,this.totalItemsSelected++,this.cartItems.push(n),this.subTotalVal=this.subTotalVal+n.itemPrice}backToAddItemBtn(n){let o=n.id;this.cartItems.forEach(a=>{a.id===o&&(a.quantity--,this.totalItemsSelected--,this.subTotalVal=this.subTotalVal-n.itemPrice,0==a.quantity&&(this.cartItems.splice(this.cartItems.findIndex(r=>r.id===o),1),0==this.cartItems.length&&(this.enableCart=!1,this.cartItems=[],this.totalItemsSelected=0,this.enableAddBtn=!0)))})}addMoreQuantity(n){n.quantity++,this.totalItemsSelected++,this.subTotalVal=this.subTotalVal+n.itemPrice}Checkout(){this.checkoutList.tableno=11,this.checkoutList.menuList=this.cartItems,this.checkoutList.subTotalVal=this.subTotalVal,this.checkoutList.totalItemsSelected=this.totalItemsSelected,window.localStorage.setItem("checkoutObj",JSON.stringify(this.checkoutList))}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-ordering"]],decls:24,vars:2,consts:[[1,"row","main-cont"],[1,"col-md-6","offset-md-2","ordering-container"],["id","carouselExampleIndicators","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-indicators"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","0","aria-current","true","aria-label","Slide 1",1,"active"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","1","aria-label","Slide 2"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide-to","2","aria-label","Slide 3"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","assets/images/1.jpg","alt","1",1,"d-block","w-100"],[1,"carousel-item"],["src","assets/images/2.jpg","alt","2",1,"d-block","w-100"],["src","assets/images/3.jpg","alt","3",1,"d-block","w-100"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleIndicators","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[3,"isAnimated",4,"ngFor","ngForOf"],["class","cust-sticky-top col-md-4 cart-section",4,"ngIf"],[3,"isAnimated"],[3,"heading"],["class","accordion-body",4,"ngFor","ngForOf"],[1,"accordion-body"],[1,"item-section"],[1,"btn-section"],["type","button","class","btn btn-light",3,"click",4,"ngIf"],[4,"ngIf"],["type","button",1,"btn","btn-light",3,"click"],[1,"btn","btn-light",3,"click"],[1,"fa","fa-minus"],[1,"quantityNumber"],[1,"fa","fa-plus"],[1,"cust-sticky-top","col-md-4","cart-section"],[1,"cart-inner-section"],[4,"ngFor","ngForOf"],[1,"total-section"],[1,"cost-area"],[1,"cart-Items"],["type","button",1,"btn","btn-info",3,"click"],[1,"fa","fa-right","arroe"],[1,"quantity-section"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"button",4),t._UZ(5,"button",5),t._UZ(6,"button",6),t.qZA(),t.TgZ(7,"div",7),t.TgZ(8,"div",8),t._UZ(9,"img",9),t.qZA(),t.TgZ(10,"div",10),t._UZ(11,"img",11),t.qZA(),t.TgZ(12,"div",10),t._UZ(13,"img",12),t.qZA(),t.qZA(),t.TgZ(14,"button",13),t._UZ(15,"span",14),t.TgZ(16,"span",15),t._uU(17,"Previous"),t.qZA(),t.qZA(),t.TgZ(18,"button",16),t._UZ(19,"span",17),t.TgZ(20,"span",15),t._uU(21,"Next"),t.qZA(),t.qZA(),t.qZA(),t.YNc(22,G,3,3,"accordion",18),t.qZA(),t.YNc(23,K,18,3,"div",19),t.qZA()),2&n&&(t.xp6(22),t.Q6J("ngForOf",o.menuContent),t.xp6(1),t.Q6J("ngIf",o.enableCart))},directives:[m.sg,m.O5,x,R],styles:[".main-cont[_ngcontent-%COMP%]{display:flex;margin:0}.main-cont[_ngcontent-%COMP%]   .cust-sticky-top[_ngcontent-%COMP%]{position:fixed;right:0}.ordering-container[_ngcontent-%COMP%]{overflow:scroll;padding-top:1rem}.ordering-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}[_nghost-%COMP%]     accordion-group .panel .panel-body .accordion-body{display:flex}[_nghost-%COMP%]     accordion-group .panel .panel-body .accordion-body .btn-section{margin-left:auto}[_nghost-%COMP%]     accordion-group .panel .panel-body .accordion-body .btn-section .quantityNumber{padding:1rem}[_nghost-%COMP%]     accordion-group .panel .panel-title .btn.btn-link{text-decoration:none;color:#000}[_nghost-%COMP%]     accordion-group .panel .panel-title .btn.btn-linkclick{border:none}.cart-section[_ngcontent-%COMP%]   .cart-inner-section[_ngcontent-%COMP%]{height:20rem;overflow-y:scroll;margin:1rem;padding:1rem;border:1px solid grey}.cart-section[_ngcontent-%COMP%]   .quantity-section[_ngcontent-%COMP%]{display:flex}.cart-section[_ngcontent-%COMP%]   .quantity-section[_ngcontent-%COMP%]   .cart-Items[_ngcontent-%COMP%]{margin:0 1rem}.cart-section[_ngcontent-%COMP%]   .total-section[_ngcontent-%COMP%]{padding:1rem;margin:1rem;display:flex;flex-flow:column wrap}.cart-section[_ngcontent-%COMP%]   .total-section[_ngcontent-%COMP%]   .cost-area[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),e})();var P=f(5840);const X=[{path:"",component:T}];let W=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[P.Bz.forChild(X)],P.Bz]}),e})(),tt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[m.ez,W,V.forRoot()]]}),e})()}}]);