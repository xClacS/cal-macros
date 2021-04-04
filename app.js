let peso, tmr, kcalActividad;

peso = window.prompt('Ingresa tu peso');

const actFisica = {
    sedentario: {
        name: 'Sedentario',
        valMin: 1.3,
        valMax: 1.6
    },
    ligero: {
        valMin: 1.5,
        valMax: 1.8
    },
    activo: {
        valMin: 1.7,
        valMax: 2.0
    },
    muyActivo: {
        valMin: 2.0,
        valMax: 2.2
    }
}
const objetivo = {
    deficit: {
        name: 'Deficit',
        valMin: 15,
        valMax: 30
    },
    superavit: {
        name: 'Superavit',
        valMin: 15,
        valMax: 30
    }
}

const obtenerTMR = (peso) => tmr = peso * 22;
obtenerTMR(peso);

console.log(`Tu tasa metabolica en reposo es de: ${tmr}`);
/* 
    Seleccionar actividad física 
*/
console.log(`Actividad física seleccionada: ${actFisica.sedentario.name} ${actFisica.sedentario.valMin} - ${actFisica.sedentario.valMax}`);

const obtenerKcalActividad = (tmr, actFisica) => kcalActividad = tmr * actFisica;
obtenerKcalActividad(tmr, actFisica.sedentario.valMin);

console.log(`Tus kcal según tu actividad física son: ${Math.round(kcalActividad)}`);

document.getElementById("result").innerHTML = `Tu peso: ${peso}`;
document.getElementById("tmr").innerHTML = `Tu tasa metabolica en reposo es de: ${tmr}`;
document.getElementById("kcalActividad").innerHTML = `Tus kcal según tu actividad física son: ${Math.round(kcalActividad)}`;


