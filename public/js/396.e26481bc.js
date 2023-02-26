"use strict";(self["webpackChunkmedia_app_vue"]=self["webpackChunkmedia_app_vue"]||[]).push([[396],{3396:function(t,e,a){a.r(e),a.d(e,{default:function(){return $}});var s=function(){var t=this,e=t._self._c;return e("div",[e("nav-bar"),e("div",{staticClass:"p-5"},[e("h2",{staticClass:"title mb-5"},[t._v("Menu")]),e("div",{staticClass:"table m-2"},[e("div",{staticClass:"table-container"},[e("b-table-simple",{attrs:{hover:"",small:"","caption-top":"",responsive:""}},[e("b-thead",{attrs:{"head-variant":"dark"}},[e("b-tr",[e("b-th",[t._v("id")]),e("b-th",[t._v("name")]),e("b-th",[t._v("discount")]),e("b-th",[t._v("actions")])],1)],1),e("b-tbody",t._l(t.items,(function(a){return e("b-tr",{key:a.id},[e("b-td",[t._v(t._s(a.id))]),e("b-td",[t._v(t._s(a.name))]),e("b-td",[t._v(t._s(a.discount)+" %")]),e("b-td",{staticClass:"mb-0"},[e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.bv-modal-update",modifiers:{"bv-modal-update":!0}}],staticClass:"udpate-action",on:{click:function(e){return t.setMethod(a.id,a.name)}}},[e("p",{staticClass:"h5"},[e("b-icon",{staticClass:"rounded lg",attrs:{icon:"pencil-square"}})],1)]),e("button",{directives:[{name:"b-modal",rawName:"v-b-modal.bv-modal-delete",modifiers:{"bv-modal-delete":!0}}],staticClass:"delete-action",on:{click:function(e){return t.setMethod(a.id,a.name)}}},[e("p",{staticClass:"h5"},[e("b-icon",{staticClass:"rounded lg",attrs:{icon:"x"}})],1)])])],1)})),1)],1),e("div",{staticClass:"tfoot"},[e("ul",[e("li",[e("button",{staticClass:"pagination-btn changer",attrs:{disabled:t.isPrevious},on:{click:function(e){return t.move(1)}}},[t._v("<< ")])]),e("li",[e("button",{staticClass:"pagination-btn changer",attrs:{disabled:t.isPrevious},on:{click:function(e){return t.move(t.current_page-1)}}},[t._v("< ")])]),e("li",[e("button",{staticClass:"pagination-btn active",on:{click:function(e){return t.move(t.current_page)}}},[t._v(" "+t._s(this.current_page)+" ")])]),e("li",[this.current_page+1<=this.pages?e("button",{staticClass:"pagination-btn",on:{click:function(e){return t.move(t.current_page+1)}}},[t._v(" "+t._s(this.current_page+1)+" ")]):t._e()]),e("li",[this.current_page+2<=this.pages?e("button",{staticClass:"pagination-btn",on:{click:function(e){return t.move(t.current_page+2)}}},[t._v(" "+t._s(this.current_page+2)+" ")]):t._e()]),e("li",[e("button",{staticClass:"pagination-btn changer",attrs:{disabled:t.isNext},on:{click:function(e){return t.move(t.current_page+1)}}},[t._v("> ")])]),e("li",[e("button",{staticClass:"pagination-btn changer",attrs:{disabled:t.isNext},on:{click:function(e){return t.move(t.last_page)}}},[t._v(">> ")])])])])],1),e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.bv-modal-add",modifiers:{"bv-modal-add":!0}}],staticClass:"add mt-5",attrs:{variant:"outline-success"}},[e("font-awesome-icon",{attrs:{icon:"add"}})],1)],1),e("div",{attrs:{id:"add"}},[e("b-modal",{attrs:{id:"bv-modal-add","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Add new item ")]},proxy:!0}])},[e("div",{staticClass:"d-block text-center"},[e("addMenu")],1)])],1),e("div",{attrs:{id:"update"}},[e("b-modal",{attrs:{id:"bv-modal-update","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Update item ")]},proxy:!0}])},[e("div",{staticClass:"d-block text-center"},[e("updateMenu",{attrs:{id:this.id}})],1)])],1),e("div",{attrs:{id:"delete"}},[e("b-modal",{ref:"thisModal",attrs:{id:"bv-modal-delete","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(" Delete item ")]},proxy:!0}])},[e("div",{staticClass:"d-block text-center"},[e("DeleteModal",{attrs:{id:this.id,scope:"menus",name:this.name},on:{delete:function(e){return t.deleteAction()}}})],1)])],1)])],1)},i=[],n=(a(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-inner"},[t._t("default"),e("div",[e("label",{staticClass:"label mb-2"},[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"mb-2",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),e("label",{staticClass:"label mb-2"},[t._v("Categories")]),e("b-form-select",{staticClass:"form-control form-control mb-2",attrs:{multiple:"",options:this.categories},model:{value:t.menuCategories,callback:function(e){t.menuCategories=e},expression:"menuCategories"}})],1),e("div",{staticClass:"buttons"},[e("b-button",{staticClass:"save primary-back mt-2",attrs:{variant:"success"},on:{click:function(e){return t.add()}}},[e("div",[t._v("Add")])])],1)],2)}),o=[],r={name:"addMenu",data(){return{categories:[],menuCategories:[],name:"",discount:0,parent:0}},methods:{async add(){const t=new FormData;if(t.append("name",this.name),t.append("discount",this.discount),0!==this.menuCategories.length)for(let a=0;a<this.menuCategories.length;a++)t.append(`category[${a}]`,this.menuCategories[a]);await this.$resource.resource(1,"/menus",t),await this.$store.dispatch("getRes");const e=JSON.parse(this.$store.state.res);!0===e.status?(this.$addNotification("success",e.message),this.$router.go()):this.$addNotification("danger",e.message)}},async mounted(){await this.$resource.resource(0,"/categories/parents"),await this.$store.dispatch("getRes");const t=JSON.parse(this.$store.state.res);if(t.status){const e=t.data;for(let t=0;t<e.length;t++)this.categories.push({value:e[t].id,text:e[t].name})}else this.$addNotification("danger",t.response)}},d=r,c=a(1001),l=(0,c.Z)(d,n,o,!1,null,"29ad61f9",null),u=l.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-inner"},[t._t("default"),e("div",[e("label",{staticClass:"label mb-2"},[t._v("Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"mb-2",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),e("label",{staticClass:"label mb-2"},[t._v("Discount")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.discount,expression:"discount"}],staticClass:"mb-2",attrs:{type:"text",placeholder:"Discount",disabled:""},domProps:{value:t.discount},on:{input:function(e){e.target.composing||(t.discount=e.target.value)}}}),e("label",{staticClass:"label mb-2"},[t._v("My Categories, choose to delete")]),e("b-form-select",{staticClass:"form-control form-control mb-2",attrs:{multiple:"",options:this.menuCategories},model:{value:t.deleteCategories,callback:function(e){t.deleteCategories=e},expression:"deleteCategories"}}),e("label",{staticClass:"label mb-2"},[t._v("All Categories, choose to update")]),e("b-form-select",{staticClass:"form-control form-control mb-2",attrs:{multiple:"",options:this.categories},model:{value:t.newCategories,callback:function(e){t.newCategories=e},expression:"newCategories"}})],1),e("div",{staticClass:"buttons"},[e("b-button",{staticClass:"save primary-back mt-2",attrs:{variant:"success"},on:{click:function(e){return t.update()}}},[e("div",[t._v("Update")])])],1)],2)},p=[],h={name:"updateMenu",props:["id"],data(){return{categories:[],menuCategories:[],newCategories:[],deleteCategories:[],name:"",discount:0,parent:0}},methods:{async update(){const t=new FormData;if(t.append("name",this.name),0!==this.newCategories.length)for(let a=0;a<this.newCategories.length;a++)t.append(`category_add[${a}]`,this.newCategories[a]);if(0!==this.deleteCategories.length)for(let a=0;a<this.deleteCategories.length;a++)t.append(`category_delete[${a}]`,this.deleteCategories[a]);await this.$resource.resource(1,`/menus/${this.id}`,t),await this.$store.dispatch("getRes");const e=JSON.parse(this.$store.state.res);!0===e.status?(this.$addNotification("success",e.message),this.$router.go()):this.$addNotification("danger",e.message)}},async mounted(){await this.$resource.resource(0,`/menus/${this.id}`),await this.$store.dispatch("getRes");let t=JSON.parse(this.$store.state.res);if(!0===t.status){this.name=t.data.name,this.discount=t.data.discount;const e=t.data.categories;for(let t=0;t<e.length;t++)this.menuCategories.push({value:e[t].id,text:e[t].name})}else this.$addNotification("danger",t.response);if(await this.$resource.resource(0,"/categories/parents"),await this.$store.dispatch("getRes"),t=JSON.parse(this.$store.state.res),!0===t.status){const e=t.data;for(let t=0;t<e.length;t++)this.categories.push({value:e[t].id,text:e[t].name})}else this.$addNotification("danger",t.response)}},g=h,v=(0,c.Z)(g,m,p,!1,null,"0b5fc3ae",null),b=v.exports,f={name:"menuView",components:{addMenu:u,updateMenu:b},data(){return{items:[],id:"",name:"",pages:0,current_page:0,last_page:0}},computed:{isPrevious(){return this.current_page-1<=0},isNext(){return this.current_page+1>this.pages}},methods:{deleteAction:function(){this.modalDeleteShown=!1,this.move(this.$route.params.page)},async move(t){await this.$resource.resource(0,"/menus?page="+t),await this.$store.dispatch("getRes");const e=JSON.parse(this.$store.state.res);e.status?(this.items=e.data.data,this.pages=e.data.last_page,this.current_page=e.data.current_page,this.last_page=e.data.last_page):this.$addNotification("danger",e.message)},push(t){this.$router.push(t)},setMethod(t,e,a){0===a&&(this.modalDeleteShown=!0),this.id=t,this.name=e}},async mounted(){await this.$resource.resource(0,"/menus"),await this.$store.dispatch("getRes");const t=JSON.parse(this.$store.state.res);t.status?(this.items=t.data.data,this.pages=t.data.last_page,this.current_page=t.data.current_page,this.last_page=t.data.last_page):this.$addNotification("danger",t.message)}},_=f,C=(0,c.Z)(_,s,i,!1,null,"41d02568",null),$=C.exports}}]);