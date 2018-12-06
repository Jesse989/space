
import createAnimations from '../animations.js'

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene',
    });

    this.keys = [ 'robot', 'jared', 'scarlett', 'litbanana', 'dancingcoffee' ];

  }


  preload() {
    this.load.image('background', '../assets/library_map.png');
    this.load.image('cooper', '../assets/Cooper.png');
    this.keys.forEach((child) => {
      this.load.spritesheet(child, `../assets/${child}_spritesheet.png`, { frameWidth: 32, frameHeight: 32 });
    })

    this.load.image('shadow', '../assets/shadow_01.png');
    this.load.on('complete', () => {
      createAnimations(this, this.keys)
      this.scene.start('LibraryScene');
    })
  }



}
