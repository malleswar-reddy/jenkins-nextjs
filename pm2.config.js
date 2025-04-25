module.exports = {
  apps: [
    {
      name: "next-app",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      exec_mode: "fork",
      instances: 1, // change to "max" to use all CPUs
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
