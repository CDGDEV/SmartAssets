(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13db3a54"],{"2ad3":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-card",{staticClass:"header-solid h-full",attrs:{bordered:!1,bodyStyle:{padding:0}},scopedSlots:e._u([{key:"title",fn:function(){return[t("a-row",{attrs:{type:"flex",align:"middle"}},[t("a-col",{attrs:{span:24,md:12}},[t("h5",{staticClass:"font-semibold m-0"},[e._v("New Asset")])])],1)]},proxy:!0}])},[t("a-form",{attrs:{form:e.form,"label-col":{span:5},"wrapper-col":{span:12}},on:{submit:e.handleSubmit}},[t("a-row",[t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"Note"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["note",{rules:[{required:!0,message:"Please input your note!"}]}],expression:"['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"}]})],1)],1),t("a-col",{attrs:{span:12}},[t("a-form-item",{attrs:{label:"Gender"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["gender",{rules:[{required:!0,message:"Please select your gender!"}]}],expression:"[\n\t\t\t\t'gender',\n\t\t\t\t{ rules: [{ required: true, message: 'Please select your gender!' }] },\n\t\t\t\t]"}],attrs:{placeholder:"Select a option and change input text above"},on:{change:e.handleSelectChange}},[t("a-select-option",{attrs:{value:"male"}},[e._v(" male ")]),t("a-select-option",{attrs:{value:"female"}},[e._v(" female ")])],1)],1)],1)],1),t("a-form-item",{attrs:{"wrapper-col":{span:12,offset:5}}},[t("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v(" Submit ")])],1)],1)],1)},o=[],n={data:function(){return{formLayout:"horizontal",form:this.$form.createForm(this,{name:"coordinated"})}},methods:{handleSubmit:function(e){e.preventDefault(),this.form.validateFields((function(e,a){e||console.log("Received values of form: ",a)}))},handleSelectChange:function(e){console.log(e),this.form.setFieldsValue({note:"Hi, ".concat("male"===e?"man":"lady","!")})}}},s=n,l=t("2877"),i=Object(l["a"])(s,r,o,!1,null,null,null);a["a"]=i.exports},"4e82":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-row",{attrs:{gutter:24,type:"flex"}},[t("a-col",{staticClass:"mb-24",attrs:{span:24}},[t("AssetForm",{attrs:{data:e.table1Data,columns:e.table1Columns}})],1)],1)],1)},o=[],n=t("2ad3"),s=[{title:"AUTHOR",dataIndex:"author",scopedSlots:{customRender:"author"}},{title:"FUNCTION",dataIndex:"func",scopedSlots:{customRender:"func"}},{title:"STATUS",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"EMPLOYED",dataIndex:"employed",class:"text-muted"},{title:"",scopedSlots:{customRender:"editBtn"},width:50}],l=[{key:"1",author:{avatar:"images/face-2.jpg",name:"Michael John",email:"michael@mail.com"},func:{job:"Manager",department:"Organization"},status:1,employed:"23/04/18"},{key:"2",author:{avatar:"images/face-3.jpg",name:"Alexa Liras",email:"alexa@mail.com"},func:{job:"Programator",department:"Developer"},status:0,employed:"23/12/20"},{key:"3",author:{avatar:"images/face-1.jpg",name:"Laure Perrier",email:"laure@mail.com"},func:{job:"Executive",department:"Projects"},status:1,employed:"13/04/19"},{key:"4",author:{avatar:"images/face-4.jpg",name:"Miriam Eric",email:"miriam@mail.com"},func:{job:"Marketing",department:"Organization"},status:1,employed:"03/04/21"},{key:"5",author:{avatar:"images/face-5.jpeg",name:"Richard Gran",email:"richard@mail.com"},func:{job:"Manager",department:"Organization"},status:0,employed:"23/03/20"},{key:"6",author:{avatar:"images/face-6.jpeg",name:"John Levi",email:"john@mail.com"},func:{job:"Tester",department:"Developer"},status:0,employed:"14/04/17"}],i={components:{AssetForm:n["a"]},data:function(){return{table1Data:l,table1Columns:s}}},m=i,u=t("2877"),c=Object(u["a"])(m,r,o,!1,null,null,null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-13db3a54.36ccccc6.js.map