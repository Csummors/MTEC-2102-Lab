import Phaser from 'phaser'



export default class StartMenu extends Phaser.Scene{
    constructor () {
        super({key: 'start-menu'})
    }
    
   


    create (){

        const thisScene = this.scene;

        const mainCameraWidth = this.cameras.main.width;
        const mainCameraHeight =this.cameras.main.height;
        
        const halfHeight = mainCameraHeight /2;
        const halfWidth = mainCameraWidth / 2; 


        const bgImage = this.add.image(halfWidth, halfHeight, 'StartMenu1');
        const playBt = this.add.image(halfWidth, halfHeight, 'PlayButton1');

        bgImage.setOrigin(.5, .5);
        bgImage.setScale(1.5, 1.5);


        const text2 = this.add.text(halfWidth, halfHeight-100, 'CONCRETE JUNGLE');
        text2.setOrigin(.5, .5);
        //text2.setFontStyle()
        text2.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        text2.setFontSize(60);

        playBt.setOrigin(.5, .5);
        playBt.setScale(.3, .3);
        playBt.setInteractive();

        playBt.on('pointerover', function(){playBt.setTint(0xf0ff00);})
        playBt.on('pointerout', function(){playBt.setTint(0xffffff);})

        playBt.on('pointerdown',function(){
            console.log('you have clicked the button!')
            thisScene.start('main-game')
            music.stop();
        });

        const music = this.sound.add('themeSong');

        music.play();
        music.setLoop(true);
        music.setVolume(0.01);

    }

    update (){

    }

   


}