export class Alumnos {
    nombre: string;
    apellido: string;
    curso: string;
    nota: number;
    estado: string;

constructor(
    nombre: string,
    apellido: string,
    curso: string,
    nota: number,
    estado: string, 
)
{
  this.nombre = nombre;
  this.apellido = apellido;
  this.curso = curso;
  this.nota= nota;
  this.estado = estado;
}
}