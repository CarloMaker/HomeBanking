import { Injectable } from '@angular/core';
import { ICarte } from 'src/model/Carte';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  lista : ICarte[] = [
    {numCarta : "0121 2332 5479 1652",intestatario :"451232021", scadenza: new Date("2024-01-06") , circuito :"VISA" , imagePath :'' ,nomeIntestatario :"Mario Rossi" },
    {numCarta : "5850 5421 5479 3652",intestatario :"451232021", scadenza: new Date("2024-02-03") , circuito :"VISA" , imagePath :'' ,nomeIntestatario :"Mario Rossi" },
    {numCarta : "0121 6521 5479 5652",intestatario :"451232021", scadenza: new Date("2024-03-06") , circuito :"VISA" , imagePath :''  ,nomeIntestatario :"Mario Rossi" },
    {numCarta : "0121 5223 5479 6652",intestatario :"451232021", scadenza: new Date("2024-01-13") , circuito :"MASTERCARD" , imagePath :''  ,nomeIntestatario :"Mario Rossi" },
    {numCarta : "2545 7410 5479 8652",intestatario :"451232021", scadenza: new Date("2024-06-19") , circuito :"VISA" , imagePath :''  ,nomeIntestatario :"Mario Rossi" },
    {numCarta : "6328 2332 5479 6652",intestatario :"451232021", scadenza: new Date("2024-09-13") , circuito :"VISA" , imagePath :''  ,nomeIntestatario :"Mario Rossi" },
    {numCarta : "1598 2332 5479 0652",intestatario :"451232021", scadenza: new Date("2024-03-10") , circuito :"MASTERCARD" , imagePath :''  ,nomeIntestatario :"Mario Rossi" },
  ] 

  constructor() {

   }

 

   getListaCarte(idcliente : string) : ICarte[] {
     var result = this.lista.filter(obj => {
        return obj.intestatario === idcliente
      })
      return result;
   }


}
