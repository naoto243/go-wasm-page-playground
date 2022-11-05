

wasm-build:
	 GOOS=js GOARCH=wasm go build  -o .build/main  ./go/cmd/wasm/main.go