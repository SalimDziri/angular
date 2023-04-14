"use strict";(self.webpackChunkMyMoney=self.webpackChunkMyMoney||[]).push([[592],{9176:(v,u,e)=>{e.d(u,{o:()=>f});var t=e(8966),c=e(7503),n=e(5e3),m=e(8762),o=e(8480),d=e(1271),i=e(7093),M=e(7423),T=e(9808);let f=(()=>{class g{constructor(l,r,a,p,_){this.dialogRef=l,this.data=r,this.loginService=a,this.transactionService=p,this.snackBar=_,this.userCurrency=this.loginService.getSessionFromStorage(c.tO)}delete(l,r){this.transactionService.deleteTransaction(l,r).subscribe({next:a=>{this.snackBar.open(a,"dismiss",{duration:3e3}),console.log("data => "+a)},error:a=>{"404"==a.status?this.snackBar.open("Transaction not found","dismiss",{duration:3e3}):"502"==a.status?this.snackBar.open("Connection timed out, Try again later","dismiss",{duration:3e3}):(this.snackBar.open(a.message,"dismiss",{duration:3e3}),console.log("error =>"+a.message))}}),this.dialogRef.close(!0)}}return g.\u0275fac=function(l){return new(l||g)(n.Y36(t.so),n.Y36(t.WI,8),n.Y36(m.r),n.Y36(o.v),n.Y36(d.ux))},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-list-item-dialog"]],decls:21,vars:9,consts:[["mat-dialog-title","",1,"title"],["fxLayout","row","fxLayoutAlign"," center"],["fxFlex","10",1,"category",3,"src"],["fxFlex","50","fxLayoutAlign","center start",1,"name","font_weight_500"],["fxFlex","40","fxLayoutAlign","center end",1,"name","font_weight_500"],["mat-dialog-content",""],[1,"time"],[1,"time_title"],[1,"desc"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","","color","accent"],["mat-button","","mat-dialog-close","","color","warn",3,"click"]],template:function(l,r){1&l&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"img",2),n.TgZ(3,"span",3),n._uU(4),n.qZA(),n.TgZ(5,"span",4),n._uU(6),n.ALo(7,"number"),n.qZA()()(),n.TgZ(8,"div",5)(9,"div",6)(10,"span",7),n._uU(11,"Time: "),n.qZA(),n.TgZ(12,"span"),n._uU(13),n.qZA()(),n.TgZ(14,"div",8),n._uU(15),n.qZA()(),n.TgZ(16,"div",9)(17,"button",10),n._uU(18,"Close"),n.qZA(),n.TgZ(19,"button",11),n.NdJ("click",function(){return r.delete(r.data.id,r.data.userId)}),n._uU(20,"Delete"),n.qZA()()),2&l&&(n.xp6(2),n.MGl("src","assets/categories/",r.data.category,".png",n.LSH),n.xp6(2),n.Oqu(r.data.category),n.xp6(2),n.AsE("( ",n.xi3(7,6,r.data.amount,"1.0-3")," ","NONE"==r.userCurrency?"":r.userCurrency,")"),n.xp6(7),n.Oqu(r.data.time),n.xp6(2),n.hij(" ",r.data.description," "))},directives:[t.uh,i.xw,i.Wh,i.yH,t.xY,t.H8,M.lW,t.ZT],pipes:[T.JJ],styles:[".category[_ngcontent-%COMP%]{margin:.5rem}.title[_ngcontent-%COMP%]{font-size:1rem}.time_title[_ngcontent-%COMP%]{font-weight:500}"]}),g})()},4591:(v,u,e)=>{e.d(u,{O:()=>c});var t=e(5e3);let c=(()=>{class n{transform(o){return o.length>15?o.slice(0,15)+" ...":o}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275pipe=t.Yjl({name:"description",type:n,pure:!0}),n})()},7319:(v,u,e)=>{e.d(u,{o:()=>m});var t=e(7503),c=e(5e3),n=e(520);let m=(()=>{class o{constructor(i){this.http=i}getAvatars(){return this.http.get(t.FH+"avatars")}}return o.\u0275fac=function(i){return new(i||o)(c.LFG(n.eN))},o.\u0275prov=c.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},5219:(v,u,e)=>{e.d(u,{i:()=>m});var t=e(7503),c=e(5e3),n=e(520);let m=(()=>{class o{constructor(i){this.http=i}getCurrencies(){return this.http.get(t.FH+"currencies")}}return o.\u0275fac=function(i){return new(i||o)(c.LFG(n.eN))},o.\u0275prov=c.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},6290:(v,u,e)=>{e.d(u,{G:()=>r});var t=e(5e3),c=e(8762),n=e(4263),m=e(1083),o=e(4594),d=e(7423),i=e(1451),M=e(5245),T=e(9808);function f(a,p){if(1&a){const _=t.EpF();t.TgZ(0,"button",4),t.NdJ("click",function(){return t.CHM(_),t.oxw().add()}),t.TgZ(1,"mat-icon"),t._uU(2,"add_shopping_cart"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Add Transaction"),t.qZA()()}}const g=function(){return[]};function D(a,p){if(1&a){const _=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){return t.CHM(_),t.oxw().download()}),t.TgZ(1,"mat-icon"),t._uU(2,"cloud_download"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Download History"),t.qZA()()}if(2&a){const _=t.oxw();t.Q6J("disabled",_.Data==t.DdM(1,g))}}function l(a,p){if(1&a){const _=t.EpF();t.TgZ(0,"button",4),t.NdJ("click",function(){return t.CHM(_),t.oxw().home()}),t.TgZ(1,"mat-icon"),t._uU(2,"home"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Home"),t.qZA()()}}let r=(()=>{class a{constructor(_,s,E){this.loginService=_,this.pdfService=s,this.router=E}ngOnInit(){}logout(){this.loginService.removeSessionFromStorage(),this.router.navigateByUrl("/login")}add(){this.router.navigateByUrl("home/add")}home(){this.router.navigateByUrl("home")}download(){this.pdfService.generatePDFs(this.Data)}}return a.\u0275fac=function(_){return new(_||a)(t.Y36(c.r),t.Y36(n.F),t.Y36(m.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-header"]],inputs:{title:"title",Data:"Data"},decls:17,vars:5,consts:[["color","primary"],[1,"example-spacer"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",3,"click",4,"ngIf"],["mat-menu-item","",3,"disabled","click",4,"ngIf"],["mat-menu-item","",3,"disabled","click"]],template:function(_,s){if(1&_&&(t.TgZ(0,"mat-toolbar",0)(1,"span"),t._uU(2),t.qZA(),t._UZ(3,"span",1),t.TgZ(4,"button",2)(5,"mat-icon"),t._uU(6,"menu"),t.qZA()(),t.TgZ(7,"mat-menu",null,3)(9,"button",4),t.NdJ("click",function(){return s.logout()}),t.TgZ(10,"mat-icon"),t._uU(11,"directions_run"),t.qZA(),t.TgZ(12,"span"),t._uU(13,"Log Out"),t.qZA()(),t.YNc(14,f,5,0,"button",5),t.YNc(15,D,5,2,"button",6),t.YNc(16,l,5,0,"button",5),t.qZA()()),2&_){const E=t.MAs(8);t.xp6(2),t.Oqu(s.title),t.xp6(2),t.Q6J("matMenuTriggerFor",E),t.xp6(10),t.Q6J("ngIf","/home/add"!==s.router.url&&"/settings"!==s.router.url&&!s.router.isActive("/dashboard/monthlyDetails",!1)),t.xp6(1),t.Q6J("ngIf","/dashboard"==s.router.url),t.xp6(1),t.Q6J("ngIf",s.router.isActive("/dashboard/monthlyDetails",!1)||"/home/add"==s.router.url)}},directives:[o.Ye,d.lW,i.p6,M.Hw,i.VK,i.OP,T.O5],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),a})()}}]);