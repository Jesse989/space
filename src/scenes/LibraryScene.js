export default class LibraryScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'LibraryScene',
    });
    this.background;
    this.cooper;
    this.cursors;
  }

  preload() {

  }

  create() {
    this.background = this.add.image(20, -220, 'background')
      .setOrigin(0);
    this.cooper = this.physics.add.sprite(164, 148, 'cooper');
    console.log(this.scene.scene);
    this.scene.scene.cameras.main.startFollow(this.cooper).setZoom(2.5)

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if(this.cursors.left.isDown) {
      this.cooper.setVelocityX(-160);
    } else if(this.cursors.right.isDown) {
      this.cooper.setVelocityX(160);
    } else if(this.cursors.up.isDown) {
      this.cooper.setVelocityY(-160);
    } else if(this.cursors.down.isDown) {
      this.cooper.setVelocityY(160);
    } else {
      this.cooper.setVelocity(0);
    }
  }


}
