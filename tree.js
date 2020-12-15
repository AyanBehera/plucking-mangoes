class Tree{
    constructor(x, y, width, height){
        var options = {
          'restitution': 1.0,
          'friction': 0.8,
          'density':1.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

    }
}
