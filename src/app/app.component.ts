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
    { name: 'Reteteu - Comida Honesta', url: 'https://g.page/reteteucomidahonesta?share' },
    { name: 'Cozinhando Escondidinho', url: 'https://goo.gl/maps/2EBaJpFWKiiadJqE8' },
    { name: 'Cá-Já Restaurante', url: 'https://goo.gl/maps/b77RqW7rsyZXm4eL9' },
    { name: 'Cobra Restaurante', url: 'https://goo.gl/maps/uKLaVRqDz7mXAWkU8' },
    { name: 'Via Appia', url: 'https://goo.gl/maps/KRiJHNK6UgmAfwPKA' },
    { name: 'Seu Pêu Gastropub', url: 'https://goo.gl/maps/MjMZHBcKUzPEjEBx8' },
    { name: 'Vaporetto Container Bar', url: 'https://goo.gl/maps/xWhiXzDxqPQ2kRaL6' },
    { name: 'Entre Amigos O Bode Espinheiro', url: 'https://goo.gl/maps/K4pkFVyGa646zgsXA' },
    { name: 'Bar do Neno e Lula', url: 'https://goo.gl/maps/qVPHa4PRhzGEBvDR8' },
    { name: 'Recanto Paraibano', url: 'https://goo.gl/maps/n3DQRFkCPspyDNvw9' },
    { name: 'Carne de Sol do Cunha', url: 'https://g.page/CarnedeSoldoCunha?share' },
    { name: 'Meio do Mundo Jaqueira', url: 'https://goo.gl/maps/GKDGPQX7shHqzRR16' },
    { name: 'Mocó da Villa Bistro', url: 'https://g.page/MocodaVilla?share' },
    { name: 'São Pedro Restaurante', url: 'https://goo.gl/maps/PLNKKQEEmKvJudFS8' },
    { name: 'Vapor - Cozinha Afetiva', url: 'https://g.page/vaporcozinhaafetiva?share' },
    { name: 'Altar, Cozinha Ancestral', url: 'https://goo.gl/maps/K1yYXwMdHv2wsNmj7' }
  ];
  dinnerOptions = [
    { name: 'Coni Móvel', url: 'https://goo.gl/maps/f9cPMrYeUs8Dw7oH9'},
    { name: "Tokyo's Café", url: 'https://goo.gl/maps/uXznnhBYt13kpjpZA'},
    { name: 'Temix Japa Food', url: 'https://goo.gl/maps/uAtthaeNfaeYkwdQA'},
    { name: 'Malaquias Forneria', url: 'https://goo.gl/maps/2LVCCYuQAmgjK3Uo6'},
    { name: 'Açai Concept', url: 'https://goo.gl/maps/UNjaA1ZVNEnfk6w38'},
    { name: 'Casa do Pará', url: 'https://goo.gl/maps/4MhMxV6aX2aPLSYy8'},
    { name: 'Forneria 1121', url: 'https://goo.gl/maps/kakVjCTppSps3Ew49'},
    { name: 'La Trattoria', url: 'https://goo.gl/maps/y73U8CN8Zxve5kta6' },
    { name: 'Buca Tratoria', url: 'https://goo.gl/maps/wyg5nHppGMw2Y4gn7' },
    { name: 'Bercy Village - Crepes e Saladas', url: 'https://goo.gl/maps/JhRD4Nt8KxdfBB8c8' },
    { name: 'Anjo Solto Zona Norte', url: 'https://goo.gl/maps/6nijYgP61aVyrDEP6' },
    { name: 'Cá-Já Restaurante', url: 'https://goo.gl/maps/b77RqW7rsyZXm4eL9' },
    { name: 'Raiki', url: '' },
    { name: 'VilLa Foria', url: 'https://goo.gl/maps/GdpwgCquJz6Pnngm8' },
    { name: 'Mafalda Hamburgueria Artesanal', url: 'https://goo.gl/maps/Crt215QNbRcHL8NV7'},
    { name: 'Maverick Dinner Food Truck', url: 'https://goo.gl/maps/3jRy6cSuxmu8iZrJ9'},
    { name: 'Rec Burguer', url: 'https://goo.gl/maps/w1HhPx3ENzNLLPT58' },
    { name: 'Brasa no Quintal', url: 'https://goo.gl/maps/5f16PoCcU2Q4c3KcA' },
    { name: 'Faaca - Boteco e Parrilla', url: 'https://goo.gl/maps/7ULyPwHowu8h1YTy6'},
    { name: 'La Romana', url: 'https://goo.gl/maps/z1ACcbvcBeaZT7Qz6' }
  ];
  coffeeOptions = [
    { name: 'Na Venda Chocolates e Café', url: 'https://goo.gl/maps/2MjWusiVZnBABeiX8' },
    { name: 'Castigliani Cafés Especiais', url: 'https://goo.gl/maps/qZaYHY42MS9m6XVb7' },
    { name: 'Castigliani Café-Fundação', url: 'https://goo.gl/maps/ARJrot96EcZo8FN8A' },
    { name: 'Cordel Cafés Especiais', url: 'https://goo.gl/maps/2NYRUGr34BAfSiK4A' },
    { name: 'Café Tão - Cafeteria', url: 'https://g.page/cafetaocafeteriabrasil?share' },
    { name: 'Orgânico 22', url: 'https://goo.gl/maps/TE5MDoLDDkbE3XPZ9' },
    { name: 'Ernesto Café Bistrô', url: 'https://g.page/ErnestCafeBistro?share' },
    { name: 'GrãoCheff', url: 'https://g.page/graocheff?share' },
    { name: 'Lala Café & Cozinha Afetiva', url: 'https://goo.gl/maps/tLCSXWWw8CizDKnt7' }
  ];
  iceCreamOptions = [
    { name: 'Bellucci Gelateria', url: 'https://goo.gl/maps/ht7e3UAo8H6gTEtu7' },
    { name: 'FriSabor', url: 'https://goo.gl/maps/9VTWmpxTNwrh87Hf7' },
    { name: 'San Paolo Gelato Gourmet', url: 'https://goo.gl/maps/HMZbv5iSDW4mgGNz5' },
    { name: 'Santo Doce', url: 'https://goo.gl/maps/u4dDYC2xcyEbQBfi6' }
  ];
  chosenOption = {};
  restaurantList = [];

  getRandomLunchOption() {
    const index = Math.floor(Math.random() * Math.floor(this.lunchOptions.length));
    this.chosenOption = this.lunchOptions[index];
  }

  getRandomDinnerOption() {
    const index = Math.floor(Math.random() * Math.floor(this.dinnerOptions.length));
    this.restaurantList = [];
    this.chosenOption = this.dinnerOptions[index];
  }

  getRandomCoffeeOption() {
    const index = Math.floor(Math.random() * Math.floor(this.coffeeOptions.length));
    this.restaurantList = [];
    this.chosenOption = this.coffeeOptions[index];
  }

  getRandomIceCreamOption() {
    const index = Math.floor(Math.random() * Math.floor(this.iceCreamOptions.length));
    this.restaurantList = [];
    this.chosenOption = this.iceCreamOptions[index];
  }

  listAll() {
    this.restaurantList = [];
    this.restaurantList.push.apply(this.restaurantList, this.lunchOptions);
    this.restaurantList.push.apply(this.restaurantList, this.dinnerOptions);
    this.restaurantList.push.apply(this.restaurantList, this.coffeeOptions);
    this.restaurantList.push.apply(this.restaurantList, this.iceCreamOptions);
  }
}
