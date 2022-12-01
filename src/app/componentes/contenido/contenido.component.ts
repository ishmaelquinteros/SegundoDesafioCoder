import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/app/alumnos';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  estudiantes: Alumnos[] = [
    new Alumnos("Carlos","Acosta","Angular",8.756,"Cursando"),
    new Alumnos("Marcelo","Farias","Angular",6.786,"Cursando"),
    new Alumnos("Pablo","Harillo","Angular",7.678,"Cursando"),
    new Alumnos("Bruno","Regalado","Angular",4.786,"Cursando"),
    new Alumnos("Kevin","Palacios","Angular",3.344,"Abandono"),
    new Alumnos("Ruben","Lopez","JAVA",7.679,"Cursando"),
    new Alumnos("Javier","Cortez","JAVA",9.588,"Cursando"),
    new Alumnos("Alejo","Rosso","JAVA",4.679,"Cursando"),
    new Alumnos("Martin","Damasio","JAVA",6.863,"Cursando"),
    new Alumnos("Mariana","Qvevedo","JAVA",3.123,"Abandono"),
  ]

  constructor() { }

  ngOnInit(): void { 
  }

}
