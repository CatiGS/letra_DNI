/*
- Crear un carpeta para este proyecto
- Instalar el sistema GIT en este proyecto
- Al terminar el proyecto subirlo a GitHub

TAREA

- Coger la idea del DNI de la policia
- Pasarlo a funciones
*/

/**
 * POLICIA saber la letra de tu dni
 */

// Base de datos
// Array


const LETRAS_DNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

function leerDNI() {
    return prompt("No sabes tu letra de DNI? Escribe aquí tus números. Escribe 'salir' para terminar ")
}

function calcularLetraDNI(dni) {
    // bucle
    while (dni != 'salir') {

        // resultado de la letra
        const resto = dni % 23
        let result = ''
            // que tipo de datos permitimos o no
        switch (true) {
            case dni < 0:
            case dni.length != 8:
            case dni == '':
            case isNaN(dni):
                result = 'ERROR entrada incorrecta !!!'
                break
            case dni === 'salir':
                result = 'Saliendo del programa ....'
                break
            default:
                alert(resto)
                result = `DNI: ${dni}-${LETRAS_DNI[resto]}`
                break
        }
        alert(result)
        if (dni !== 'salir')
            dni = leerDNI()

    }
}
// preguntar al usuario, los números de su dni
let numeroDNI = leerDNI()
calcularLetraDNI(numeroDNI)