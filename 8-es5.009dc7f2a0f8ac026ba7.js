(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{tkha:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=u("gIcY"),o=function(){function l(){var l=this;this.fields=[{type:"text",name:"firstName",label:"First Name",value:"",required:!0},{type:"text",name:"lastName",label:"Last Name",value:"",required:!0},{type:"text",name:"email",label:"Email",value:"",required:!0},{type:"dropdown",name:"country",label:"Country",value:"in",required:!0,options:[{key:"in",label:"India"},{key:"us",label:"USA"}]},{type:"radio",name:"gender",label:"Gender",value:"m",required:!0,options:[{key:"m",label:"Male"},{key:"f",label:"Female"}]},{type:"checkbox",name:"hobby",label:"Hobby",required:!0,options:[{key:"f",label:"Fishing"},{key:"c",label:"Cooking"}]}],this.form=new t.i({fields:new t.f(JSON.stringify(this.fields))}),this.unsubcribe=this.form.valueChanges.subscribe(function(n){console.log(n),l.fields=JSON.parse(n.fields)})}return l.prototype.onUpload=function(l){console.log(l)},l.prototype.handleSubmit=function(l){console.log(l)},l.prototype.getFields=function(){return this.fields},l.prototype.ngDistroy=function(){this.unsubcribe()},l}(),i=function(){return function(){}}(),r=u("pMnS"),s=u("Ip0R"),a=function(){function l(){this.field={}}return Object.defineProperty(l.prototype,"isValid",{get:function(){return this.form.controls[this.field.name].valid},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"isDirty",{get:function(){return this.form.controls[this.field.name].dirty},enumerable:!0,configurable:!0}),l}(),b=e.nb({encapsulation:2,styles:[],data:{}});function c(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,5,"input",[["class","form-control"]],[[1,"type",0],[8,"id",0],[8,"name",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.xb(l,1)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.xb(l,1).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.xb(l,1)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.xb(l,1)._compositionEnd(u.target.value)&&t),t},null,null)),e.ob(1,16384,null,0,t.d,[e.D,e.k,[2,t.a]],null,null),e.Cb(1024,null,t.n,function(l){return[l]},[t.d]),e.ob(3,671744,null,0,t.h,[[3,t.c],[8,null],[8,null],[6,t.n],[2,t.A]],{name:[0,"name"]},null),e.Cb(2048,null,t.o,null,[t.h]),e.ob(5,16384,null,0,t.p,[[4,t.o]],null,null)],function(l,n){l(n,3,0,n.component.field.name)},function(l,n){var u=n.component;l(n,0,0,u.field.type,u.field.name,u.field.name,e.xb(n,5).ngClassUntouched,e.xb(n,5).ngClassTouched,e.xb(n,5).ngClassPristine,e.xb(n,5).ngClassDirty,e.xb(n,5).ngClassValid,e.xb(n,5).ngClassInvalid,e.xb(n,5).ngClassPending)})}function d(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,5,"textarea",[["class","form-control"],["rows","9"]],[[2,"is-invalid",null],[8,"id",0],[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.xb(l,1)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.xb(l,1).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.xb(l,1)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.xb(l,1)._compositionEnd(u.target.value)&&t),t},null,null)),e.ob(1,16384,null,0,t.d,[e.D,e.k,[2,t.a]],null,null),e.Cb(1024,null,t.n,function(l){return[l]},[t.d]),e.ob(3,671744,null,0,t.h,[[3,t.c],[8,null],[8,null],[6,t.n],[2,t.A]],{name:[0,"name"]},null),e.Cb(2048,null,t.o,null,[t.h]),e.ob(5,16384,null,0,t.p,[[4,t.o]],null,null)],function(l,n){l(n,3,0,n.component.field.name)},function(l,n){var u=n.component;l(n,0,0,u.isDirty&&!u.isValid,u.field.name,u.field.placeholder,e.xb(n,5).ngClassUntouched,e.xb(n,5).ngClassTouched,e.xb(n,5).ngClassPristine,e.xb(n,5).ngClassDirty,e.xb(n,5).ngClassValid,e.xb(n,5).ngClassInvalid,e.xb(n,5).ngClassPending)})}function f(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,7,"div",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.xb(l,1).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.xb(l,1).onReset()&&t),t},null,null)),e.ob(1,540672,null,0,t.j,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,t.c,null,[t.j]),e.ob(3,16384,null,0,t.q,[[4,t.c]],null,null),(l()(),e.eb(16777216,null,null,1,null,c)),e.ob(5,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,d)),e.ob(7,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.form),l(n,5,0,!u.field.multiline),l(n,7,0,u.field.multiline)},function(l,n){l(n,0,0,e.xb(n,3).ngClassUntouched,e.xb(n,3).ngClassTouched,e.xb(n,3).ngClassPristine,e.xb(n,3).ngClassDirty,e.xb(n,3).ngClassValid,e.xb(n,3).ngClassInvalid,e.xb(n,3).ngClassPending)})}var g=function(){return function(){this.field={}}}(),p=e.nb({encapsulation:2,styles:[],data:{}});function m(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,3,"option",[],null,null,null,null,null)),e.ob(1,147456,null,0,t.t,[e.k,e.D,[2,t.w]],{value:[0,"value"]},null),e.ob(2,147456,null,0,t.B,[e.k,e.D,[8,null]],{value:[0,"value"]},null),(l()(),e.Eb(3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit.key),l(n,2,0,n.context.$implicit.key)},function(l,n){l(n,3,0,n.context.$implicit.label)})}function h(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,11,"div",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.xb(l,1).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.xb(l,1).onReset()&&t),t},null,null)),e.ob(1,540672,null,0,t.j,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,t.c,null,[t.j]),e.ob(3,16384,null,0,t.q,[[4,t.c]],null,null),(l()(),e.pb(4,0,null,null,7,"select",[["class","form-control"]],[[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==e.xb(l,5).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.xb(l,5).onTouched()&&t),t},null,null)),e.ob(5,16384,null,0,t.w,[e.D,e.k],null,null),e.Cb(1024,null,t.n,function(l){return[l]},[t.w]),e.ob(7,671744,null,0,t.h,[[3,t.c],[8,null],[8,null],[6,t.n],[2,t.A]],{name:[0,"name"]},null),e.Cb(2048,null,t.o,null,[t.h]),e.ob(9,16384,null,0,t.p,[[4,t.o]],null,null),(l()(),e.eb(16777216,null,null,1,null,m)),e.ob(11,278528,null,0,s.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.form),l(n,7,0,u.field.name),l(n,11,0,u.field.options)},function(l,n){var u=n.component;l(n,0,0,e.xb(n,3).ngClassUntouched,e.xb(n,3).ngClassTouched,e.xb(n,3).ngClassPristine,e.xb(n,3).ngClassDirty,e.xb(n,3).ngClassValid,e.xb(n,3).ngClassInvalid,e.xb(n,3).ngClassPending),l(n,4,0,u.field.name,e.xb(n,9).ngClassUntouched,e.xb(n,9).ngClassTouched,e.xb(n,9).ngClassPristine,e.xb(n,9).ngClassDirty,e.xb(n,9).ngClassValid,e.xb(n,9).ngClassInvalid,e.xb(n,9).ngClassPending)})}var x=function(){function l(){this.field={}}return Object.defineProperty(l.prototype,"isValid",{get:function(){return this.form.controls[this.field.name].valid},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"isDirty",{get:function(){return this.form.controls[this.field.name].dirty},enumerable:!0,configurable:!0}),l}(),v=e.nb({encapsulation:2,styles:[],data:{}});function C(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,8,"div",[["class","form-check form-check"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,7,"label",[["class","form-check-label"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,5,"input",[["class","form-check-input"],["id","inlineCheckbox1"],["type","checkbox"],["value","option1"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var t=!0;return"change"===n&&(t=!1!==e.xb(l,3).onChange(u.target.checked)&&t),"blur"===n&&(t=!1!==e.xb(l,3).onTouched()&&t),t},null,null)),e.ob(3,16384,null,0,t.b,[e.D,e.k],null,null),e.Cb(1024,null,t.n,function(l){return[l]},[t.b]),e.ob(5,671744,null,0,t.h,[[3,t.c],[8,null],[8,null],[6,t.n],[2,t.A]],{name:[0,"name"]},null),e.Cb(2048,null,t.o,null,[t.h]),e.ob(7,16384,null,0,t.p,[[4,t.o]],null,null),(l()(),e.Eb(8,null,[" ",""]))],function(l,n){l(n,5,0,n.context.$implicit.key)},function(l,n){l(n,2,0,e.xb(n,7).ngClassUntouched,e.xb(n,7).ngClassTouched,e.xb(n,7).ngClassPristine,e.xb(n,7).ngClassDirty,e.xb(n,7).ngClassValid,e.xb(n,7).ngClassInvalid,e.xb(n,7).ngClassPending),l(n,8,0,n.context.$implicit.label)})}function y(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,9,"div",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.xb(l,1).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.xb(l,1).onReset()&&t),t},null,null)),e.ob(1,540672,null,0,t.j,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,t.c,null,[t.j]),e.ob(3,16384,null,0,t.q,[[4,t.c]],null,null),(l()(),e.pb(4,0,null,null,5,"div",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),e.ob(5,212992,null,0,t.k,[[3,t.c],[8,null],[8,null]],{name:[0,"name"]},null),e.Cb(2048,null,t.c,null,[t.k]),e.ob(7,16384,null,0,t.q,[[4,t.c]],null,null),(l()(),e.eb(16777216,null,null,1,null,C)),e.ob(9,278528,null,0,s.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.form),l(n,5,0,u.field.name),l(n,9,0,u.field.options)},function(l,n){l(n,0,0,e.xb(n,3).ngClassUntouched,e.xb(n,3).ngClassTouched,e.xb(n,3).ngClassPristine,e.xb(n,3).ngClassDirty,e.xb(n,3).ngClassValid,e.xb(n,3).ngClassInvalid,e.xb(n,3).ngClassPending),l(n,4,0,e.xb(n,7).ngClassUntouched,e.xb(n,7).ngClassTouched,e.xb(n,7).ngClassPristine,e.xb(n,7).ngClassDirty,e.xb(n,7).ngClassValid,e.xb(n,7).ngClassInvalid,e.xb(n,7).ngClassPending)})}var w=function(){return function(){this.field={}}}(),k=e.nb({encapsulation:2,styles:[],data:{}});function O(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,3,"div",[["class","form-check"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,0,"input",[["class","form-check-input"],["type","radio"]],[[8,"value",0]],null,null,null,null)),(l()(),e.pb(2,0,null,null,1,"label",[["class","form-check-label"]],null,null,null,null,null)),(l()(),e.Eb(3,null,[" "," "]))],null,function(l,n){l(n,1,0,n.context.$implicit.key),l(n,3,0,n.context.$implicit.label)})}function P(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,5,"div",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.xb(l,1).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.xb(l,1).onReset()&&t),t},null,null)),e.ob(1,540672,null,0,t.j,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,t.c,null,[t.j]),e.ob(3,16384,null,0,t.q,[[4,t.c]],null,null),(l()(),e.eb(16777216,null,null,1,null,O)),e.ob(5,278528,null,0,s.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.form),l(n,5,0,u.field.options)},function(l,n){l(n,0,0,e.xb(n,3).ngClassUntouched,e.xb(n,3).ngClassTouched,e.xb(n,3).ngClassPristine,e.xb(n,3).ngClassDirty,e.xb(n,3).ngClassValid,e.xb(n,3).ngClassInvalid,e.xb(n,3).ngClassPending)})}var S=function(){function l(){this.field={}}return Object.defineProperty(l.prototype,"isValid",{get:function(){return this.form.controls[this.field.name].valid},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"isDirty",{get:function(){return this.form.controls[this.field.name].dirty},enumerable:!0,configurable:!0}),l.prototype.ngOnChange=function(){console.log(this.field.value)},l}(),j=e.nb({encapsulation:0,styles:[".drop-container[_ngcontent-%COMP%] {\n        background: #fff;\n        border-radius: 6px;\n        height: 150px;\n        width: 100%;\n        box-shadow: 1px 2px 20px hsla(0,0%,4%,.1);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: 2px dashed #c0c4c7;\n      }\n      p[_ngcontent-%COMP%] {\n        font-size: 16px;\n        font-weight: 400;\n        color: #c0c4c7; \n      }\n      .upload-button[_ngcontent-%COMP%] {\n        display: inline-block;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        color: #5754a3;\n      }\n      .upload-button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        display: none;\n      }\n      .dropzone[_ngcontent-%COMP%] { \n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column; \n        border-radius: 5px;\n        background: white;\n        margin: 10px 0;\n      }\n      .dropzone.hovering[_ngcontent-%COMP%] {\n          border: 2px solid #f16624;\n          color: #dadada !important;\n      }\n      progress[_ngcontent-%COMP%]::-webkit-progress-value {\n        transition: width 0.1s ease;\n      }"],data:{}});function I(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,6,"div",[["class","drop-container dropzone"],["dropZone",""]],[[2,"hovering",null]],[[null,"hovered"],[null,"dropped"]],function(l,n,u){var e=!0,t=l.component;return"hovered"===n&&(e=!1!==t.toggleHover(u)&&e),"dropped"===n&&(e=!1!==t.field.onUpload(u)&&e),e},null,null)),(l()(),e.pb(1,0,null,null,5,"p",[["class","m-0"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,[" Drag a file here or "])),(l()(),e.pb(3,0,null,null,2,"label",[["class","upload-button"]],null,null,null,null,null)),(l()(),e.pb(4,0,null,null,0,"input",[["multiple",""],["type","file"]],null,[[null,"change"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.field.onUpload(u.target.files)&&e),e},null,null)),(l()(),e.Eb(-1,null,[" browse "])),(l()(),e.Eb(-1,null,[" to upload. "]))],null,function(l,n){l(n,0,0,n.component.isHovering)})}function D(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,0,"img",[["class","card-img-top"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,2,0,n.component.field.value)})}function G(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,7,"div",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.xb(l,1).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.xb(l,1).onReset()&&t),t},null,null)),e.ob(1,540672,null,0,t.j,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,t.c,null,[t.j]),e.ob(3,16384,null,0,t.q,[[4,t.c]],null,null),(l()(),e.eb(16777216,null,null,1,null,I)),e.ob(5,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,D)),e.ob(7,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.form),l(n,5,0,!u.field.value),l(n,7,0,u.field.value)},function(l,n){l(n,0,0,e.xb(n,3).ngClassUntouched,e.xb(n,3).ngClassTouched,e.xb(n,3).ngClassPristine,e.xb(n,3).ngClassDirty,e.xb(n,3).ngClassValid,e.xb(n,3).ngClassInvalid,e.xb(n,3).ngClassPending)})}var _=function(){function l(){}return Object.defineProperty(l.prototype,"isValid",{get:function(){return this.form.controls[this.field.name].valid},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"isDirty",{get:function(){return this.form.controls[this.field.name].dirty},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){},l}(),V=e.nb({encapsulation:2,styles:[],data:{}});function T(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"strong",[["class","text-danger"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["*"]))],null,null)}function q(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"textbox",[],null,null,null,f,b)),e.ob(1,49152,null,0,a,[],{field:[0,"field"],form:[1,"form"]},null)],function(l,n){var u=n.component;l(n,1,0,u.field,u.form)},null)}function E(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"dropdown",[],null,null,null,h,p)),e.ob(1,49152,null,0,g,[],{field:[0,"field"],form:[1,"form"]},null)],function(l,n){var u=n.component;l(n,1,0,u.field,u.form)},null)}function U(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"checkbox",[],null,null,null,y,v)),e.ob(1,49152,null,0,x,[],{field:[0,"field"],form:[1,"form"]},null)],function(l,n){var u=n.component;l(n,1,0,u.field,u.form)},null)}function L(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"radio",[],null,null,null,P,k)),e.ob(1,49152,null,0,w,[],{field:[0,"field"],form:[1,"form"]},null)],function(l,n){var u=n.component;l(n,1,0,u.field,u.form)},null)}function F(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"file",[],null,null,null,G,j)),e.ob(1,49152,null,0,S,[],{field:[0,"field"],form:[1,"form"]},null)],function(l,n){var u=n.component;l(n,1,0,u.field,u.form)},null)}function N(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"div",[["class","alert alert-danger my-1 p-2 fadeInDown animated"]],null,null,null,null,null)),(l()(),e.Eb(1,null,[""," is required"]))],null,function(l,n){l(n,1,0,n.component.field.label)})}function M(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,21,"div",[["class","form-group row"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.xb(l,1).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.xb(l,1).onReset()&&t),t},null,null)),e.ob(1,540672,null,0,t.j,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,t.c,null,[t.j]),e.ob(3,16384,null,0,t.q,[[4,t.c]],null,null),(l()(),e.pb(4,0,null,null,3,"label",[["class","col-md-3 form-control-label"]],[[1,"for",0]],null,null,null,null)),(l()(),e.Eb(5,null,[" "," "])),(l()(),e.eb(16777216,null,null,1,null,T)),e.ob(7,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(8,0,null,null,13,"div",[["class","col-md-9"]],null,null,null,null,null)),e.ob(9,16384,null,0,s.n,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),e.eb(16777216,null,null,1,null,q)),e.ob(11,278528,null,0,s.o,[e.O,e.L,s.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),e.eb(16777216,null,null,1,null,E)),e.ob(13,278528,null,0,s.o,[e.O,e.L,s.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),e.eb(16777216,null,null,1,null,U)),e.ob(15,278528,null,0,s.o,[e.O,e.L,s.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),e.eb(16777216,null,null,1,null,L)),e.ob(17,278528,null,0,s.o,[e.O,e.L,s.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),e.eb(16777216,null,null,1,null,F)),e.ob(19,278528,null,0,s.o,[e.O,e.L,s.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),e.eb(16777216,null,null,1,null,N)),e.ob(21,16384,null,0,s.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0,u.form),l(n,7,0,u.field.required),l(n,9,0,u.field.type),l(n,11,0,"text"),l(n,13,0,"dropdown"),l(n,15,0,"checkbox"),l(n,17,0,"radio"),l(n,19,0,"file"),l(n,21,0,!u.isValid&&u.isDirty)},function(l,n){var u=n.component;l(n,0,0,e.xb(n,3).ngClassUntouched,e.xb(n,3).ngClassTouched,e.xb(n,3).ngClassPristine,e.xb(n,3).ngClassDirty,e.xb(n,3).ngClassValid,e.xb(n,3).ngClassInvalid,e.xb(n,3).ngClassPending),l(n,4,0,u.field.label),l(n,5,0,u.field.label)})}var R=u("mrSG"),z=function(){function l(){this.onSubmit=new e.m,this.fields=[]}return l.prototype.ngOnInit=function(){var l,n,u,e,o={};try{for(var i=R.j(this.fields),r=i.next();!r.done;r=i.next()){var s=r.value;if("checkbox"!=s.type)o[s.name]=new t.f(s.value||"",t.x.required);else{var a={};try{for(var b=R.j(s.options),c=b.next();!c.done;c=b.next()){var d=c.value;a[d.key]=new t.f(d.value)}}catch(f){u={error:f}}finally{try{c&&!c.done&&(e=b.return)&&e.call(b)}finally{if(u)throw u.error}}o[s.name]=new t.i(a)}}}catch(g){l={error:g}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(l)throw l.error}}this.form=new t.i(o)},l}(),A=e.nb({encapsulation:2,styles:[],data:{}});function $(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"field-builder",[],null,null,null,M,V)),e.ob(2,114688,null,0,_,[],{field:[0,"field"],form:[1,"form"]},null)],function(l,n){l(n,2,0,n.context.$implicit,n.component.form)},null)}function J(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,14,"form",[["class","form-horizontal"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e.xb(l,2).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.xb(l,2).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.onSubmit.emit(o.form.value)&&t),t},null,null)),e.ob(1,16384,null,0,t.C,[],null,null),e.ob(2,540672,null,0,t.j,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Cb(2048,null,t.c,null,[t.j]),e.ob(4,16384,null,0,t.q,[[4,t.c]],null,null),(l()(),e.eb(16777216,null,null,1,null,$)),e.ob(6,278528,null,0,s.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(7,0,null,null,0,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),e.pb(8,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e.pb(9,0,null,null,0,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e.pb(10,0,null,null,4,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),e.pb(11,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e.Eb(-1,null,[" Save "])),(l()(),e.pb(13,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Saved all values"]))],function(l,n){var u=n.component;l(n,2,0,u.form),l(n,6,0,u.fields)},function(l,n){var u=n.component;l(n,0,0,e.xb(n,4).ngClassUntouched,e.xb(n,4).ngClassTouched,e.xb(n,4).ngClassPristine,e.xb(n,4).ngClassDirty,e.xb(n,4).ngClassValid,e.xb(n,4).ngClassInvalid,e.xb(n,4).ngClassPending),l(n,11,0,!u.form.valid)})}var H=e.nb({encapsulation:0,styles:[[""]],data:{}});function Z(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,[" contact works!\n"])),(l()(),e.pb(2,0,null,null,6,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.pb(4,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,["Dynamic Forms"])),(l()(),e.pb(6,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.pb(7,0,null,null,1,"dynamic-form-builder",[],null,[[null,"onSubmit"]],function(l,n,u){var e=!0;return"onSubmit"===n&&(e=!1!==l.component.handleSubmit(u)&&e),e},J,A)),e.ob(8,114688,null,0,z,[],{fields:[0,"fields"]},{onSubmit:"onSubmit"}),(l()(),e.pb(9,0,null,null,12,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e.pb(10,0,null,null,11,"div",[["class","form-group"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.xb(l,11).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.xb(l,11).onReset()&&t),t},null,null)),e.ob(11,540672,null,0,t.j,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,t.c,null,[t.j]),e.ob(13,16384,null,0,t.q,[[4,t.c]],null,null),(l()(),e.pb(14,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e.Eb(-1,null,["JSON"])),(l()(),e.pb(16,0,null,null,5,"textarea",[["class","form-control"],["formControlName","fields"],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0;return"input"===n&&(t=!1!==e.xb(l,17)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.xb(l,17).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.xb(l,17)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.xb(l,17)._compositionEnd(u.target.value)&&t),t},null,null)),e.ob(17,16384,null,0,t.d,[e.D,e.k,[2,t.a]],null,null),e.Cb(1024,null,t.n,function(l){return[l]},[t.d]),e.ob(19,671744,null,0,t.h,[[3,t.c],[8,null],[8,null],[6,t.n],[2,t.A]],{name:[0,"name"]},null),e.Cb(2048,null,t.o,null,[t.h]),e.ob(21,16384,null,0,t.p,[[4,t.o]],null,null)],function(l,n){var u=n.component;l(n,8,0,u.getFields()),l(n,11,0,u.form),l(n,19,0,"fields")},function(l,n){l(n,10,0,e.xb(n,13).ngClassUntouched,e.xb(n,13).ngClassTouched,e.xb(n,13).ngClassPristine,e.xb(n,13).ngClassDirty,e.xb(n,13).ngClassValid,e.xb(n,13).ngClassInvalid,e.xb(n,13).ngClassPending),l(n,16,0,e.xb(n,21).ngClassUntouched,e.xb(n,21).ngClassTouched,e.xb(n,21).ngClassPristine,e.xb(n,21).ngClassDirty,e.xb(n,21).ngClassValid,e.xb(n,21).ngClassInvalid,e.xb(n,21).ngClassPending)})}function Y(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"app-contact",[],null,null,null,Z,H)),e.ob(1,49152,null,0,o,[],null,null)],null,null)}var B=e.lb("app-contact",o,Y,{},{},[]),K=u("lzRr"),Q=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return R.d(n,l),n}(u("uhAp").a),W=function(){function l(){}return l.prototype.fromJson=function(l){return Object.assign(new Q,l)},l.prototype.toJson=function(l){return{id:l.id,name:l.name,address:l.address,phone:l.phone,email:l.email}},l}(),X=function(l){function n(n){var u=l.call(this,n,"users.json",new W)||this;return u._users=[],u}return R.d(n,l),Object.defineProperty(n.prototype,"users",{get:function(){return this._users},enumerable:!0,configurable:!0}),n.prototype.getAll=function(){return R.b(this,void 0,void 0,function(){var l;return R.e(this,function(n){switch(n.label){case 0:return 0!==this._users.length?[3,2]:(l=this,[4,this.list().toPromise()]);case 1:l._users=n.sent(),n.label=2;case 2:return[2,this.users]}})})},n.prototype.updateLocal=function(l){l.id?isNaN(l.id)||(this.users[this.users.findIndex(function(n){return n.id===l.id})]=l):this.users.push(l)},n}(K.a),ll=u("t/Na"),nl=function(){return function(){}}(),ul=u("ZYCi");u.d(n,"ContactModuleNgFactory",function(){return el});var el=e.mb(i,[],function(l){return e.vb([e.wb(512,e.j,e.Z,[[8,[r.a,B]],[3,e.j],e.x]),e.wb(4608,s.m,s.l,[e.u,[2,s.w]]),e.wb(4608,t.e,t.e,[]),e.wb(4608,t.z,t.z,[]),e.wb(4608,X,X,[ll.c]),e.wb(1073742336,s.c,s.c,[]),e.wb(1073742336,t.y,t.y,[]),e.wb(1073742336,t.u,t.u,[]),e.wb(1073742336,nl,nl,[]),e.wb(1073742336,ul.n,ul.n,[[2,ul.s],[2,ul.k]]),e.wb(1073742336,i,i,[]),e.wb(1024,ul.i,function(){return[[{path:"",component:o}]]},[])])})}}]);