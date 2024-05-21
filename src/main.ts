import phaser from 'phaser';
import Preloader from './preloader'
import StartMenu from './start-menu'
import MainCredit from './credit'

//import MainCredit from './main-credit'



class MainGameScene extends phaser.Scene {

    constructor() {
        super({key: 'main-game'})
    }
    character: any;

    wKey: Phaser.Input.Keyboard.Key | undefined;
    aKey: Phaser.Input.Keyboard.Key | undefined;
    sKey: Phaser.Input.Keyboard.Key | undefined;
    dKey: Phaser.Input.Keyboard.Key | undefined;

    container: any
    container1: any
    container2: any
   

    startM: any;
    PlayB: any;

    playerID = true;

    create() {


        const thisScene = this.scene;

        //this.input.setDefaultCursor('url(goldPointer.png), pointer');


        /////////////////////////////////////////////////////////////////////////////

        this.wKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.aKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.sKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.dKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        ////////////////////////////////////////////////////////////////////////////
         // const characterImage = this.add.image(0, 0, 'character');
         // characterImage.setScale(0.5);

         const mainCameraWidth2 = this.cameras.main.width;
         const mainCameraHeight2 =this.cameras.main.height;
         
         const halfHeight2 = mainCameraHeight2 /2;
         const halfWidth2 = mainCameraWidth2 / 2; 

         

         
    
         const bgImage2 = this.add.image(halfWidth2, halfHeight2, 'cityBackground');
         
         bgImage2.setOrigin(.5, .5);
         bgImage2.setScale(1.5, 1.5);

        const bgImage3 = this.add.image(0, 0, 'poolside1');
         
        // bgImage3.setOrigin(1, 1);
         bgImage3.setScale(1.3, 1.3);
        

         const creditsBt = this.add.image(halfWidth2, halfHeight2, 'CreditButton1');

         creditsBt.setOrigin(-7.5, 10.5);
         creditsBt.setScale(.3, .3);
         creditsBt.setInteractive();

          
          const characterImage2 = this.add.image(0, 0, 'character2');
          characterImage2.setScale(0.5);
   
          const enemyImage = this.add.image(0, 0, 'enemy');
          enemyImage.setScale(0.5);
   
        /////////////////////////////////////////////////////////////////////////////
        this.container = this.add.container(400, 300)
        this.container.add([characterImage2]);

        this.container.setSize(400, 300);
        this.container.setInteractive({ draggable: true });

        this.container.on('drag', (pointer, dragX, dragY) => {
            console.log('player')
            this.container.x = dragX;
            this.container.y = dragY;



        });

        this.container.on('pointerdown', (pointer, dragX, dragY) => {
            console.log('click')

            const text1 = this.add.text(1500, 0, 'player 1');
            text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
            text1.setFontSize(60);


        });
        ////////////////////////////////////////////////////////////////////

        this.container1 = this.add.container(400, 300)
        this.container1.add([enemyImage]);

        this.container1.setSize(400, 300);
        this.container1.setInteractive({ draggable: true });

        this.container1.on('drag', (pointer, dragX, dragY) => {
            console.log('enemy')
            this.container1.x = dragX;
            this.container1.y = dragY;

        });

        this.container1.on('pointerdown', (pointer, dragX, dragY) => {
            console.log('click')

            const text2 = this.add.text(1500, 0, 'Enemy');
            text2.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
            text2.setFontSize(60);
        });
        //////////////////////////////////////////////////////////////////////

        this.container2 = this.add.container(665, 360)
        this.container2.add([bgImage3]);

        this.container2.setSize(500, 500);
        this.container2.setInteractive({ draggable: false });
        

       
        this.container2.on('pointerdown', (pointer, ) => {
            console.log('click BUILDING')

            const text3 = this.add.text(600, 0, 'Building 1');
            text3.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
            text3.setFontSize(60);
        });

        //////////////////////////////////////////////////////////////////////

        creditsBt.on('pointerover', function(){creditsBt.setTint(0xf0ff00);})
         creditsBt.on('pointerout', function(){creditsBt.setTint(0xffffff);})

         creditsBt.on('pointerdown',function(){
            console.log('you have clicked the button!')
            thisScene.start('main-credit')
        });

        /////////////////////////////////////////////////////////////////////////////

        /*
        const bgImage3 = this.physics.add.image(250, 200, 'poolside1')
        .setImmovable(true);

        
        const character1 = this.physics.add.image(400, 300, 'characterImage2')
        .setVelocity(100, 200)
        .setBounce(1, 1)
        .setCollideWorldBounds(true)
        .setGravityY(200);

    // This enables the world 'collide' event, which will be detected by the collider below.
    character1.body.onCollide = true;

    this.physics.add.collider(character1, bgImage3);
   */



    }

    update() {

        if (this.aKey?.isDown) {
            this.container.x = this.container.x -= 10;
        }
        if (this.dKey?.isDown) {
            this.container.x = this.container.x += 10;
        }
        if (this.wKey?.isDown) {
            this.container.y = this.container.y -= 10;
        }
        if (this.sKey?.isDown) {
            this.container.y = this.container.y += 10;
        }

    }
}

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: [Preloader,StartMenu,MainGameScene,MainCredit],
    scale:
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};
export const game = new Phaser.Game(config)