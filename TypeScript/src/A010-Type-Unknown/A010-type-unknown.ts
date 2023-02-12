// Mesma coisa que o Any, só que mais seguro
// Na hierarquia de tipos, ele é o pai de todos os outros
let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);

// Module mode
export default 1;
