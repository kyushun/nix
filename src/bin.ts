import { parseNi, parseNlx, parseNr, parseNun, runCli } from '@antfu/ni';

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
  case 'exec':
    runCli(parseNlx, { args });
    break;
  case 'upgrade':
  case 'update':
    runCli(parseNlx, { args });
    break;
  case 'run':
  default:
    runCli(parseNr, { args: command === 'run' ? args : [command, ...args] });
    break;
}
