const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/", {
      target: "https://port-0-interpark-cloud-server-12fhqa2blnp9i5uw.sel5.cloudtype.app",
      changeOrigin: true,
    })
  );
};
