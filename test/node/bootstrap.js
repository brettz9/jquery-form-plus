'use strict';

const {readFileSync} = require('fs');
const {join} = require('path');

const jsdom = require('jsdom');

const htmlString = readFileSync(join(__dirname, '../test.html'), 'utf8');

const jqueryForm = require('../../src/jquery.form.js');

const {JSDOM} = jsdom;
const {window} = new JSDOM(htmlString);

global.$ = jqueryForm(window);
