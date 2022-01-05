const { leerInput } = require("./helpers/inquirer");

const main = async() => {

    const text = await leerInput('Escriba su Texto: ');
    console.log(text);
}

main();