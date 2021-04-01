const { JSDOM } = require('jsdom');

const { window } = new JSDOM(``);

const { document } = window;

console.time();
for (let i = 0; i <= 1e4; i++) {
  document.xxx = i;
}
console.timeEnd();
