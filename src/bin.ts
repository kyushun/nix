import { parseNi, parseNlx, parseNr, parseNun } from '@antfu/ni';

import { runCli } from './runner';

const command = process.argv[2];
const args = process.argv.slice(3).filter(Boolean);

switch (command) {
  case undefined:
  case 'install':
  case 'add':
    runCli(parseNi, command && args);
    break;
  case 'ci':
    runCli(
      (agent, _, hasLock) => parseNi(agent, ['--frozen-if-present'], hasLock),
      undefined,
      { autoInstall: true },
    );
    break;
  case 'remove':
  case 'uninstall':
    runCli(parseNun, args);
    break;
  case 'exec':
    runCli(parseNlx, args);
    break;
  case 'upgrade':
  case 'update':
    runCli(parseNlx, args);
    break;
  case 'run':
  default:
    runCli(parseNr, command === 'run' ? args : [command, ...args]);
    break;
}
