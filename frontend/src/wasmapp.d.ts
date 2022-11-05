type f = (src: string) =>  {ok: false, result: string};

declare var wasmApp:{
  hiraganaToKatakana: f,
};