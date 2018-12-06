export default function createAnimations(scene, keys) {
  keys.forEach((child) => {
    scene.anims.create({
        key: child,
        frames: scene.anims.generateFrameNumbers(child, { start: 0, end: 3 }),
        frameRate: 8,
        repeat: -1
    });
  })

}
