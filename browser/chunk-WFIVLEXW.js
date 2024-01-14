import{a as D,b as Q}from"./chunk-EUS3M3MA.js";import{a as O,b as f}from"./chunk-IC326NXU.js";import{A as c,E as P,J as m,K as p,L as l,M as I,N as x,P as F,Q as M,Qa as _,S as g,Sa as k,Ua as z,W as b,X as j,Y as T,Ya as A,Z as B,aa as L,ca as E,f as u,i as w,j as h,jb as W,ma as v,pa as N,qa as C,t as a,ta as R,u as d}from"./chunk-BIMTVSHJ.js";import{a as y,b as S}from"./chunk-YHOLSLLF.js";var U=["paginator"];function $(s,e){if(s&1&&(I(0),l(1,"app-course",10),x()),s&2){let H=e.$implicit,r=M();a(),c("course",H)("actions",r.actions)}}var J=()=>[4,8,12],q=(()=>{let e=class e{constructor(r,t,i){this.courseService=r,this.storageService=t,this.utils=i,this.form=new N({search:new C,priceRange:new C}),this.filter=["Lowest","Highest"],this.courses=[],this.filteredCourses=[],this.pageIndex=1,this.perPage=4,this.actions=[{text:"Add to Cart",type:"primary",action:o=>this.addToCart(o)},{text:"Add the Wishlist",type:"primary",action:o=>this.addToWishList(o)}],this.addToCart=o=>{this.utils.addToCart(o).then(n=>{this.utils.showSnackBar(n.message,"success")}).catch(n=>{this.utils.showSnackBar(n.message,"warning")})},this.addToWishList=o=>{this.utils.addToWishList(o).then(n=>{this.utils.showSnackBar(n.message,"success")}).catch(n=>{this.utils.showSnackBar(n.message,"warning")})}}ngOnInit(){this.courseService.fetchCourses(),this.courseService.coursesSubject.subscribe(r=>this.courses=r.map((t,i)=>S(y({},t),{id:i})))}ngAfterViewInit(){this.paginator.page.subscribe(r=>{this.perPage=r.pageSize,this.pageIndex=r.pageIndex+1})}get paginatedCourses(){if(this.courses.length){let r=this.pageIndex>1?(this.pageIndex-1)*this.perPage:this.pageIndex-1,t=this.pageIndex*this.perPage<this.courses.length?this.pageIndex*this.perPage:this.courses.length;return this.courses.slice(r,t)}else return[]}filterByPriceRnge(r){r?.toLowerCase()?.includes("lowest")?this.courses.sort((t,i)=>{let o=t.actualPrice.slice(1),n=i.actualPrice.slice(1);return console.log(o,n),parseFloat(o)-parseFloat(n)}):this.courses.sort((t,i)=>{let o=t.actualPrice.slice(1),n=i.actualPrice.slice(1);return parseFloat(n)-parseFloat(o)})}};e.\u0275fac=function(t){return new(t||e)(d(f),d(R),d(_))},e.\u0275cmp=w({type:e,selectors:[["app-dashboard"]],viewQuery:function(t,i){if(t&1&&T(U,5),t&2){let o;j(o=B())&&(i.paginator=o.first)}},decls:14,vars:8,consts:[[1,"banner"],[1,"course-section"],[1,"row","d-flex","justify-content-end"],[1,"col-md-3"],["name","search","type","text","placeholder","Search...",3,"form"],["placeholder","Price Range","name","priceRange","type","select",3,"form","options","mchange"],[1,"courses"],[4,"ngFor","ngForOf"],["showFirstLastButtons","",3,"length","pageSizeOptions","pageSize"],["paginator",""],[3,"course","actions"]],template:function(t,i){t&1&&(m(0,"div",0),g(1,"Discover Latest Courses on "),l(2,"br"),g(3,"Angular"),p(),m(4,"div",1)(5,"div",2)(6,"div",3),l(7,"app-input",4),p(),m(8,"div",3)(9,"app-input",5),F("mchange",function(n){return i.filterByPriceRnge(n)}),p()()(),m(10,"div",6),P(11,$,2,2,"ng-container",7),p(),l(12,"mat-paginator",8,9),p()),t&2&&(a(7),c("form",i.form),a(2),c("form",i.form)("options",i.filter),a(2),c("ngForOf",i.paginatedCourses),a(),c("length",i.courses.length)("pageSizeOptions",b(7,J))("pageSize",i.perPage))},dependencies:[L,z,A,D]});let s=e;return s})();var K=[{path:"",component:q}],G=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=u({imports:[v.forChild(K),v]});let s=e;return s})();var ye=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h({type:e}),e.\u0275inj=u({providers:[f,O],imports:[E,W,G,Q,k]});let s=e;return s})();export{ye as DashboardModule};