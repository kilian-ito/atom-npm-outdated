'use babel';

import {exec} from 'child_process';

module.exports = (packages, cwd, cb) => {
  const cmd = `npm i ${packages.join(' ')}`;
  const npmProcess = exec(cmd, {cwd: cwd});

  npmProcess.on('exit', (code) => cb && cb(code))
}
