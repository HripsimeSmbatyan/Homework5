const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");

a=canvas.width;
b=canvas.height;
a1=a-60;
b1=b-80;

const rand1 = function(num) {
	return Math.floor(Math.random() * num) + num/2;
};
const rand2 = function(num) {
	return Math.floor(Math.random() * num) + 100;
};
const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};

const Backimg=new Image();
Backimg.src="https://chupacdn.s3.amazonaws.com/catalog/product/cache/1/thumbnail/1280x/17f82f742ffe127f42dca9de82fb58b1/g/a/game-background-7979_imgs_7979_2.jpg";

const heroimg=new Image();
heroimg.src="https://vignette.wikia.nocookie.net/fictionalcharacters/images/7/7c/Boo.png/revision/latest/scale-to-width-down/180?cb=20131107035833";

const Badguyimg1=new Image();
Badguyimg1.src="http://vignette1.wikia.nocookie.net/disney/images/8/86/Randall.png/revision/latest/scale-to-width-down/2000?cb=20160404022733";

const Badguyimg2=new Image();
Badguyimg2.src="https://s-media-cache-ak0.pinimg.com/originals/b4/98/a1/b498a1c676afce22a275a4b705263f09.gif";

const Badguyimg3=new Image();
Badguyimg3.src="http://vignette1.wikia.nocookie.net/disney/images/b/bd/James_P._Sullivan.png/revision/latest/scale-to-width-down/2000?cb=20160404022725";

const Badguyimg4=new Image();
Badguyimg4.src="https://vignette.wikia.nocookie.net/disney/images/3/38/Mike1.png/revision/latest?cb=20131125223004";

const Badguyimg5=new Image();
Badguyimg5.src="https://t00.deviantart.net/XUDHCWA-LjeQDUVxSzXKVTAsH3s=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/78ed/th/pre/f/2013/239/4/2/bad_randy_by_spotty_servine-d6jwja1.png";

const gamedata=
{
	levelstart:0,
	hero: {
		x:150,
		y:400,
		width:80,
		height:100,
		xdelta:20,
		ydelta:0,
		firstp:0
	},
	Badguy1: {
		width: 60,
		height: 80,
		x: rand1(a)-100,
		y: rand2(b)-100,
		xdelta: 5,
		ydelta:3,
		imagevil: Badguyimg1
	},
	Badguy2: {
		width: 60,
		height: 80,
		x: rand1(a)-100,
		y: rand2(b)-100,
		xdelta: 5,
		ydelta:3,
		imagevil: Badguyimg4
	},
	Badguy3: {
		width: 60,
		height: 80,
		x: rand1(a)-100,
		y: rand2(b)-100,
		xdelta: 5,
		ydelta:3,
		imagevil: Badguyimg5
	}
};

const hero=gamedata.hero;
const Badguy1=gamedata.Badguy1;
const Badguy2=gamedata.Badguy2;
const Badguy3=gamedata.Badguy3;
const draw=function() {
	
	context.drawImage(Backimg, 0, 0, a, b);
	context.drawImage(heroimg, hero.x, hero.y, hero.width, hero.height);
	context.drawImage(Badguy1.imagevil, Badguy1.x, Badguy1.y, Badguy1.width, Badguy1.height);
	if(gamedata.levelstart>=5)
		context.drawImage(Badguy2.imagevil, Badguy2.x, Badguy2.y, Badguy2.width, Badguy2.height);
	if(gamedata.levelstart>=10)
		context.drawImage(Badguy3.imagevil, Badguy3.x, Badguy3.y, Badguy3.width, Badguy3.height);
	if(Badguy1.x<=hero.x+hero.width && Badguy1.x+Badguy1.width>=hero.x && Badguy1.y+Badguy1.height>=hero.y && hero.y+hero.height>=Badguy1.y)
		alert("Oops");
	if(gamedata.levelstart>=5 && (Badguy2.x<=hero.x+hero.width && Badguy2.x+Badguy2.width>=hero.x && Badguy2.y+Badguy2.height>=hero.y && hero.y+hero.height>=Badguy2.y))
		alert("Oops");
	if(gamedata.levelstart>=10 && (Badguy3.x<=hero.x+hero.width && Badguy3.x+Badguy3.width>=hero.x && Badguy3.y+Badguy3.height>=hero.y && hero.y+hero.height>=Badguy3.y))
		alert("Oops");
};
const updatevil=function()
{
	if(Badguy1.x<=0)
	{
		gamedata.levelstart=gamedata.levelstart+1;
		Badguy1.imagevil=Badguyimg2;
		Badguy1.xdelta=-rand(15);
	}
	if(Badguy1.x>=a-Badguy1.width)
	{
		Badguy1.imagevil=Badguyimg1;
		Badguy1.x=a-Badguy1.width;
		Badguy1.xdelta=rand(15);
	}
	if(Badguy1.y>=b-Badguy1.height)
	{
		Badguy1.y=b-Badguy1.height;
		Badguy1.ydelta=-Badguy1.ydelta;
	}
	if(Badguy1.y<=0)
	{
		Badguy1.y=0;
		Badguy1.ydelta=-Badguy1.ydelta;
	};
	Badguy1.x=Badguy1.x-Badguy1.xdelta;
	Badguy1.y=Badguy1.y-Badguy1.ydelta;
}
const updatevil2=function()
{
	if(Badguy2.x<=0)
	{
		Badguy2.imagevil=villainimage3;
		Badguy2.xdelta=-rand(15);
	}
	if(Badguy2.x>=a-Badguy2.width)
	{
		Badguy2.imagevil=Badguyimg3;
		Badguy2.x=a-Badguy2.width;
		Badguy2.xdelta=rand(15);
	}
	if(Badguy2.y>=b-Badguy2.height)
	{
		Badguy2.y=b-Badguy2.height;
		Badguy2.ydelta=-Badguy2.ydelta;
	}
	if(Badguy2.y<=0)
	{
		Badguy2.y=0;
		Badguy2.ydelta=-Badguy2.ydelta;
	};
	Badguy2.x=Badguy2.x-Badguy2.xdelta;
	Badguy2.y=Badguy2.y-Badguy2.ydelta;
}
const updatevil3=function()
{
	if(Badguy3.x<=0)
	{
		Badguy3.xdelta=-rand(15);
	}
	if(Badguy3.x>=a-Badguy3.width)
	{
		Badguy3.x=a-Badguy3.width;
		Badguy3.xdelta=rand(15);
	}
	if(Badguy3.y>=b-Badguy3.height)
	{
		Badguy3.y=b-Badguy3.height;
		Badguy3.ydelta=-Badguy3.ydelta;
	}
	if(Badguy3.y<=0)
	{
		Badguy3.y=0;
		Badguy3.ydelta=-Badguy3.ydelta;
	};
	Badguy3.x=Badguy3.x-Badguy3.xdelta;
	Badguy3.y=Badguy3.y-Badguy3.ydelta;
}
const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;

document.addEventListener('keydown', function(event) {
	if(event.keyCode === upKey)
	{
		hero.firstp=hero.y
        hero.ydelta=10;
  	}
	if(event.keyCode===downKey)
	{
		hero.y=b-hero.height;
		hero.ydelta=0;
	}
	if(event.keyCode===rightKey)
	{
		hero.x=hero.x+hero.xdelta;
		if(hero.x>=a-hero.width)
			hero.x=a-hero.width;
	}
	if(event.keyCode===leftKey)
	{
		hero.x=hero.x-hero.xdelta;
		if(hero.x<=0)
			hero.x=0;
	}
}, false);
const update=function()
{
	hero.y=hero.y-hero.ydelta;
	if(hero.y<=0)
	{
		hero.y=0;
		hero.ydelta=-hero.ydelta;
	}
	if(hero.y<hero.firstp-hero.height)
		hero.ydelta=-hero.ydelta;
	if(hero.y>=b-hero.height)
	{
		hero.y=b-hero.height;
		hero.ydelta=0;
	}
};
const loop=function()
{
	draw();
	update();
	updatevil();
	updatevil2();
	updatevil3();
	requestAnimationFrame(loop);
};
loop();