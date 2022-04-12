#!/usr/bin/env node
import { rule, getRound } from '../src/games/calc.js';
import game from '../src/index.js';

game(rule, getRound);
