#!/usr/bin/env node
import { rule, questionAndCalc } from '../src/games/progression.js';
import game from '../src/index.js';

// start game find number in progression
game(rule, questionAndCalc);
