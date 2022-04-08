#!/usr/bin/env node
import { getRule, getQuestionAndCalc } from '../src/games/prime.js';
import game from '../src/index.js';

game(getRule, getQuestionAndCalc);
