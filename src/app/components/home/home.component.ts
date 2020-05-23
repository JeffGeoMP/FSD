import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { isNullOrUndefined } from 'util';
import { Subscriber } from 'rxjs';
import { AnalisisService } from "../../services/analisis.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Variables para Archivos
  FFile1 :File;
  FFile2 : File;
  File1: string = "";
  File2: string = "";
  Nombre1: string = "No se a Cargado Archivo";
  Nombre2: string = "No se a Cargado Archivo";

  //Variable para IF
  VerArchivos:Boolean = true;
  VerResultados:Boolean = false;
  constructor(public Analize:AnalisisService) { }

  ngOnInit(): void {
  }

  Comparar() {
    if(this.File1.length>0 && this.File2.length>0){
      this.Analize.Compare(this.File1, this.File2).subscribe(res=>{
        console.log(res);
      });
    }
  }

   Subir1() {
    if(!isNullOrUndefined(this.FFile1)){
      const reader = new FileReader();
      reader.onload = (e)=>{
        const Contenido = reader.result.toString().trim();
        this.File1 = Contenido;
      }
      reader.readAsText(this.FFile1,"UTF-8");
    }
      }

  Subir2() {
    if(!isNullOrUndefined(this.FFile2)){
      const reader = new FileReader();
      reader.onload = (e)=>{
        const Contenido = reader.result.toString().trim();
        this.File2 = Contenido;
      }
      reader.readAsText(this.FFile2,"UTF-8");
    }
  }

  NewFile1(e) {
    this.FFile1 = e.target.files[0];
    this.Nombre1 = this.FFile1.name;
  }

  NewFile2(e) {
    this.FFile2 = e.target.files[0];
    this.Nombre2 = this.FFile2.name;
  }

  Resultados(){
    this.VerArchivos = false;
    this.VerResultados = true;
  }
  Archivos(){
    this.VerArchivos = true;
    this.VerResultados = false;
  }
}
