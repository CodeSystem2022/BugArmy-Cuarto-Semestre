let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if (i ===3){ 
    clearInterval(intervalo); 
}
i++;
}, 1000);

setImmediate(() => {
    console.log(`Saludo inmediato`);
});

console.log(__filename);

global.miVariable = `mi variable global`;
console.log(miVariable);
