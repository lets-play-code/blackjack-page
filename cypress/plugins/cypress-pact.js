const path = require("path")
const { Pact } = require('@pact-foundation/pact')

const pact_tasks = (pact_port) => {
  const provider = new Pact({
    consumer: "web page",
    provider: "backend",
    port: pact_port,
    log: path.resolve(process.cwd(), "logs", "pact.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    logLevel: "WARN",
    spec: 2
  });

  return {
    "pact:setup": () => {
      console.log("setup task running......");
      return new Promise(resolve => {
        provider.setup().then(() => {
          resolve(null);
        });
      });
    },
    "pact:shutdown": () => {
      console.log("shutdown task running......");
      return new Promise(resolve => {
        provider.finalize();
        resolve(null);
      });
    },
    "pact:addInteraction": interaction => {
      return new Promise(resolve => {
        provider.addInteraction(interaction);
        resolve(null);
      });
    }
  };
};

module.exports = pact_tasks;