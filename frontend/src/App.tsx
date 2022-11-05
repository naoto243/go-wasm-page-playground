import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {loadWasm} from "./wasm/load";

function App() {

  const [canUseWasm , setCanUseWam] = useState(false)
  const [result  , setResult] = useState<string>(``)
  const [myInput  , setInput] = useState<string>(``)

  useEffect(()=>{
    loadWasm(()=>{
      console.log(`onLoad`)
      setCanUseWam(true)
    })
  } , [])

  const onClickWasm = ()=>{
    const resp = wasmApp.hiraganaToKatakana(myInput)
    console.log(`wasm` , resp)
    setResult(resp.result)

  }

  return (
    <div className="App">
      <div>
        WASMでひらがなtoかたかな
      </div>
      <div>
        <div>
          <div>入力:ひらがな</div>
          <textarea value={myInput} onChange={e => setInput(e.target.value)} ></textarea>
        </div>
        <div>
          <div>結果</div>
          <textarea disabled={true} value={result}></textarea>
        </div>
      </div>
      {
        canUseWasm && (
          <div>
            <button type="button" onClick={onClickWasm}> Calc on Wasm </button>
          </div>
        )
      }
    </div>
  )
}

export default App
