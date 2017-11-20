'use strict';

const { resolve } = require('path');
const { entries } = require('../package.json');

// npm start -- 2
const { argv } = require('yargs')
  .option('env', {
    default: 1,
    type: 'number',
    describe: 'entry number',
  })
  .help();

// base path
const BASE_PATH = process.cwd();
const SRC_PATH = resolve(BASE_PATH, 'src/js');
const PUBLIC_PATH = resolve(BASE_PATH, 'public');
const PORT = 7777;
const entryStartN = argv.env || 1;
const ENTRY = resolve(SRC_PATH, entries[parseInt(entryStartN) - 1]);


module.exports = {
  BASE_PATH,
  SRC_PATH,
  PUBLIC_PATH,
  ENTRY,
  PORT,
}