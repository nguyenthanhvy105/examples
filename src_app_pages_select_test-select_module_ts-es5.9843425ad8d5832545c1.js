!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function a(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}(self.webpackChunkexamples=self.webpackChunkexamples||[]).push([["src_app_pages_select_test-select_module_ts"],{98036:function(t,l,r){"use strict";r.r(l),r.d(l,{TestSelectModule:function(){return B}});var o=r(61116),i=r(29996),d=r(35366),m=r(31041),c=r(63129);function p(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"b"),d["\u0275\u0275text"](1,"Create new"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](2)),2&e){var n=t.searchTerm;d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](": ",n," ")}}var s=function(){return["iNet"]},u=function(){var e=function(){function e(){n(this,e),this.companies=[],this.loading=!1,this.companiesNames=["iNet Solutions","Apple Inc","Alphabet Inc"],this.tag1="iNet"}return a(e,[{key:"ngOnInit",value:function(){var e=this;this.companiesNames.forEach(function(t,n){e.companies.push({id:n,name:t})})}},{key:"addTag",value:function(e){return{name:e,tag:!0}}},{key:"addTagPromise",value:function(e){var t=this;return new Promise(function(n){t.loading=!0,setTimeout(function(){n({id:5,name:e,valid:!0}),t.loading=!1},1e3)})}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select-tags"]],decls:37,vars:21,consts:[[1,"admin-layout"],[1,"nav-fixed-top","cp-toolbar"],["aria-hidden","true",1,"fa","fa-cube"],[1,"cp-content"],[1,"p-2"],[1,"col-sm-12","card"],[1,"card-body"],[1,"form-group","margin-b-form-group","row"],[1,"control-label","col-form-label","col-sm-2","font-weight-bold"],[1,"col-sm-5"],["name","tag1",3,"items","addTag","ngModel","ngModelChange"],[1,"col-sm-4"],["multiple","true","bindLabel","name","name","tag2",3,"items","addTag","hideSelected","ngModel","ngModelChange"],["multiple","true","bindLabel","name","name","tag3",3,"items","addTag","loading","ngModel","ngModelChange"],["ng-tag-tmp",""]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"h5"),d["\u0275\u0275element"](3,"i",2),d["\u0275\u0275text"](4," Tags"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"div",3),d["\u0275\u0275elementStart"](6,"form",4),d["\u0275\u0275elementStart"](7,"div",5),d["\u0275\u0275elementStart"](8,"div",6),d["\u0275\u0275elementStart"](9,"div",7),d["\u0275\u0275elementStart"](10,"label",8),d["\u0275\u0275text"](11,"Default: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"div",9),d["\u0275\u0275elementStart"](13,"ng-select",10),d["\u0275\u0275listener"]("ngModelChange",function(e){return t.tag1=e}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](14,"div",11),d["\u0275\u0275elementStart"](15,"p",4),d["\u0275\u0275text"](16),d["\u0275\u0275pipe"](17,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](18,"div",7),d["\u0275\u0275elementStart"](19,"label",8),d["\u0275\u0275text"](20,"Multiple : "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](21,"div",9),d["\u0275\u0275elementStart"](22,"ng-select",12),d["\u0275\u0275listener"]("ngModelChange",function(e){return t.tag2=e}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](23,"div",11),d["\u0275\u0275elementStart"](24,"p",4),d["\u0275\u0275text"](25),d["\u0275\u0275pipe"](26,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](27,"div",7),d["\u0275\u0275elementStart"](28,"label",8),d["\u0275\u0275text"](29,"Search : "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](30,"div",9),d["\u0275\u0275elementStart"](31,"ng-select",13),d["\u0275\u0275listener"]("ngModelChange",function(e){return t.tag3=e}),d["\u0275\u0275template"](32,p,3,1,"ng-template",14),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](33,"div",11),d["\u0275\u0275elementStart"](34,"p",4),d["\u0275\u0275text"](35),d["\u0275\u0275pipe"](36,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](13),d["\u0275\u0275property"]("items",d["\u0275\u0275pureFunction0"](20,s))("addTag",!0)("ngModel",t.tag1),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"]("Selected value: ",d["\u0275\u0275pipeBind1"](17,14,t.tag1),""),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("items",t.companies)("addTag",t.addTag)("hideSelected",!0)("ngModel",t.tag2),d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"]("Selected value: ",d["\u0275\u0275pipeBind1"](26,16,t.tag2),""),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("items",t.companies)("addTag",t.addTagPromise)("loading",t.loading)("ngModel",t.tag3),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"]("Selected value: ",d["\u0275\u0275pipeBind1"](36,18,t.tag3),""))},directives:[m["\u0275NgNoValidate"],m.NgControlStatusGroup,m.NgForm,c.w9C,m.NgControlStatus,m.NgModel,c.Jr2],pipes:[o.Ts],encapsulation:2}),e}(),g=r(16941),f=r(79996),h=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};function v(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",26),d["\u0275\u0275element"](1,"i",27),d["\u0275\u0275text"](2," Name field is required "),d["\u0275\u0275elementEnd"]())}function S(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p",28),d["\u0275\u0275element"](1,"i",27),d["\u0275\u0275text"](2," Tag2 field is required "),d["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",29),d["\u0275\u0275elementStart"](1,"small"),d["\u0275\u0275text"](2,"Max selection reached"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]())}function E(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"span",30),d["\u0275\u0275element"](1,"img",31),d["\u0275\u0275text"](2),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"span",32),d["\u0275\u0275listener"]("click",function(){return(0,t.clear)(t.item)}),d["\u0275\u0275text"](4,"\xd7"),d["\u0275\u0275elementEnd"]()),2&e){var n=t.item;d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("src",n.avatar_url,d["\u0275\u0275sanitizeUrl"]),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",n.login,"")}}function y(e,t){if(1&e&&(d["\u0275\u0275element"](0,"img",31),d["\u0275\u0275text"](1)),2&e){var n=t.item;d["\u0275\u0275property"]("src",n.avatar_url,d["\u0275\u0275sanitizeUrl"]),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"](" ",n.login," ")}}function x(e,t){if(1&e&&(d["\u0275\u0275element"](0,"input",33),d["\u0275\u0275element"](1,"label",34),d["\u0275\u0275text"](2),d["\u0275\u0275pipe"](3,"uppercase")),2&e){var n=t.item,l=t.item$,a=t.index;d["\u0275\u0275propertyInterpolate1"]("id","item-",a,""),d["\u0275\u0275propertyInterpolate1"]("name","item-",a,""),d["\u0275\u0275property"]("ngModel",l.selected),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",d["\u0275\u0275pipeBind1"](3,4,n.gender)," ")}}function M(e,t){if(1&e&&(d["\u0275\u0275element"](0,"input",33),d["\u0275\u0275element"](1,"label",34),d["\u0275\u0275text"](2)),2&e){var n=t.item,l=t.item$,a=t.index;d["\u0275\u0275propertyInterpolate1"]("id","item-",a,""),d["\u0275\u0275propertyInterpolate1"]("name","item-",a,""),d["\u0275\u0275property"]("ngModel",l.selected),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate1"](" ",n.name," ")}}var C,P,I=function(e){return{"ng-select-invalid":e}},j=[{path:"",redirectTo:"tags",pathMatch:"full"},{path:"tags",component:u},{path:"multiselect",component:(C=function(){function t(e,l){n(this,t),this.dataService=e,this.fb=l,this.selectedPeople1=[],this.selectedPeople2=[],this.selectedPeople3=[],this.selectedPeople4=[],this.selectedPeople5=[],this.disable=!0,this.selectedUsers1=[],this.selectedUsers2=[],this.people=[],this.selectedPeople=[]}return a(t,[{key:"ngOnInit",value:function(){var e=this;this.demoForm=this.fb.group({tag1:[null,null],tag2:[null,null],tag3:[null,null],tag4:[null,null],tag5:[null,null],tag6:[null,null]}),this.people$1=this.dataService.getPeople(),this.people$2=this.dataService.getPeople(),this.githubUsers$=this.dataService.getGithubAccounts("anjm"),this.selectedPeople1=[{id:"5a15b13c663ea0af9ad0dae8",name:"Mendoza Ruiz"},{id:"5a15b13ca51b0aaf8a99c05a",name:"Franklin James"}],this.people$4=this.dataService.getPeople(),this.selectedPeople4=[{id:"5a15b13c2340978ec3d2c0ea",name:"Rochelle Estes",disabled:!0},{id:"5a15b13c663ea0af9ad0dae8",name:"Mendoza Ruiz"}],this.people$1.pipe((0,f.U)(function(e){return e.filter(function(e){return!e.disabled})})).subscribe(function(t){e.people=t,e.selectedPeople=[e.people[0].id,e.people[1].id]})}},{key:"changeModel",value:function(){this.changed||(this.selectedPeople1=[].concat(e(this.selectedPeople1),[{id:"5a15b13cc3b9381ffcb1d6f7",name:"Elsa Bradley"}]),this.changed=!0)}},{key:"onChange",value:function(e){console.log(e),this.changed=0!==this.selectedPeople1.length}}]),t}(),C.\u0275fac=function(e){return new(e||C)(d["\u0275\u0275directiveInject"](g.D),d["\u0275\u0275directiveInject"](m.FormBuilder))},C.\u0275cmp=d["\u0275\u0275defineComponent"]({type:C,selectors:[["app-select-multi"]],decls:78,vars:69,consts:[[1,"admin-layout"],[1,"nav-fixed-top","cp-toolbar"],["aria-hidden","true",1,"fa","fa-cube"],[1,"cp-content"],[1,"p-2",3,"formGroup"],[1,"col-sm-12","card"],[1,"card-body"],[1,"form-group","margin-b-form-group","row"],[1,"control-label","col-form-label","col-sm-2","font-weight-bold"],[1,"col-sm-5"],[1,"mb-2","btn","btn-sm","btn-primary",3,"disabled","click"],["bindLabel","name","name","tag1","placeholder","Select people",3,"formControl","items","multiple","closeOnSelect","searchable","ngModel","change","ngModelChange"],[1,"col-sm-4"],[1,"p-2"],["class","text-danger",4,"ngIf"],["bindLabel","name","name","tag2","placeholder","Select people",3,"formControl","items","multiple","closeOnSelect","hideSelected","ngClass","ngModel","ngModelChange"],["class","text-danger col-sm-12 pl-0",4,"ngIf"],["class","alert alert-warning mb-2",4,"ngIf"],["bindLabel","name","name","tag3",3,"formControl","items","multiple","maxSelectedItems","ngModel","ngModelChange"],["select",""],["bindLabel","name","name","tag4",3,"formControl","items","multiple","disabled","ngModel","ngModelChange"],["bindLabel","login","name","tag5",3,"formControl","items","multiple","ngModel","ngModelChange"],["ng-label-tmp",""],["ng-option-tmp",""],["bindLabel","name","groupBy","gender","bindValue","id","name","tag6",3,"formControl","items","multiple","selectableGroup","selectableGroupAsModel","closeOnSelect","ngModel","ngModelChange"],["ng-optgroup-tmp",""],[1,"text-danger"],[1,"fa","fa-exclamation-triangle"],[1,"text-danger","col-sm-12","pl-0"],[1,"alert","alert-warning","mb-2"],[1,"ng-value-label"],["width","20px","height","20px",3,"src"],["aria-hidden","true",1,"ng-value-icon","right",3,"click"],["type","checkbox",3,"id","name","ngModel"],[1,"lbl"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"h5"),d["\u0275\u0275element"](3,"i",2),d["\u0275\u0275text"](4," Mutil Select"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"div",3),d["\u0275\u0275elementStart"](6,"form",4),d["\u0275\u0275elementStart"](7,"div",5),d["\u0275\u0275elementStart"](8,"div",6),d["\u0275\u0275elementStart"](9,"div",7),d["\u0275\u0275elementStart"](10,"label",8),d["\u0275\u0275text"](11,"Default: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](12,"div",9),d["\u0275\u0275elementStart"](13,"button",10),d["\u0275\u0275listener"]("click",function(){return t.changeModel()}),d["\u0275\u0275text"](14,"Change model"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"ng-select",11),d["\u0275\u0275listener"]("change",function(e){return t.onChange(e)})("ngModelChange",function(e){return t.selectedPeople1=e}),d["\u0275\u0275pipe"](16,"async"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"div",12),d["\u0275\u0275elementStart"](18,"p",13),d["\u0275\u0275text"](19),d["\u0275\u0275pipe"](20,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](21,v,3,0,"p",14),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](22,"div",7),d["\u0275\u0275elementStart"](23,"label",8),d["\u0275\u0275text"](24,"Hide selected : "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](25,"div",9),d["\u0275\u0275elementStart"](26,"ng-select",15),d["\u0275\u0275listener"]("ngModelChange",function(e){return t.selectedPeople2=e}),d["\u0275\u0275pipe"](27,"async"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](28,"div",12),d["\u0275\u0275elementStart"](29,"p",13),d["\u0275\u0275text"](30),d["\u0275\u0275pipe"](31,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](32,S,3,0,"p",16),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](33,"div",7),d["\u0275\u0275elementStart"](34,"label",8),d["\u0275\u0275text"](35,"Max Selected (3): "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](36,"div",9),d["\u0275\u0275template"](37,b,3,0,"div",17),d["\u0275\u0275elementStart"](38,"ng-select",18,19),d["\u0275\u0275listener"]("ngModelChange",function(e){return t.selectedPeople3=e}),d["\u0275\u0275pipe"](40,"async"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](41,"div",12),d["\u0275\u0275elementStart"](42,"p",13),d["\u0275\u0275text"](43),d["\u0275\u0275pipe"](44,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](45,"div",7),d["\u0275\u0275elementStart"](46,"label",8),d["\u0275\u0275text"](47,"Disabled: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](48,"div",9),d["\u0275\u0275elementStart"](49,"ng-select",20),d["\u0275\u0275listener"]("ngModelChange",function(e){return t.selectedPeople4=e}),d["\u0275\u0275pipe"](50,"async"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](51,"div",12),d["\u0275\u0275elementStart"](52,"p",13),d["\u0275\u0275text"](53),d["\u0275\u0275pipe"](54,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](55,"div",7),d["\u0275\u0275elementStart"](56,"label",8),d["\u0275\u0275text"](57,"Custom template: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](58,"div",9),d["\u0275\u0275elementStart"](59,"ng-select",21),d["\u0275\u0275listener"]("ngModelChange",function(e){return t.selectedUsers1=e}),d["\u0275\u0275pipe"](60,"async"),d["\u0275\u0275template"](61,E,5,2,"ng-template",22),d["\u0275\u0275template"](62,y,2,2,"ng-template",23),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](63,"div",12),d["\u0275\u0275elementStart"](64,"p",13),d["\u0275\u0275text"](65),d["\u0275\u0275pipe"](66,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](67,"div",7),d["\u0275\u0275elementStart"](68,"label",8),d["\u0275\u0275text"](69,"Checkbox & Group: "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](70,"div",9),d["\u0275\u0275elementStart"](71,"ng-select",24),d["\u0275\u0275listener"]("ngModelChange",function(e){return t.selectedPeople=e}),d["\u0275\u0275template"](72,x,4,6,"ng-template",25),d["\u0275\u0275template"](73,M,3,4,"ng-template",23),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](74,"div",12),d["\u0275\u0275elementStart"](75,"p",13),d["\u0275\u0275text"](76),d["\u0275\u0275pipe"](77,"json"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){var n=d["\u0275\u0275reference"](39);d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("formGroup",t.demoForm),d["\u0275\u0275advance"](7),d["\u0275\u0275property"]("disabled",t.changed),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("formControl",t.demoForm.controls.tag1)("items",d["\u0275\u0275pipeBind1"](16,45,t.people$1))("multiple",!0)("closeOnSelect",!1)("searchable",!1)("ngModel",t.selectedPeople1),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"]("Selected value: ",d["\u0275\u0275pipeBind1"](20,47,t.selectedPeople1),""),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",!t.selectedPeople1.length),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("formControl",t.demoForm.controls.tag2)("items",d["\u0275\u0275pipeBind1"](27,49,t.people$1))("multiple",!0)("closeOnSelect",!1)("hideSelected",!0)("ngClass",d["\u0275\u0275pureFunction1"](67,I,!t.selectedPeople2.length&&t.demoForm.controls.tag2.touched))("ngModel",t.selectedPeople2),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"]("Selected value: ",d["\u0275\u0275pipeBind1"](31,51,t.selectedPeople2),""),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf",t.demoForm.controls.tag2.touched&&!t.selectedPeople2.length),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("ngIf",3===t.selectedPeople2.length&&n.focused),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("formControl",t.demoForm.controls.tag3)("items",d["\u0275\u0275pipeBind1"](40,53,t.people$2))("multiple",!0)("maxSelectedItems",3)("ngModel",t.selectedPeople3),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate1"]("Selected value: ",d["\u0275\u0275pipeBind1"](44,55,t.selectedPeople3),""),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("formControl",t.demoForm.controls.tag4)("items",d["\u0275\u0275pipeBind1"](50,57,t.people$3))("multiple",!0)("disabled",t.disable)("ngModel",t.selectedPeople4),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"]("Selected value: ",d["\u0275\u0275pipeBind1"](54,59,t.selectedPeople4),""),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("formControl",t.demoForm.controls.tag5)("items",d["\u0275\u0275pipeBind1"](60,61,t.githubUsers$))("multiple",!0)("ngModel",t.selectedUsers1),d["\u0275\u0275advance"](6),d["\u0275\u0275textInterpolate1"]("Selected value: ",d["\u0275\u0275pipeBind1"](66,63,t.selectedUsers1),""),d["\u0275\u0275advance"](6),d["\u0275\u0275property"]("formControl",t.demoForm.controls.tag6)("items",t.people)("multiple",!0)("selectableGroup",!0)("selectableGroupAsModel",!1)("closeOnSelect",!1)("ngModel",t.selectedPeople),d["\u0275\u0275advance"](5),d["\u0275\u0275textInterpolate1"]("Selected value: ",d["\u0275\u0275pipeBind1"](77,65,t.selectedPeople),"")}},directives:[m["\u0275NgNoValidate"],m.NgControlStatusGroup,m.FormGroupDirective,c.w9C,m.NgControlStatus,m.FormControlDirective,o.O5,o.mk,c.mRN,c.iry,c.C5M,m.CheckboxControlValueAccessor,m.NgModel],pipes:[o.Ov,o.Ts,o.gd],encapsulation:2}),C=function(e,t,n,l){var a,r=arguments.length,o=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,n):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,l);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}([(0,c.YdH)(),h("design:paramtypes",[g.D,m.FormBuilder])],C))}],w=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[i.Bz.forChild(j)],i.Bz]}),e}(),B=((P=function e(){n(this,e)}).\u0275fac=function(e){return new(e||P)},P.\u0275mod=d["\u0275\u0275defineNgModule"]({type:P}),P.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[o.ez,m.FormsModule,m.ReactiveFormsModule,c.A0h,w]]}),P)}}])}();