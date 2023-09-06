import { Component, OnInit } from '@angular/core';
import { ICarte } from 'src/model/Carte';


import { CartaService } from 'src/services/data/carta.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  listaCarte: ICarte[] =[]
  clienteSelected:string='451232021'
  constructor(private cartaService: CartaService){}
  
  ngOnInit(): void {
    this.listaCarte = this.cartaService.getListaCarte(this.clienteSelected)
  }

  

}
