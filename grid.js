
        var config = {
    type: Phaser.AUTO,
    
    parent: 'phaser-example',
    width: 1000,
    height: 1000,
    backgroundColor: '#efefef',
    scene: {
        create: create,
       
        
    }
};

var game = new Phaser.Game(config);



function create ()
{
    var g1 = this.add.grid(300, 300, 300, 300, 100, 100, 0x6495ED,0.7,0xffffff,4)
  
 
}

function preaload()
{

}


 this.add.grraphics()
 .lineStyle(3,0xff0000)
 .strokeRectShape(table.getBounds); 