export default class Controls {
  constructor() {
    this.forward = false;
    this.backward = false;
    this.left = false;
    this.right = false;
    this.keydown = this.keydown.bind(this);
    this.keyup = this.keyup.bind(this);
  }

  keydown(e) {
    switch(e.key) {
      case 'ArrowUp':
        this.forward = true;
        break;
      case 'ArrowDown':
        this.backward = true;
        break;
      case 'ArrowLeft':
        this.left = true;
        break;
      case 'ArrowRight':
        this.right = true;
        break;
    }
  }

  keyup(e) {
    switch(e.key) {
      case 'ArrowUp':
        this.forward = false;
        break;
      case 'ArrowDown':
        this.backward = false;
        break;
      case 'ArrowLeft':
        this.left = false;
        break;
      case 'ArrowRight':
        this.right = false;
        break;
    }
    
  }

  listen() {
    window.addEventListener('keydown', this.keydown);
    window.addEventListener('keyup', this.keyup);
  }

  stop() {
    window.removeEventListener('keydown', this.keydown);
    window.removeEventListener('keyup', this.keyup);
  }
}