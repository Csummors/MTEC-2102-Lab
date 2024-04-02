import phaser from 'phaser';



class Game extends phaser.Scene {
    
    character: any;

    wKey: Phaser.Input.Keyboard.Key | undefined;
    aKey: Phaser.Input.Keyboard.Key | undefined;
    sKey: Phaser.Input.Keyboard.Key | undefined;
    dKey: Phaser.Input.Keyboard.Key | undefined;

    container: any
    container1:any
    

    preload() {

       
        this.load.image('character', '/character.png');
        this.load.image('enemy', '/player2.jpg');

    
    }

   
    

    
    create() {
        
        

        this.wKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.aKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.sKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.dKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
       ////////////////////////////////////////////////////////////////////////////
       const characterImage = this.add.image(0, 0, 'character');
       characterImage.setScale(0.5);

       const enemyImage = this.add.image(0, 0, 'enemy');
       enemyImage.setScale(0.5);

       /////////////////////////////////////////////////////////////////////////////
        this.container = this.add.container(400, 300)
        this.container.add([ characterImage ]);

        this.container.setSize(400, 300);
        this.container.setInteractive({ draggable: true });

        this.container.on('drag', (pointer, dragX, dragY) => {
            console.log('enemy')
            this.container.x = dragX;
            this.container.y = dragY;

        });

        this.container.on('pointerdown', (pointer, dragX, dragY) => {
            console.log('click')
        });
        ////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////
        this.container1 = this.add.container(400, 300)
        this.container1.add([ enemyImage ]);

        this.container1.setSize(400, 300);
        this.container1.setInteractive({ draggable: true });

        this.container1.on('drag', (pointer, dragX, dragY) => {
            console.log('enemy')
            this.container1.x = dragX;
            this.container1.y = dragY;

        });

        this.container1.on('pointerdown', (pointer, dragX, dragY) => {
            console.log('click')
        });

            

    }

    update() {
       
        if(this.aKey?.isDown) {
            this.container.x = this.container.x -= 10;
        }
        if(this.dKey?.isDown) {
            this.container.x = this.container.x += 10;
        }
        if(this.wKey?.isDown) {
            this.container.y = this.container.y -= 10;
        }
        if(this.sKey?.isDown) {
            this.container.y = this.container.y += 10;
        }

    }
} 

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: Game,
    scale:
    {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};
export const game = new Phaser.Game(config)