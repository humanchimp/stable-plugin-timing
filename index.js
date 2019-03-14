'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var name = "@topl/stable-plugin-timing";
var version = "0.5.5";
var description = "Adds timers to stable";
var main = "index.js";
var scripts = {
	test: "echo \"Error: no test specified\" && exit 1",
	build: "rollup -c rollup.config.js src/index.js -o index.js -f cjs"
};
var author = "Lil Thorny <hi@lilthorny.com>";
var license = "MIT";
var devDependencies = {
	rollup: "^1.6.0",
	"rollup-plugin-json": "^3.1.0"
};
var packageJson = {
	name: name,
	version: version,
	description: description,
	main: main,
	scripts: scripts,
	author: author,
	license: license,
	devDependencies: devDependencies
};

function timing(config) {
  config = [].concat(config).pop();

  return {
    package: packageJson,

    provides: {
      listeners: "./listeners.js",
    },

    config,
  };
}

exports.timing = timing;
