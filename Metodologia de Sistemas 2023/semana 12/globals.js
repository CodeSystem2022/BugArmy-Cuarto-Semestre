let i = 0;
let waitTimer = setInterval(() => {
    console.log('Hello');
    if (i === 3) {
        clearInterval(waitTimer);
    }
    i++;   
}, 1000);

setImmediate(() => {
    console.log('immediate');
});

console.log(__filename);

global.gVar;
global.gVar = 'global Variable';
console.log(gVar);