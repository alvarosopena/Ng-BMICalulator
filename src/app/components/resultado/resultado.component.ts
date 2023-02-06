import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})

export class ResultadoComponent {
  bmi : number;
  resultado: string;
  interpretacion: string;

  constructor(private route : ActivatedRoute){
    this.resultado="";
    this.interpretacion="";
    this.bmi = +route.snapshot.paramMap.get('valor')!;
}

    getResultado(){
      if(this.bmi >=25){
        this.resultado = "Exceso de peso";
        this.interpretacion ="Estas gordo"
      } else if (this.bmi >=18.5){
        this.resultado = "Ok";
        this.interpretacion ="Estas Ok";
      } else {
        this.resultado = "Flaco";
        this.interpretacion ="Estas flaco";
      }
  }

  ngOnInit(): void {
    this.getResultado();
  }
  
}


