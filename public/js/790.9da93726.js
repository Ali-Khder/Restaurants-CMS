"use strict";(self["webpackChunkmedia_app_vue"]=self["webpackChunkmedia_app_vue"]||[]).push([[790],{5790:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"login-page"},[t._m(0),s("div",{staticClass:"form"},[s("form",{staticClass:"login-form"},[s("label",{staticClass:"label"},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"email address"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),s("label",{staticClass:"label"},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),s("button",{staticClass:"login mt-3",attrs:{disabled:t.disabled},on:{click:function(s){return s.preventDefault(),t.login.apply(null,arguments)}}},[t.disabled?s("div",[t._v("logining...")]):s("div",[t._v("login")])]),s("button",{staticClass:"register mt-3",on:{click:function(s){return s.preventDefault(),t.register()}}},[t._v("New Account?")])])])])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"div-title row d-flex justify-content-center align-content-center"},[s("h1",{staticClass:"login-title"},[t._v("Restaurant"),s("span",{staticClass:"primary-color"},[t._v("CMS")])])])}],r=(e(7658),{name:"LoginView",data(){return{email:"",password:"",disabled:!1}},methods:{register(){this.$router.push("/register")},async login(){this.disabled=!0;const t=new FormData;t.append("email",this.email),t.append("password",this.password),await this.$resource.resource(1,"/login",t),await this.$store.dispatch("getRes");const s=JSON.parse(this.$store.state.res);!0===s.status?(this.$addNotification("success","success"),await this.$store.dispatch("setToken",s.data.token),this.$router.push("/")):this.$addNotification("danger",s.message),this.disabled=!1}}}),l=r,n=e(1001),o=(0,n.Z)(l,a,i,!1,null,"19ed9587",null),d=o.exports}}]);