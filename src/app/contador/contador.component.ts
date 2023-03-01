import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  conteo: number = 0
  error: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  validarContador(){
    return !isNaN(this.conteo) 
  }

  aumentarContador(){
    if (this.validarContador()){
      this.conteo = Number(this.conteo) + 1
      this.error = false
    } else{
      this.error = true
    }
  }
  disminuirContador(){
    if (this.validarContador()){
      this.conteo = Number(this.conteo) - 1
      this.error = false
    } else{
      this.error = true
    }
  }
}
