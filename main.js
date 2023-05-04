const rl = require('readline');

const readline = rl.createInterface({ input: process.stdin });
const promtMessage = 'Ingrese distancia(m) y pendiente(%):';
const logBook = [];

readline.on('line', (line) => {
  const [xDistance, slope] = line.trim().split(' ');

  if (xDistance === 'book') {
    console.log('\n');
    logBook.forEach((log) => console.log(log));
    console.log('\n', promtMessage);
    return;
  }

  const yDistance = (xDistance * slope) / 100;
  const pvcLength =
    Math.round(Math.sqrt(xDistance ** 2 + yDistance ** 2) * 100) / 100;

  const log = `distancia: ${xDistance}m, i: ${slope}%, profundidad: ${yDistance}, LARGO PVC: ${pvcLength}m`;

  logBook.push(log);

  console.log(log);
  console.log(promtMessage);
});

console.log(promtMessage);
