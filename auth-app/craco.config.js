const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = "http://localhost:3001/";

      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: "authApp",
          filename: "remoteEntry.js",
          exposes: {
            "./Login": "./src/Login",
          },
          shared: {
            react: { singleton: true, eager: true },
            "react-dom": { singleton: true, eager: true },
          },
        }),
      );
      return webpackConfig;
    },
  },
};
