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

  it('should be tested', () => {
    run();

    expect(runCli).toBeCalledWith(parseNi, { args: [] });
  });

  it('should be tested', () => {
    run('install');

    expect(runCli).toBeCalledWith(parseNi, { args: [] });
  });

  it('should be tested', () => {
    run('install', ['@kyushun/ni']);

    expect(runCli).toBeCalledWith(parseNi, { args: ['@kyushun/ni'] });
  });

  it('should be tested', () => {
    run('add', ['@kyushun/ni']);

    expect(runCli).toBeCalledWith(parseNi, { args: ['@kyushun/ni'] });
  });

  it('should be tested', () => {
    run('remove', ['@kyushun/ni']);

    expect(runCli).toBeCalledWith(parseNun, { args: ['@kyushun/ni'] });
  });

  it('should be tested', () => {
    run('uninstall', ['@kyushun/ni']);

    expect(runCli).toBeCalledWith(parseNun, { args: ['@kyushun/ni'] });
  });

  it('should be tested', () => {
    run('exec', ['@kyushun/ni']);

    expect(runCli).toBeCalledWith(parseNa, { args: ['@kyushun/ni'] });
  });
  it('should be tested', () => {
    run('dlx', ['@kyushun/ni']);

    expect(runCli).toBeCalledWith(parseNlx, { args: ['@kyushun/ni'] });
  });

  it('should be tested', () => {
    run('upgrade', ['@kyushun/ni']);

    expect(runCli).toBeCalledWith(parseNu, { args: ['@kyushun/ni'] });
  });

  it('should be tested', () => {
    run('update', ['@kyushun/ni']);

    expect(runCli).toBeCalledWith(parseNu, { args: ['@kyushun/ni'] });
  });

  it('should be tested', () => {
    run('run', ['test', 'src/runner.test.ts']);

    expect(runCli).toBeCalledWith(parseNr, {
      args: ['test', 'src/runner.test.ts'],
    });
  });

  it('should be tested', () => {
    run('test', ['src/runner.test.ts']);

    expect(runCli).toBeCalledWith(parseNr, {
      args: ['test', 'src/runner.test.ts'],
    });
  });
});
