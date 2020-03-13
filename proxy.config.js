const proxy = [
  {
    context: "/",
    target: "http://localhost:8081",
    pathRewrite: { "^/": "" }
  }
];

module.exports = proxy;
