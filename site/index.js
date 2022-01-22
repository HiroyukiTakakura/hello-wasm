const js = import("./node_modules/@hiroyuki_takakura/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});