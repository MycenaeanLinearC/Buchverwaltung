import{r as v,i as S,c as o,a as t,w as m,v as b,F as i,b as r,t as p,j as y,e as f,u as k,o as l,R as g,k as w}from"./index-CZf1q6g8.js";function h(){this.title="",this.author="",this.year="",this.description=""}const D={class:"details"},I={style:{width:"80%",left:"10%"}},V={__name:"BookDetails",setup(C){const s=w(),e=v(new h),n=v(!1);S(()=>s.meta.mode,x,{immediate:!0});function x(){if(s.meta.mode=="new")e.value=new h,n.value=!0;else if(s.meta.mode=="existing"){let u=JSON.parse(localStorage.getItem("books"));e.value=u[s.params.id],n.value=!1}}function B(){let u=[];e.value.title!=""&&(localStorage.getItem("books")?(u=JSON.parse(localStorage.getItem("books")),s.meta.mode=="new"&&(u.push(e.value),localStorage.setItem("books",JSON.stringify(u))),s.meta.mode=="existing"&&(u[s.params.id]=e.value,localStorage.setItem("books",JSON.stringify(u)))):(u.push(e.value),localStorage.setItem("books",JSON.stringify(u))))}function c(){n.value=!n.value}return(u,a)=>(l(),o(i,null,[t("table",D,[t("tbody",null,[t("tr",null,[a[4]||(a[4]=t("td",null,[t("label",{class:"bookDetailsLabel"},"Titel:")],-1)),t("td",I,[n.value?m((l(),o("textarea",{key:0,spellcheck:"false",rows:"1",class:"bookDetailsInput","onUpdate:modelValue":a[0]||(a[0]=d=>e.value.title=d)},"                    ",512)),[[b,e.value.title]]):(l(),o(i,{key:1},[r(p(e.value.title),1)],64))])]),t("tr",null,[a[5]||(a[5]=t("td",null,[t("label",{class:"bookDetailsLabel"},"Autor:")],-1)),t("td",null,[n.value?m((l(),o("textarea",{key:0,spellcheck:"false",rows:"1",class:"bookDetailsInput","onUpdate:modelValue":a[1]||(a[1]=d=>e.value.author=d)},"                    ",512)),[[b,e.value.author]]):(l(),o(i,{key:1},[r(p(e.value.author),1)],64))])]),t("tr",null,[a[6]||(a[6]=t("td",null,[t("label",{class:"bookDetailsLabel"},"Erscheinungsjahr:")],-1)),t("td",null,[n.value?m((l(),o("textarea",{key:0,spellcheck:"false",rows:"1",class:"bookDetailsInput","onUpdate:modelValue":a[2]||(a[2]=d=>e.value.year=d)},"                    ",512)),[[b,e.value.year]]):(l(),o(i,{key:1},[r(p(e.value.year),1)],64))])]),t("tr",null,[a[7]||(a[7]=t("td",null,[t("label",{class:"bookDetailsLabel"},"Beschreibung:")],-1)),t("td",null,[n.value?m((l(),o("textarea",{key:0,class:"bookDetailsInput",rows:"20","onUpdate:modelValue":a[3]||(a[3]=d=>e.value.description=d),style:{resize:"none"}},"                    ",512)),[[b,e.value.description]]):(l(),o(i,{key:1},[r(p(e.value.description),1)],64))])])])]),n.value?(l(),y(k(g),{key:0,to:{name:"BookTable"},onClick:B,class:"handleChangesButton",style:{left:"65%",top:"80%"}},{default:f(()=>[k(s).meta.mode=="existing"?(l(),o(i,{key:0},[r(" Änderungen Speichern ")],64)):(l(),o(i,{key:1},[r(" Speichern ")],64))]),_:1})):(l(),o("button",{key:1,class:"handleChangesButton",onClick:c,style:{left:"65%",top:"80%"}}," Editieren ")),n.value&&k(s).meta.mode=="existing"?(l(),o("button",{key:2,class:"handleChangesButton",onClick:c,style:{left:"20%",top:"80%"}}," Abbrechen ")):(l(),y(k(g),{key:3,to:{name:"BookTable"},class:"handleChangesButton",style:{left:"20%",top:"80%"}},{default:f(()=>[k(s).meta.mode=="existing"?(l(),o(i,{key:0},[r(" Zurück ")],64)):(l(),o(i,{key:1},[r(" Abbrechen ")],64))]),_:1}))],64))}};export{V as default};
