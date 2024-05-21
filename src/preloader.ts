import phaser from 'phaser';

//export const myName = 'Cordell';
//export function testFucntiom(){
//    console.log('this is a test function')
//}

export default class Preloader extends phaser.Scene{

   


    constructor() {
        super({key: 'preload'})
    }

    preload() {

        this.load.image('character', '/character.png');
        this.load.image('character2', '/Character2.png');
        this.load.image('enemy', '/player2.jpg');

        this.load.image('cityBackground', '/CBG.png');
        this.load.image('poolside1','/pool.png')


        this.load.image('StartMenu1', '/GameCity.png');
        this.load.image('PlayButton1', '/PlayButton.png');
        this.load.image('CreditButton1', '/creditButton.png');
        ///////////////////////////////////////////////////////

        this.load.audio('themeSong',['/Song1.mp3'])
        //this.load.audio('title', [ 'music/Title.ogg', 'music/Title.mp3', 'music/Title.m4a' ]);

        ////////////////////////////////////////////////////
        const thisScene = this.scene;

        //////////////////////////////////////////////////

        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(800, 530, 320, 50); 

        ////////////////////////////////////////////////////////

        const width = this.cameras.main.width;
        const height = this. cameras.main.height;
        const  loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                //fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        ///////////////////////////////////////////////////
       this.load.on ('progress', function (value) {
           console.log(value);
           progressBar.clear();
           progressBar.fillStyle(0xffffff, 1);
           progressBar.fillRect(810, 540, 300 * value, 30);

       } )

       this.load.on('fileprogress', function (file) {
        console.log(file.src);
       })
       
        this.load.on('complete', function(){
            progressBar.destroy();
            progressBox.destroy();
            
            thisScene.start('start-menu')
            

        })

    }


}