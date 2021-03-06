const { Router } = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const {
  service2,
  service1,
  service3,
  service4,
  //  service2, ,
} = require("../config/services.js");

const router = Router();

router.use(
  "/service1.js",
  createProxyMiddleware({
    target: service1.url,
    pathRewrite: {
      "^/bundles/service1.js": service1.bundle,
    },
    changeOrigin: true,
  })
);

router.use(
  "/service2.js",
  createProxyMiddleware({
    target: service2.url,
    pathRewrite: {
      "^/bundles/service2.js": service2.bundle,
    },
    changeOrigin: true,
  })
);

router.use(
  "/service3.js",
  createProxyMiddleware({
    target: service3.url,
    pathRewrite: {
      "^/bundles/service3.js": service3.bundle,
    },
    changeOrigin: true,
  })
);

router.use(
  "/service4.js",
  createProxyMiddleware({
    target: service4.url,
    pathRewrite: {
      "^/bundles/service4.js": service4.bundle,
    },
    changeOrigin: true,
  })
);

module.exports = router;
