import 'phaser';
import BootScene from './scenes/BootScene.js';
import LibraryScene from './scenes/LibraryScene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 480,
  backgroundColor: '#000000',
  parent: 'space',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
        debug: false,
        gravity: { y: 0 }
    }
  },
  scene: [ BootScene, LibraryScene ]
}

var Game = new Phaser.Game(config);
