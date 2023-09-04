import {
  parseNa,
  parseNi,
  parseNlx,
  parseNr,
  parseNu,
  parseNun,
  runCli,
} from '@antfu/ni';
import c from 'kleur';

import { version } from '../package.json';

const command = process.argv[2];
const args = process.argv.slice(3).filter(Boolean);

switch (command) {
  case undefined:
  case 'install':
  case 'add':
    runCli(parseNi, { args: command && args });
    break;
  case 'ci':
    runCli(
      (agent, _, hasLock) => parseNi(agent, ['--frozen-if-present'], hasLock),
      { autoInstall: true },
    );
    break;
  case 'remove':
  case 'uninstall':
    runCli(parseNun, { args });
    break;
  case 'upgrade':
  case 'update':
    runCli(parseNu, { args });
    break;
  case 'exec':
    runCli(parseNa, { args });
    break;
  case 'dlx':
    runCli(parseNlx, { args });
    break;
  case 'run':
  default:
    if (command.toLowerCase() === '-v' && !args.length) {
      console.log(`nix        ${c.yellow(`v${version}`)}`);
    }

    runCli(parseNr, { args: command === 'run' ? args : [command, ...args] });
    break;
}
