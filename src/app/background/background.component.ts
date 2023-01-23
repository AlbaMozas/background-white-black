import { Component } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  myBakground = 'white';
  myColor = 'grey'; //aqui se puede cambiar a blanco 
  

clicBackroundClaro() {
  let btnBackground = document.querySelector(".change");
  if(this.myBakground === 'grey'){
    this.myBakground = 'white';
    this.myColor = 'grey';
    btnBackground!.textContent = 'claro';
  }else{
    this.myBakground = 'grey';
    this.myColor = 'white';
    btnBackground!.textContent = 'oscuro';

  }  
}
// clicBackroundOscuro() {
//   let btnBackground = document.querySelector(".change");
//   if(this.myBakground === 'grey'){
//     this.myBakground = 'white';
//     this.myColor = 'grey';
//     btnBackground!.textContent = 'claro';
//   }else{
//     this.myBakground = 'white';
//     this.myColor = 'white';
//     btnBackground!.textContent = 'oscuro';

//   }  
// }
}


