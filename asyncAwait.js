async function hola(nombre) { 
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}
async function hablar(nombre) {
    return new Promise((resolve, reject) => { 
        setTimeout(function () {
            console.log('bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}
async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adiós ' + nombre); 
            resolve();
        }, 1000);
    });
}
async function main() {
    let nombre = await hola('Ariel');
    await hablar();
    //sin el await se manejan en segundo plano
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...');

}
main();
function sayHello(name) {
    return new Promise((resolve, reject) => { 
        setTimeout(function () {
            console.log('Hello ' + name);
            resolve(name);
        }, 1000);
    });
}
function talk(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla');
            resolve(name);
        }, 1000);
    });
}
function sayBye(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Goodbye ' + name);
            resolve(name);
        }, 1000);
    });
}
async function conversation(name) {
    console.log('Code in Eenglish');
    console.log('Starting async process...');
    await sayHello(name);
    await talk();
    await talk();
    await talk();
    await sayBye(name);
    console.log('Process completed')

}
conversation('Ariel');