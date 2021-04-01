const { JSDOM } = require('jsdom');

const { window } = new JSDOM(`
  <div id="root"></div>
`);

const { document } = window;

const root = document.getElementById('root');

console.time();
for (let i = 0; i <= 1e4; i++) {
  root.innerText += i;
}
console.timeEnd();
