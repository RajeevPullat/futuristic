const __vite__fileDeps=["assets/LinkInstance-DpdBCGiy.js","assets/index-CXIgS5DL.js","assets/index-C0d90DHB.css","assets/CanvasUtils-CVubKfAE.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-CXIgS5DL.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-DpdBCGiy.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};