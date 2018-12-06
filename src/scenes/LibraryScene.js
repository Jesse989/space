import Player from '../sprites/Player.js';

export default class LibraryScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'LibraryScene',
    });
    this.background;
    this.characters = [ 'cooper', 'robot', 'jared', 'scarlett', 'litbanana', 'dancingcoffee'];
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

    this.characters.map((el) => {

      this[el] = new Player(this, Phaser.Math.Between(164, 364), Phaser.Math.Between(140, 240), el)
      if(this[el].texture.key !== 'cooper') {

        this[el].anims.play(this[el].texture.key, false)

      }

    })

    this.scene.scene.cameras.main.startFollow(this.cooper).setZoom(2)


  }

  update() {

  }


}
