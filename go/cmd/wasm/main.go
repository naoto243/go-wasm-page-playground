//go:build js && wasm
// +build js,wasm

package main

import (
	"github.com/naoto243/go-wasm-page-playground/go/strings"
	"syscall/js"
)

func main() {
	c := make(chan struct{})
	js.Global().Set("wasmApp", js.ValueOf(map[string]any{
		"hiraganaToKatakana": js.FuncOf(hiraganaToKatakana),
	}))
	<-c // 終了しないようにブロック
}

func hiraganaToKatakana(this js.Value, args []js.Value) any {
	if len(args) < 1 {
		return map[string]any{
			"ok":      false,
			"message": "first argument should be markdown source.",
		}
	}

	arg := args[0].String()
	resp := strings.HiraganaToKatakana(arg)

	return map[string]any{
		"ok":     true,
		"result": resp,
	}
}
