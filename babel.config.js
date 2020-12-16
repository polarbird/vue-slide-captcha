module.exports = {
  presets: [
    ["@vue/cli-plugin-babel/preset", {
      polyfills: [
        "es.promise",
        "es.symbol"
      ]
    }],
    ["@babel/preset-env", { "modules": false }]
  ]
}
