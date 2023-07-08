module.exports = {
  apps: [
    {
      name: "next_sample_app_test",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      watch: false,
    },
  ],
};
