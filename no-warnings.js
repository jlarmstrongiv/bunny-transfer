#!/usr/bin/env node

// avoid warnings
// - https://stackoverflow.com/a/56095929
// - https://github.com/nodejs/node/issues/10802#issuecomment-491560449
// disable only experimental warnings
// - https://github.com/nodejs/node/issues/30810#issuecomment-2143449179
// - https://github.com/vadimdemedes/ink/issues/234#issuecomment-536325031

import path from "path";
import spawn from "cross-spawn";

const command = await spawn(
  "node",
  [
    "--disable-warning=ExperimentalWarning",
    path.resolve(import.meta.dirname, "cli.js"),
    ...process.argv.slice(2),
  ],
  {
    // shell
    // - https://2ality.com/2022/07/nodejs-child-process.html#parameter%3A-options
    // - https://stackoverflow.com/a/44987029
    shell: true,
    // stdio
    // - https://nodejs.org/api/child_process.html#optionsstdio
    // - https://stackoverflow.com/questions/50045741/difference-between-inherit-and-process-pipe-child
    stdio: "inherit",
    // hide warnings with NODE_ENV=production https://github.com/vadimdemedes/ink/issues/234#issuecomment-536325031
    // set env with spawn https://stackoverflow.com/a/27716861
    env: { ...process.env, NODE_ENV: "production" },
  }
);
// exit code https://stackoverflow.com/a/36960213
command.once("exit", (code) => {
  process.exitCode = code;
});
