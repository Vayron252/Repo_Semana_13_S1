const elementoContainer = document.getElementById('app');
const btnMostrar = document.getElementById('btnMostrar');
const contenedorCombos = document.querySelector('.combos');
let obj;

const leerUsuarios = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

const crearCombo = async (objeto) => {
    let campos = Object.keys(objeto);
    if (campos.length > 0) {
        obj = objeto;

        const template = '<select class="form-select" onchange="obtenerValorCombo(this)"><option value="0">-- Seleccione --</option>' + campos.map(valor => {
            return `<option value='${valor}'>${valor}</option>`;
        }).join('') + '</select>';
        contenedorCombos.children[Array.from(contenedorCombos.children).length - 1].innerHTML = template;
        contenedorCombos.appendChild(document.createElement('div'));
    }
}

async function obtenerValorCombo(valorDinamico) {
    if (valorDinamico.value == '0') {
        return;
    }
    const {[valorDinamico.value]: valor} = obj;
    if (typeof valor === 'string') {
        return;
    }
    crearCombo(valor);
}

const inicializarPage = async () => {
    const usuarios = await leerUsuarios();
    crearCombo(usuarios[0]);
};

inicializarPage();

// const readUsersWithAsync = async () => {
//     // const elementoContainer = document.getElementById('app');
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
  
    // let template = '';
    // let elementP;
    // data.forEach((person) => {
    //     elementP = document.createElement('p');
    //     elementP.textContent = `${person.company.name}`;
    //     // console.log(person.company);
    //     // template += `<p>${person.company.name}</p>`;
    //     elementoContainer.appendChild(elementP);
    // });
    // elementoContainer.innerHTML = template;

    // const template = data.map(person => {
    //     return `<p>${person.company.name}</p>`
    // }).join('');
    // // console.log(template);
    // elementoContainer.innerHTML = template;
// };
  
// readUsersWithAsync();

// const elementoContainer = document.getElementById('app');
// const combo = document.getElementById('cboCampo');
// const btnMostrar = document.getElementById('btnMostrar');
// const contenedorCombos = document.querySelector('.combos');

// const leerUsuarios = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     return data;
// }

// const crearComboDinamico = async (valorDinamico) => {
//     const usuarios = await leerUsuarios();
//     const {[valorDinamico]: valor} = usuarios[0];
//     contenedorCombos.innerHTML = '';
//     if (typeof valor === 'string') {
//         return;
//     }
//     let campos = Object.keys(valor);
//     if (campos.length > 0) {
//         const template = '<select class="form-select mt-2">' + campos.map(valor => {
//             return `<option value='${valor}'>${valor}</option>`;
//         }).join('') + '</select>';
//         contenedorCombos.innerHTML = template;
//     }
// }

// // crearComboDinamico('address');

// const llenarComboCampos = async () => {
//     const usuarios = await leerUsuarios();
//     let campos = Object.keys(usuarios[0]);
//     // let contador = -1;
//     const template = campos.map(valor => {
//         // contador += 1;
//         return `<option value='${valor}'>${valor}</option>`;
//     }).join('');
//     combo.innerHTML = template;
// }

// llenarComboCampos();

// const mostrarCampos = async (valorDinamico, mc) => {
//     let valorMC;
//     if (mc) {
//         valorMC = contenedorCombos.firstChild.value;
//     }
//     const usuarios = await leerUsuarios();
//     // let template = '';
//     // for (let i = 0; i < usuarios.length; i++) {
//     //     let arregloNew = Object.entries(usuarios[i]);
//     //     for (let j = 0; j < arregloNew.length; j++) {
//     //         if (j == posicion) {
//     //             template += `<p class='m-0'>${arregloNew[j][1]}</p>`;
//     //         }
//     //     }
//     // }
//     // elementoContainer.innerHTML = template;
//     const template = usuarios.map(usuario => {
//         const {[valorDinamico]: valor} = usuario;
//         // console.log(JSON.stringify(valor));
//         // console.log(obtenerValor(valor, 'street'));
//         if (mc) {
//             return `<p class='m-0'>${obtenerValor(valor, valorMC)}</p>`;
//         } else {
//             return `<p class='m-0'>${valor}</p>`;
//         }
//     }).join('');
//     elementoContainer.innerHTML = template;
// }

// const obtenerValor = (objeto, valorDinamico) => {
//     const {[valorDinamico]: valor} = objeto;
//     return valor;
// }

// // mostrarCampos('address');

// btnMostrar.addEventListener('click', () => {
//     if (Array.from(contenedorCombos.children).length > 0) {
//         mostrarCampos(combo.value, true);
//     } else {
//         mostrarCampos(combo.value, false);
//     }
// });

// combo.addEventListener('change', (e) => {
//     crearComboDinamico(e.target.value);
// });