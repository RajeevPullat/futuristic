const __vite__fileDeps=["assets/Linker-CYaIqqc1.js","assets/Ranges-I508DUZ0.js","assets/index-CYgoE5NY.js","assets/index-CldcGUZH.css","assets/index-DlT50XJC.js","assets/OptionsColor-w36o_qem.js","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-CYgoE5NY.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-CYaIqqc1.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};