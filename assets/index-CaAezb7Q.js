const __vite__fileDeps=["assets/Attractor-sKVh8Kmb.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-CGyinDjr.js","assets/index-CJNjDydU.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-CGyinDjr.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-sKVh8Kmb.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
