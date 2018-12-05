
export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene',
    });
  }

  preload() {
    this.load.image('background', '../assets/library_map.png');
    this.load.image('cooper', '../assets/Cooper.png');
    this.load.image('shadow', '../assets/shadow_01.png');
  }

  create() {
    this.scene.start('LibraryScene', this);
  }

  update() {

  }


}
