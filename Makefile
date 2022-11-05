

wasm-build:
	GOOS=js GOARCH=wasm go build  -o frontend/public/wasm/wasmApp.wasm  ./go/cmd/wasm/main.go