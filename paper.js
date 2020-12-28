class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
			
		
		this.body=Bodies.circle(250, 540,20, options)
		this.image=loadImage("clipart sprites/paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var pos =this.body.position;		
            var angle = this.body.angle; 
			
			
			push()
			fill("white");
			imageMode(CENTER)
			image(this.image,pos.x,pos.y,63,73);
			pop()

	}

}