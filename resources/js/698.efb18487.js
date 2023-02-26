"use strict";(self["webpackChunkmedia_app_vue"]=self["webpackChunkmedia_app_vue"]||[]).push([[698],{5698:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var s=function(){var t=this,e=t._self._c;return e("div",[e("nav-bar"),e("div",{staticClass:"p-5"},[e("h2",{staticClass:"title mb-5"},[t._v("Categories")]),e("div",{staticClass:"table m-2"},[e("div",{staticClass:"table-container"},[e("b-table-simple",{attrs:{hover:"",small:"","caption-top":"",responsive:""}},[e("b-thead",{attrs:{"head-variant":"dark"}},[e("b-tr",[e("b-th",[t._v("id")]),e("b-th",[t._v("name")]),e("b-th",[t._v("discount")]),e("b-th",[t._v("level")]),e("b-th",[t._v("actions")])],1)],1),e("b-tbody",t._l(t.items,(function(a){return e("b-tr",{key:a.id},[e("b-td",[t._v(t._s(a.id))]),e("b-td",[t._v(t._s(a.name))]),e("b-td",[t._v(t._s(a.discount)+" %")]),e("b-td",[t._v(t._s(a.child_level))]),e("b-td",{staticClass:"mb-0"},[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.bv-modal-delete",modifiers:{"bv-modal-delete":!0}}],staticClass:"delete-action",on:{click:function(e){return t.setMethod(a.id,a.name,a.companyID)}}},[e("p",{staticClass:"h5"},[e("b-icon",{staticClass:"rounded lg",attrs:{icon:"x"}})],1)])])],1)})),1)],1),e("div",{staticClass:"tfoot"},[e("ul",[e("li",[e("button",{staticClass:"pagination-btn changer",attrs:{disabled:t.isPrevious},on:{click:function(e){return t.move(1)}}},[t._v("<< ")])]),e("li",[e("button",{staticClass:"pagination-btn changer",attrs:{disabled:t.isPrevious},on:{click:function(e){return t.move(t.current_page-1)}}},[t._v("< ")])]),e("li",[e("button",{staticClass:"pagination-btn active",on:{click:function(e){return t.move(t.current_page)}}},[t._v(" "+t._s(this.current_page)+" ")])]),e("li",[this.current_page+1<=this.pages?e("button",{staticClass:"pagination-btn",on:{click:function(e){return t.move(t.current_page+1)}}},[t._v(" "+t._s(this.current_page+1)+" ")]):t._e()]),e("li",[this.current_page+2<=this.pages?e("button",{staticClass:"pagination-btn",on:{click:function(e){return t.move(t.current_page+2)}}},[t._v(" "+t._s(this.current_page+2)+" ")]):t._e()]),e("li",[e("button",{staticClass:"pagination-btn changer",attrs:{disabled:t.isNext},on:{click:function(e){return t.move(t.current_page+1)}}},[t._v("> ")])]),e("li",[e("button",{staticClass:"pagination-btn changer",attrs:{disabled:t.isNext},on:{click:function(e){return t.move(t.last_page)}}},[t._v(">> ")])])])])],1),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.bv-modal-add",modifiers:{"bv-modal-add":!0}}],staticClass:"add mt-5",attrs:{variant:"outline-success"}},[e("font-awesome-icon",{attrs:{icon:"add"}})],1)],1),e("div",{attrs:{id:"add"}},[e("b-modal",{attrs:{id:"bv-modal-add","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Add new item ")]},proxy:!0}])},[e("div",{staticClass:"d-block text-center"},[e("addCategory")],1)])],1),e("div",{attrs:{id:"delete"}},[e("b-modal",{attrs:{id:"bv-modal-delete","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Delete item ")]},proxy:!0}])},[e("div",{staticClass:"d-block text-center"},[e("DeleteModal",{attrs:{id:this.id,scope:"categories",name:this.name}})],1)])],1)])],1)},i=[],n=(a(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-inner"},[t._t("default"),e("div",[e("label",{staticClass:"label mb-2"},[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"mb-2",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),e("label",{staticClass:"label mb-2"},[t._v("Discount")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.discount,expression:"discount"}],staticClass:"mb-2",attrs:{type:"text",placeholder:"Discount"},domProps:{value:t.discount},on:{input:function(e){e.target.composing||(t.discount=e.target.value)}}}),e("label",{staticClass:"label mb-2"},[t._v("Parent category")]),e("b-form-select",{staticClass:"form-control form-control mb-2",attrs:{options:this.categories},model:{value:t.parent,callback:function(e){t.parent=e},expression:"parent"}})],1),e("div",{staticClass:"buttons"},[e("b-button",{staticClass:"save primary-back mt-2",attrs:{variant:"success"},on:{click:function(e){return t.add()}}},[e("div",[t._v("Add")])])],1)],2)}),r=[],o={name:"addCategory",data(){return{categories:[],name:"",discount:0,parent:0}},methods:{async add(){const t=new FormData;t.append("name",this.name),null!==this.discount&&t.append("discount",this.discount),0!==this.parent&&t.append("parent_id",this.parent),await this.$resource.resource(1,"/categories",t),await this.$store.dispatch("getRes");const e=JSON.parse(this.$store.state.res);!0===e.status?(this.$addNotification("success",e.message),this.$router.go()):this.$addNotification("danger",e.message)}},async mounted(){await this.$resource.resource(0,"/categories/parents"),await this.$store.dispatch("getRes");const t=JSON.parse(this.$store.state.res);if(t.status){const e=t.data;for(let t=0;t<e.length;t++)this.categories.push({value:e[t].id,text:e[t].name})}else this.$addNotification("danger",t.response)}},c=o,d=a(1001),l=(0,d.Z)(c,n,r,!1,null,"1cfed08e",null),u=l.exports,p={name:"categoryView",components:{addCategory:u},data(){return{items:[],id:"",name:"",pages:0,current_page:0,last_page:0}},computed:{isPrevious(){return this.current_page-1<=0},isNext(){return this.current_page+1>this.pages}},methods:{async move(t){await this.$resource.resource(0,"/categories?page="+t),await this.$store.dispatch("getRes");const e=JSON.parse(this.$store.state.res);e.status?(this.items=e.data.data,this.pages=e.data.last_page,this.current_page=e.data.current_page,this.last_page=e.data.last_page):this.$addNotification("danger",e.message)},push(t){this.$router.push(t)},setMethod(t,e){this.id=t,this.name=e}},async mounted(){await this.$resource.resource(0,"/categories"),await this.$store.dispatch("getRes");const t=JSON.parse(this.$store.state.res);t.status?(this.items=t.data.data,this.pages=t.data.last_page,this.current_page=t.data.current_page,this.last_page=t.data.last_page):this.$addNotification("danger",t.message)}},m=p,h=(0,d.Z)(m,s,i,!1,null,"637a35ee",null),v=h.exports}}]);