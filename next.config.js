// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./task.js");
    }
    return config;
  },
};
