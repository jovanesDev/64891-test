// import React from "react";

const usuarios = [
  {
    nombre: "Juan",
    apellido: "Garcia",
    email: "juan@example.com",
    emailVerified: true,
  },
  {
    nombre: "María",
    apellido: "López",
    email: "maria@example.com",
    emailVerified: false,
  },
  {
    nombre: "Pedro",
    apellido: "Martínez",
    email: "pedro@example.com",
    emailVerified: true,
  },
  {
    nombre: "Laura",
    apellido: "Rodríguez",
    email: "laura@example.com",
    emailVerified: false,
  },
  {
    nombre: "Alejandro",
    apellido: "Fernández",
    email: "alejandro@example.com",
    emailVerified: true,
  },
  {
    nombre: "Ana",
    apellido: "Pérez",
    email: "ana@example.com",
    emailVerified: false,
  },
  {
    nombre: "David",
    apellido: "Gómez",
    email: "david@example.com",
    emailVerified: true,
  },
  {
    nombre: "Sofía",
    apellido: "Díaz",
    email: "sofia@example.com",
    emailVerified: false,
  },
  {
    nombre: "Carlos",
    apellido: "Ruiz",
    email: "carlos@example.com",
    emailVerified: true,
  },
  {
    nombre: "Elena",
    apellido: "Sánchez",
    email: "elena@example.com",
    emailVerified: false,
  },
];


const PracticaJs = () => {

  let objeto = {

  }

  objeto["nombre"] = "Lionel"
  objeto["apellido"] = "Messi"
  objeto['edad'] = 35;

  console.log(objeto,"Objeto")

  let userVerificado = usuarios.filter((user) => user.nombre === 'Elena')
  let usuariosModificados = usuarios.map((user) => ({ nombre:user.nombre,apellido:user.apellido}))
  let userFind = usuarios.find((user) => user.nombre === "Hova")
  let userSome = usuarios.some((user) => user.emailVerified)

  let userReduce = usuarios.reduce((acc,curr) => {
    acc[curr.nombre] = curr.nombre
    return acc
  },{})

  console.log(userReduce)

  return (
    <div></div>
  )
};

export default PracticaJs; 

// map => new Array !  OK 
// forEach => el array 
// filter => un nuevo array OK!
// find => el tipo de dato que busco || undefiend OK ! ,
// reduce => me duevuelve un nuevo tipo de dato ! 
// some => un booleano OK 
// every => un booleano OK 
// indexOf => el index ! OK 



