const __vite__fileDeps=["assets/OutOfCanvasUpdater-BzL9fFaG.js","assets/index-BxvCFGDi.js","assets/index-C0d90DHB.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-BxvCFGDi.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-BzL9fFaG.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};