const __vite__fileDeps=["assets/LifeUpdater-CKrCIwYm.js","assets/ValueWithRandom-C719j9iC.js","assets/index-CYgoE5NY.js","assets/index-CldcGUZH.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-CYgoE5NY.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CKrCIwYm.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};