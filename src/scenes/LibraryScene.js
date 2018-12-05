import Player from '../sprites/Player.js';

export default class LibraryScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'LibraryScene',
    });
    this.background;
    this.cooper;
    this.cooperShadow;

  }

  preload() {
    //TODO -add shadows on cooper(sprite attached to characters).
    //     -add moving animations .
    //     -add furniture, bookshelves and plants.
    //     -set up touch movement and grid.
  }

  create() {
    this.background = this.add.image(20, 0, 'background')
      .setOrigin(0);

    this.cooper = new Player(this, 164, 140, 'cooper')
    this.scene.scene.cameras.main.startFollow(this.cooper).setZoom(2)

  }

  update() {
    this.cooper.update();
  }


}
