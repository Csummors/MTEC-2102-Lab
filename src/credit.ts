import Phaser from 'phaser'



export default class MainCredit extends Phaser.Scene{
    constructor () {
        super({key: 'main-credit'})
    }
    
   


    create (){

        const thisScene = this.scene;

        const mainCameraWidth3 = this.cameras.main.width;
        const mainCameraHeight3 =this.cameras.main.height;
        
        const halfHeight3 = mainCameraHeight3 /2;
        const halfWidth3 = mainCameraWidth3 / 2; 


        const text2 = this.add.text(halfWidth3, halfHeight3-100, 'Thank You for Playing');
        text2.setOrigin(.5, .5);
        //text2.setFontStyle()
        text2.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        text2.setFontSize(60);


       
    }

    update (){

    }

   


}