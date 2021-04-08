export NODE_ENV=production

webpack --mode=production --config ./client/config/webpack.prd.config.js

unset NODE_ENV
