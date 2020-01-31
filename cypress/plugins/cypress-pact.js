const path = require("path")
const { Pact } = require('@pact-foundation/pact')

const pact_tasks = pact_port => {
  const provider = new Pact({
    consumer: "web page",
    provider: "backend",
    port: pact_port,
    log: path.resolve(process.cwd(), "logs", "pact.log"),
    dir: path.resolve(process.cwd(), "pacts"),
    logLevel: "WARN",
    pactfileWriteMode: 'update',
    spec: 2
  });

  return {
    "pact:setup": () => {
      console.log("setup task running......");
      return provider.setup();
    },
    "pact:shutdown": () => {
      console.log("shutdown task running......");
      return new Promise(resolve => {
        provider.finalize().then( () => resolve(null));
      })
    },
    "pact:clear": () => {
      return provider.removeInteractions();
    },
    "pact:addInteraction": interaction => {
      return provider.addInteraction(interaction);
    }
  };
};

module.exports = pact_tasks;