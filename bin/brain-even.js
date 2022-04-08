#!/usr/bin/env node
import { getRule, getQuestionAndCalc } from '../src/games/even.js';
import game from '../src/index.js';

game(getRule, getQuestionAndCalc);
