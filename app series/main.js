import { Serie } from './Serie';
import { Categoria } from './Categoria';
import { Actor } from './Actor';
import { Director } from './Director';
import { Episodio } from './Episodio';
import { Plataforma } from './Plataforma';
// Funciones para crear nuevas instancias
function crearNuevaSerie(titulo, imagen) {
    return new Serie(titulo, imagen);
}
function crearNuevaCategoria(nombre) {
    return new Categoria(nombre);
}
function crearNuevoActor(nombre, foto, descripcion) {
    return new Actor(nombre, foto, descripcion);
}
function crearNuevoDirector(nombre, foto, descripcion) {
    return new Director(nombre, foto, descripcion);
}
// agregar elementos
function agregarCategoriaASerie(serie, categoria) {
    serie.agregarCategoria(categoria);
}
function agregarActorASerie(serie, actor) {
    serie.agregarActor(actor);
}
function agregarDirectorASerie(serie, director) {
    serie.agregarDirector(director);
}
function agregarEpisodioASerie(serie, episodio) {
    serie.agregarEpisodio(episodio);
}
function agregarPlataformaASerie(serie, plataforma) {
    serie.agregarPlataforma(plataforma);
}
// ejemplo 
const serie1 = crearNuevaSerie("Breaking Bad", "breaking_bad.jpg");
const serie2 = crearNuevaSerie("Game of Thrones", "game_of_thrones.jpg");
const categoria1 = crearNuevaCategoria("Drama");
const categoria2 = crearNuevaCategoria("Fantasía");
const actor1 = crearNuevoActor("Bryan Cranston", "bryan_cranston.jpg", "Actor de cine y televisión");
const actor2 = crearNuevoActor("Peter Dinklage", "peter_dinklage.jpg", "Actor de cine y televisión");
const director1 = crearNuevoDirector("Vince Gilligan", "vince_gilligan.jpg", "Director y guionista");
const director2 = crearNuevoDirector("David Benioff", "david_benioff.jpg", "Escritor y productor");
// Agregar elementos a las series
agregarCategoriaASerie(serie1, categoria1);
agregarCategoriaASerie(serie2, categoria1);
agregarCategoriaASerie(serie2, categoria2);
agregarActorASerie(serie1, actor1);
agregarActorASerie(serie2, actor2);
agregarDirectorASerie(serie1, director1);
agregarDirectorASerie(serie2, director2);
actor1.agregarSerieActuada(serie1);
director1.agregarSerieDirigida(serie1);
let episodio1 = new Episodio("Pilot", "El primer episodio de la serie", 60);
let episodio2 = new Episodio("Winter is Coming", "El primer episodio de la serie", 55);
let plataforma1 = new Plataforma("Netflix", "www.netflix.com");
let plataforma2 = new Plataforma("Prime Video", "www.primevideo.com");
agregarEpisodioASerie(serie1, episodio1);
agregarPlataformaASerie(serie1, plataforma1);
agregarEpisodioASerie(serie2, episodio2);
agregarPlataformaASerie(serie2, plataforma2);
// Listar todas las series
Serie.listarSeries([serie1, serie2]);
// Mostrar detalle de una serie
serie2.mostrarDetalle();
// Mostrar detalle de un actor
actor1.mostrarDetalle();
