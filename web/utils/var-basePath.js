const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
// export basePath to next.config.js
// same as the one exported from var.ts
module.exports = {
  basePath: basePath,
  assetPrefix: basePath,
}
