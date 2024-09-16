const usuario = {
  nombre: 'Jorge',
  apellido: 'Martinez',
  edad: 22,
  direccion: {
    calle: 'El Minero',
    numero: 1368,
    ciudad: 'Coronel',
    pais: 'Chile'
  },
  contactos: {
    telefono: '12345934848',
    email: 'mrjorge_uwu@example.com',
    redesSociales: {
      instagram: '@mrjorgesingerman',
    }
  },
  intereses: ['Literatura', 'Ex-Cantante', 'Musica']
};

// 1. Extraer el nombre, el apellido y la ciudad en variables separadas
const { nombre, apellido, direccion: { ciudad } } = usuario;

// 2. Extraer el primer interés en una variable llamada "primerInteres"
const [primerInteres] = usuario.intereses;

// 3. Extraer el email y el instagram en variables separadas
const { email } = usuario.contactos;
const { instagram } = usuario.contactos.redesSociales;

// 4. Extraer la calle y el número de la dirección y renómbralos como "calleUsuario" y "numeroUsuario"
const { direccion: { calle: calleUsuario, numero: numeroUsuario } } = usuario;

// 5. Imprimir en consola todas las variables que extrajiste
console.log(nombre);            // Jorge
console.log(apellido);         // Martinez
console.log(ciudad);           // Coronel
console.log(primerInteres);    // Literatura
console.log(email);            // mrjorge_uwu@example.com
console.log(instagram);        // @mrjorgesingerman
console.log(calleUsuario);     // El Minero
console.log(numeroUsuario);    // 123
