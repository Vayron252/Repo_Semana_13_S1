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

const elementoContainer = document.getElementById('app');
const combo = document.getElementById('cboCampo');
const btnMostrar = document.getElementById('btnMostrar');

const LeerUsuarios = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
}

const LLenarComboCampos = async () => {
    const usuarios = await LeerUsuarios();
    let campos = Object.keys(usuarios[0]);
    let contador = -1;
    const template = campos.map(valor => {
        contador += 1;
        return `<option value='${contador}'>${valor}</option>`;
    }).join('');
    combo.innerHTML = template;
}

LLenarComboCampos();

const MostrarCampos = async (posicion) => {
    const usuarios = await LeerUsuarios();
    let template = '';
    for (let i = 0; i < usuarios.length; i++) {
        let arregloNew = Object.entries(usuarios[i]);
        for (let j = 0; j < arregloNew.length; j++) {
            if (j == posicion) {
                template += `<p>${arregloNew[j][1]}</p>`;
            }
        }
    }
    elementoContainer.innerHTML = template;
}

btnMostrar.addEventListener('click', () => {
    MostrarCampos(combo.value);
});