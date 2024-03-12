// clase padre
export class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      this._nombre = nombre;
      this._edad = edad;
      this._img = img;
      this._comentarios = comentarios;
      this._sonido = sonido;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    get edad() {
      return this._edad;
    }
  
    get img() {
      return this._img;
    }

    get comentarios(){
      return this._comentarios;
  }
  
    set comentarios(comentarios) {
      this._comentarios = comentarios;
    }
  
    get sonido() {
      return this._sonido;
    }
  }

  // Obtiene el elemento de audio HTML con el ID "player"
let sonidoPlayer = document.getElementById("player");
  
//Clases hijas de Animal
  export class Leon extends Animal {
    constructor(edad, comentarios) {
      super('León', edad, 'Leon.png', comentarios, sonido);
    }
  
     // Método para el Leon 
     Rugir(_sonido){
     
      sonidoPlayer.src = `assets/sounds/${this._sonido}`;

      // Reproduce el sonido
      sonidoPlayer.play();
  }
  }
  
  export class Lobo extends Animal {
    constructor(edad, comentarios) {
      super('Lobo', edad, 'Lobo.jpg', comentarios, sonido);
    }
  
    Aullar(_sonido) {
    
      sonidoPlayer.src = `assets/sounds/${this._sonido}`;

      // Reproduce el sonido
      sonidoPlayer.play();
    }
  }
  
  export class Oso extends Animal {
    constructor(edad, comentarios) {
      super('Oso', edad, 'Oso.jpg', comentarios, sonido);
    }
  
    Gruñir(_sonido) {

      sonidoPlayer.src = `assets/sounds/${this._sonido}`;

      // Reproduce el sonido
      sonidoPlayer.play();
    }
  }
  
  export class Serpiente extends Animal {
    constructor(edad, comentarios) {
      super('Serpiente', edad, 'Serpiente.jpg', comantarios, sonido);
    }
  
    Sisear(_sonido) {
   
      sonidoPlayer.src = `assets/sounds/${this._sonido}`;

      // Reproduce el sonido
      sonidoPlayer.play();
    }
  }
  
  export class Aguila extends Animal {
    constructor(edad, comentarios) {
      super('Águila', edad, 'Aguila.png', comentarios, sonido);
    }
  
    Chillar(_sonido) { 
      sonidoPlayer.src = `assets/sounds/${this._sonido}`;

      // Reproduce el sonido
      sonidoPlayer.play();
    }
  }
  
