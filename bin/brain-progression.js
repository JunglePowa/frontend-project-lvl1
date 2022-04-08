#!/usr/bin/env node
import { getRule, getQuestionAndCalc } from '../src/games/progression.js';
import game from '../src/index.js';

// start game find number in progression
game(getRule, getQuestionAndCalc);
