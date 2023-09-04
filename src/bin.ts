import { run } from './runner';

const command = process.argv[2];
const args = process.argv.slice(3).filter(Boolean);

run(command, args);
