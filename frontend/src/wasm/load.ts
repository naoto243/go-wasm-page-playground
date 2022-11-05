

export const loadWasm = (onLoad : ()=>void) => {
  const scriptElem = document.createElement(`script`)
  scriptElem.setAttribute(`id` , `exec-wasm`)
  scriptElem.src = `public/js/wasm_exec.js`

  scriptElem.addEventListener(`load` , ()=>{
    // @ts-ignore
    const go = new Go();
    WebAssembly.instantiateStreaming(fetch("public/wasm/wasmApp.wasm"), go.importObject).then((result) => {
      go.run(result.instance);
      onLoad();
    });
  })

  document.body.appendChild(scriptElem);

};