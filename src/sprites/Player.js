export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.x = x;
    this.y = y;

    this.shadow = scene.add.sprite(this.x, this.y, 'shadow')
      .setAlpha(.7);

    this.setTexture(texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.cursors;
    this.cursors = scene.input.keyboard.createCursorKeys();

  }

  update() {

    if(this.cursors.left.isDown) {
      this.setVelocityX(-160);
    } else if(this.cursors.right.isDown) {
      this.setVelocityX(160);
    } else if(this.cursors.up.isDown) {
      this.setVelocityY(-160);
    } else if(this.cursors.down.isDown) {
      this.setVelocityY(160);
    } else {
      this.setVelocity(0);
    }
    this.shadow.setPosition(this.x, this.y)

  }
}
