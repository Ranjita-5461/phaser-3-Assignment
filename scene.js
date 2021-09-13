 function preload() {
    var url;
    
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexgridtableplugin.min.js';
    this.load.plugin('rexgridtableplugin', url, true);
    
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexsliderplugin.min.js';
    this.load.plugin('rexsliderplugin', url, true);  
    
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/white-dot.png';      
    this.load.image('dot', url);  
  }
  
  function create() {
      var newCellObject = function (scene, cell) {
          var bg = scene.add.graphics()
              .fillStyle(0x6495ED)
              .fillRect(2, 2, 58, 58);
          var txt = scene.add.text(5, 5);
          var container = scene.add.container(0, 0, [bg, txt]);
          return container;
      }
  
      var onCellVisible = function (cell) {
          cell.setContainer(newCellObject(this, cell));
          console.log('Cell ' + cell.index + ' visible');
      };
      var table = this.add.rexGridTable(400, 300, 250, 400, {
          cellHeight: 70,
          cellWidth: 70,
          cellsCount: 9,
          columns: 3,
          cellVisibleCallback: onCellVisible.bind(this),
      });
  
      // draw bound
      this.add.graphics()
          .lineStyle(3, 0xff0000)
          .strokeRectShape( table.getBounds());
  }
  
  var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
      preload: preload,
      create: create
    }
  };
  
  console.clear();
  var game = new Phaser.Game(config);
 