!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([["src_app_pages_themes_themes_module_ts"],{21365:function(n,l,r){"use strict";r.r(l),r.d(l,{ThemesModule:function(){return p}});var a,m,i=r(61116),d=r(29996),c=r(35366),o=r(90835),s=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(a=function(){function n(t){e(this,n),this.layoutService=t}var l,r,a;return l=n,(r=[{key:"ngOnInit",value:function(){this.currentTheme=this.layoutService.getTheme()}},{key:"changeTheme",value:function(e){this.layoutService.changeTheme(e),this.currentTheme=e}}])&&t(l.prototype,r),a&&t(l,a),n}(),a.\u0275fac=function(e){return new(e||a)(c["\u0275\u0275directiveInject"](o.P))},a.\u0275cmp=c["\u0275\u0275defineComponent"]({type:a,selectors:[["app-theme-list"]],decls:70,vars:3,consts:[[1,"admin-layout"],[1,"nav-fixed-top","cp-toolbar"],["aria-hidden","true",1,"fa","fa-picture-o"],[1,"cp-content"],[1,"p-2"],[1,"m-2"],[1,"card-deck","mb-3","text-center"],[1,"card","mb-4","shadow-sm"],[1,"card-header"],[1,"my-0","font-weight-normal"],[1,"card-body"],[1,"card-title","pricing-card-title"],[1,"text-muted"],[1,"list-unstyled","mt-3","mb-4"],["type","button",1,"btn","btn-lg","btn-block","btn-primary",3,"disabled","click"],[1,"card-header","light-header"],[1,"card-header","dark-header"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"h5"),c["\u0275\u0275element"](3,"i",2),c["\u0275\u0275text"](4," Themes"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"div",3),c["\u0275\u0275elementStart"](6,"div",4),c["\u0275\u0275elementStart"](7,"p",5),c["\u0275\u0275text"](8,"Choose Theme:"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"div",6),c["\u0275\u0275elementStart"](10,"div",7),c["\u0275\u0275elementStart"](11,"div",8),c["\u0275\u0275elementStart"](12,"h4",9),c["\u0275\u0275text"](13,"Silver theme"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"div",10),c["\u0275\u0275elementStart"](15,"h1",11),c["\u0275\u0275text"](16,"$0 "),c["\u0275\u0275elementStart"](17,"small",12),c["\u0275\u0275text"](18,"/ mo"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](19,"ul",13),c["\u0275\u0275elementStart"](20,"li"),c["\u0275\u0275text"](21,"Lifetime free updates"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"li"),c["\u0275\u0275text"](23,"Based on Bootstrap 4"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](24,"li"),c["\u0275\u0275text"](25,"Fully Responsive"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](26,"li"),c["\u0275\u0275text"](27,"Help center access"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](28,"button",14),c["\u0275\u0275listener"]("click",function(){return t.changeTheme("theme-silver")}),c["\u0275\u0275text"](29,"Apply"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](30,"div",7),c["\u0275\u0275elementStart"](31,"div",15),c["\u0275\u0275elementStart"](32,"h4",9),c["\u0275\u0275text"](33,"Light theme"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](34,"div",10),c["\u0275\u0275elementStart"](35,"h1",11),c["\u0275\u0275text"](36,"$0 "),c["\u0275\u0275elementStart"](37,"small",12),c["\u0275\u0275text"](38,"/ mo"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](39,"ul",13),c["\u0275\u0275elementStart"](40,"li"),c["\u0275\u0275text"](41,"Lifetime free updates"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](42,"li"),c["\u0275\u0275text"](43,"Based on Bootstrap 4"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](44,"li"),c["\u0275\u0275text"](45,"Fully Responsive"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](46,"li"),c["\u0275\u0275text"](47,"Help center access"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](48,"button",14),c["\u0275\u0275listener"]("click",function(){return t.changeTheme("theme-light")}),c["\u0275\u0275text"](49,"Apply"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](50,"div",7),c["\u0275\u0275elementStart"](51,"div",16),c["\u0275\u0275elementStart"](52,"h4",9),c["\u0275\u0275text"](53,"Dark theme"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](54,"div",10),c["\u0275\u0275elementStart"](55,"h1",11),c["\u0275\u0275text"](56,"$0 "),c["\u0275\u0275elementStart"](57,"small",12),c["\u0275\u0275text"](58,"/ mo"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](59,"ul",13),c["\u0275\u0275elementStart"](60,"li"),c["\u0275\u0275text"](61,"Lifetime free updates"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](62,"li"),c["\u0275\u0275text"](63,"Based on Bootstrap 4"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](64,"li"),c["\u0275\u0275text"](65,"Fully Responsive"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](66,"li"),c["\u0275\u0275text"](67,"Help center access"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](68,"button",14),c["\u0275\u0275listener"]("click",function(){return t.changeTheme("theme-dark")}),c["\u0275\u0275text"](69,"Apply"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](28),c["\u0275\u0275property"]("disabled","theme-silver"==t.currentTheme),c["\u0275\u0275advance"](20),c["\u0275\u0275property"]("disabled","theme-light"==t.currentTheme),c["\u0275\u0275advance"](20),c["\u0275\u0275property"]("disabled","theme-dark"==t.currentTheme))},styles:[".dark-header[_ngcontent-%COMP%]{color:#eee;background-color:#343a40!important}.light-header[_ngcontent-%COMP%]{color:#fff;background-color:#438eb9!important}"]}),a)}],h=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[d.Bz.forChild(s)],d.Bz]}),t}(),u=r(80484),p=((m=function t(){e(this,t)}).\u0275fac=function(e){return new(e||m)},m.\u0275mod=c["\u0275\u0275defineNgModule"]({type:m}),m.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[i.ez,u.a,h]]}),m)}}])}();