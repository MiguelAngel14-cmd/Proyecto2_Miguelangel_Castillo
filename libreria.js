let librosColeccion=[{
 "Nombre" : "El principito",
 "Cant" : 120,
 "Autor" : "Antoine de Saint-Exupéry",
 "Generos" : ["Literatura infantil,", "Fabula,", "Ficcion especulativa"],
 "Disponibilidad" : true,
},{
 "Nombre" : "100 años de soledad",
 "Cant" : 496,
 "Autor" : "Gabriel García Márquez",
 "Generos" : ["Realismo mágico,", "Ficcion,", "Alta fantasia"],
 "Disponibilidad" : false,
}]

function genero(librosColeccion){
    let gr= " ";
    for (let index=0; index<librosColeccion.Generos.length; index++){
        gr = gr + librosColeccion.Generos[index] + " ";
    }
    return gr;
}
function informacionLibro(librosColeccion){
    if (librosColeccion.Disponibilidad == true){
        return ("El libro " + librosColeccion.Nombre + " tiene " + librosColeccion.Cant + " paginas, fue escrito por " +
librosColeccion.Autor + " y es del genero " + genero(librosColeccion) + " y esta disponible")
    }else{
        return ("El libro " + librosColeccion.Nombre + " tiene " + librosColeccion.Cant + " paginas, fue escrito por " +
librosColeccion.Autor + " y es del genero " + genero(librosColeccion) + " y no esta disponible")
    }
}



function imprimirLibros (Nuevolibro){
    let mensaje = Nuevolibro.Nombre;
    return mensaje;
}

    let Nuevolibro= {
    "Nombre" : "El ingenioso caballero Don Quijote de la Mancha",
    "Cant" : "352",
    "Autor" : "Miguel de Cervantes",
    "Generos" : ["Parodia" , "Satira" , "Novela Psicologica"],
    "Disponibilidad" : true, 
    }

   

function agregar(Nuevolibro){
return librosColeccion.push(Nuevolibro);
}

agregar(Nuevolibro);

for(index=0 ; index<librosColeccion.length; index++){
    if(librosColeccion[index].Disponibilidad == true){
    console.log(imprimirLibros(librosColeccion[index])); //Imprimir nombres objetos
}
}

for (let index = 0; index < librosColeccion.length; index++) {
    console.log (informacionLibro(librosColeccion[index]));
    console.log(" ");
}
