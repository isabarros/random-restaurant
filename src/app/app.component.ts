import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pick-restaurant';
  lunchButtonTitle = 'Almoço';
  dinnerButtonTitle = 'Jantar';
  coffeeButtonTitle = 'Café';
  iceCreamButtonTitle = 'Sorvete';
  listButtonTitle = 'Lista';
  lunchOptions = [
    'Reteteu',
    'Cozinhando Escondidinho',
    'Ca-Já',
    'Cobra',
    'Via Appia',
    'Seu Peu',
    'Vaporetto',
    'Entre amigos',
    'Bar do Neno',
    'Recanto Paraibano',
    'Carne de sol do cunha',
    'Meio do Mundo Jaqueira',
    'Mocó da Vila',
    'São Pedro Restaurante',
    'Vapor cozinha afetiva',
    'Altar cozinha ancestral'
  ];
  dinnerOptions = [
    'Coni Móvel',
    "Tokio's",
    'Temix',
    'Malaquias Forneria',
    'Açai Concept',
    'Casa do Pará',
    'Forneria 1121',
    'La Trattoria',
    'Buca Tratoria',
    'Bercy',
    'Anjo Solto',
    'Ca-Já',
    'Raiki',
    'Vila Foria',
    'Mafalda',
    'Maverick',
    'Rec Burguer',
    'BNQ',
    'Faaca'
  ];
  coffeeOptions = [
    'Na Venda',
    'Castigliani (Encanamento)',
    'Castigliani (Derby)',
    'Cordel',
    'Café Tão',
    'Orgânico 22',
    'Ernesto Café',
    'Graocheff',
    'Lala Café'
  ];
  iceCreamOptions = [
    'Bellucci',
    'Frisabor',
    "John's",
    'San Paolo',
    'Santo Doce',
    '50 Sabores'
  ];
  chosenOption = '';

  getRandomLunchOption() {
    const index = Math.floor(Math.random() * Math.floor(this.lunchOptions.length));
    this.chosenOption = this.lunchOptions[index];
  }

  getRandomDinnerOption() {
    const index = Math.floor(Math.random() * Math.floor(this.dinnerOptions.length));
    this.chosenOption = this.dinnerOptions[index];
  }

  getRandomCoffeeOption() {
    const index = Math.floor(Math.random() * Math.floor(this.coffeeOptions.length));
    this.chosenOption = this.coffeeOptions[index];
  }

  getRandomIceCreamOption() {
    const index = Math.floor(Math.random() * Math.floor(this.iceCreamOptions.length));
    this.chosenOption = this.iceCreamOptions[index];
  }

  listAll() {
    const allLunch = `Almoço: ${this.lunchOptions.join(', ')}\n\n\n`;
    const allDinner = `Jantar: ${this.dinnerOptions.join(', ')}\n\n\n`;
    const allCoffee = `Café: ${this.coffeeOptions.join(', ')}\n\n\n`;
    const allIceCream = `Sorvete: ${this.iceCreamOptions.join(', ')}`;
    
    this.chosenOption = `${allLunch}${allDinner}${allCoffee}${allIceCream}`;
  }
}
