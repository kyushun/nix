// src/runner.test.ts
import {
  parseNa,
  parseNi,
  parseNlx,
  parseNr,
  parseNu,
  parseNun,
  runCli,
} from '@antfu/ni';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { run } from './runner';

vi.mock('@antfu/ni');

describe('run()', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it.each([
    ['install', []],
    ['add', []],
    [undefined, []],
  ])(
    'should call runCli with parseNi for the command "%s"',
    (command, args) => {
      run(command, args);
      expect(runCli).toBeCalledWith(parseNi, { args });
    },
  );

  it.each([
    ['remove', ['@kyushun/ni']],
    ['uninstall', ['@kyushun/ni']],
  ])(
    'should call runCli with parseNun for the command "%s"',
    (command, args) => {
      run(command, args);
      expect(runCli).toBeCalledWith(parseNun, { args });
    },
  );

  it.each([
    ['upgrade', ['@kyushun/ni']],
    ['update', ['@kyushun/ni']],
  ])(
    'should call runCli with parseNu for the command "%s"',
    (command, args) => {
      run(command, args);
      expect(runCli).toBeCalledWith(parseNu, { args });
    },
  );

  it('should call runCli with parseNa for the command "exec"', () => {
    run('exec', ['@kyushun/ni']);
    expect(runCli).toBeCalledWith(parseNa, { args: ['@kyushun/ni'] });
  });

  it('should call runCli with parseNlx for the command "dlx"', () => {
    run('dlx', ['@kyushun/ni']);
    expect(runCli).toBeCalledWith(parseNlx, { args: ['@kyushun/ni'] });
  });

  it.each([
    ['run', ['test', 'src/runner.test.ts']],
    ['test', ['src/runner.test.ts']],
  ])(
    'should call runCli with parseNr for the command "%s"',
    (command, args) => {
      run(command, args);
      expect(runCli).toBeCalledWith(parseNr, {
        args: command === 'run' ? args : [command, ...args],
      });
    },
  );
});
