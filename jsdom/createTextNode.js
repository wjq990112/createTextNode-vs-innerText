const { JSDOM } = require('jsdom');

const { window } = new JSDOM(`
  <div id="root"></div>
`);

const { document } = window;

const root = document.getElementById('root');

console.time();
for (let i = 0; i <= 1e4; i++) {
  const text = document.createTextNode(i);
  root.append(text);
  console.log(root.textContent);
}
console.timeEnd();
