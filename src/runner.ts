import { DetectOptions, run, Runner, UnsupportedCommand } from '@antfu/ni';

export const runCli = async (
  fn: Runner,
  args: string[] = [],
  options: DetectOptions = {},
) => {
  try {
    await run(fn, args, options);
  } catch (error) {
    if (error instanceof UnsupportedCommand && !options.programmatic)
      console.error(error.message);

    if (!options.programmatic) process.exit(1);

    throw error;
  }
};
