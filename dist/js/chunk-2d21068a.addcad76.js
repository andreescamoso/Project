(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21068a"],{b886:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{attrs:{id:"modal-lg-addProcedimento","header-bg-variant":"light",title:"Novo Procedimento"},on:{ok:t.saveProcedimento,hidden:t.resetModalProcedimento},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var r=e.ok,i=e.hide;return[o("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){return r()}}},[t._v(" Salvar ")]),o("b-button",{attrs:{size:"sm",variant:"outline-secondary"},on:{click:t.limparProcedimento}},[t._v(" Novo ")]),o("b-button",{attrs:{size:"sm",variant:"outline-secondary"},on:{click:function(t){return i("forget")}}},[t._v(" Fechar ")])]}}])},[o("b-tabs",{attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[o("b-tab",{attrs:{title:"Cadastro",active:""}},[o("label",{staticClass:"mt-2"},[t._v("Descrição do Procedimento")]),o("b-form-input",{attrs:{size:"sm",type:"text",hidden:""},model:{value:t.procedimento.uuid,callback:function(e){t.$set(t.procedimento,"uuid",e)},expression:"procedimento.uuid"}}),o("b-form-input",{attrs:{size:"sm",type:"text"},model:{value:t.procedimento.text,callback:function(e){t.$set(t.procedimento,"text",e)},expression:"procedimento.text"}})],1),o("b-tab",{attrs:{title:"Pesquisar"}},[o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[t._v("Descrição Procedimento")]),o("th",{attrs:{scope:"col"}},[t._v("Editar")]),o("th",{attrs:{scope:"col"}},[t._v("Excluir")])])]),o("tbody",t._l(t.optionsPro,(function(e){return o("tr",{key:e.uuid},[o("td",[t._v(t._s(e.text))]),o("td",[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{pill:"",variant:"primary"},on:{click:function(o){return t.editarProcedimento(e.uuid)}}},[t._v("Editar")])],1),o("td",[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],attrs:{pill:"",variant:"primary"},on:{click:function(o){return t.excluirProcedimento(e.uuid)}}},[t._v("Excluir")])],1)])})),0)])])],1)],1)},i=[],n=o("5530"),a=(o("159b"),o("d8fb")),c=o("2f62"),d={data:function(){return{optionsPro:[],tabIndex:0,procedimento:{uuid:"",text:"",value:""}}},computed:Object(n["a"])({},Object(c["c"])({procedimentoSelect:function(t){return t.procedimentoSelect}})),created:function(){this.readAllProcedimentos()},methods:{limparProcedimento:function(){this.procedimento={uuid:"",text:"",value:""}},showAlert:function(t,e){this.$swal({icon:t,title:e,showConfirmButton:!1,timer:2500})},excluirProcedimento:function(t){var e=this;t?a["a"].delete(t).then((function(){e.showAlert("success","Registro deletado com Sucesso"),e.limparProcedimento(),e.readAllProcedimentos()})).catch((function(){e.showAlert("error","Erro ao Deletar Registro")})):this.showAlert("info","Selecione um Registro")},resetModalProcedimento:function(){this.procedimento={uuid:"",text:"",value:""}},procedimentoGenerate:function(t,e){return{text:t,value:e}},readAllProcedimentos:function(){var t=this;this.optionsPro=[],a["a"].readAll().then((function(e){e.data.procedimento.forEach((function(e){t.optionsPro.push(e)})),t.$store.commit("procedimentoSelect",t.optionsPro)})).catch((function(){t.showAlert("error","Ocorreu um erro ao carregar procedimentos")}))},editarProcedimento:function(t){var e=this;a["a"].read(t).then((function(t){201===t.status&&(e.procedimento.text=t.data.procedimento[0].text,e.procedimento.uuid=t.data.procedimento[0].uuid,e.procedimento.value=t.data.procedimento[0].value,e.tabIndex=0)})).catch((function(){e.showAlert("error","Erro ao carregar procedimento")}))},hide:function(){this.$emit("closeModal")},saveProcedimento:function(t){var e=this;t.preventDefault(),""!==this.procedimento.text?""===this.procedimento.uuid?(t.preventDefault(),a["a"].save(this.procedimento).then((function(t){e.showAlert("success","Procedimento Salvo com Sucesso"),e.procedimento.uuid=t.data.uuid.uuid,e.$store.commit("procedimentoSelectPush",e.procedimento)})).catch((function(){e.showAlert("error","Erro ao salvar Procedimento")}))):a["a"].update(this.procedimento,this.procedimento.uuid).then((function(){e.showAlert("success","Procedimento Atualizado"),e.readAllProcedimentos()})).catch((function(){e.showAlert("error","Erro ao atualizar Procedimento")})):this.showAlert("info","Informe a Descrição do Procedimento Por favor")}}},s=d,u=o("2877"),l=Object(u["a"])(s,r,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d21068a.addcad76.js.map