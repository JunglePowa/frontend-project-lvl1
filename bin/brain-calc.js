#!/usr/bin/env node
import { getRule, getQuestionAndCalc } from '../src/games/calc.js';
import game from '../src/index.js';

game(getRule, getQuestionAndCalc);
