import"./assets/styles-CP_liXJD.js";import{i as r}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector(".form");o.addEventListener("submit",e=>{e.preventDefault();const s=parseInt(o.elements.delay.value),i=o.elements.state.value;m(s,i).then(t=>{r.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight",timeout:3e3})}).catch(t=>{r.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topRight",timeout:3e3})})});function m(e,s){return new Promise((i,t)=>{setTimeout(()=>{s==="fulfilled"?i(e):t(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
