var nexe = require('nexe');

nexe.compile(
  {
    input: "./index.js",
    output: "./findEvents.exe",
    target: 'windows-x86-19044.1706',
    nodeVersion: "18.0.0",
    flags: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    }
  }
);


