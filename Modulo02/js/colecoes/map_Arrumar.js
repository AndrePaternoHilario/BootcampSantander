function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Adimin');
usuarios.set('Stephany', 'Adimin');
usuarios.set('Jorge', 'User');
usuarios.set('André', 'Adimin');

console.log(getAdmins(usuarios));