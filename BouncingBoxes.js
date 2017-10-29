const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");

const a=canvas.width;
const b=canvas.height;
const z=35;

const arr=[];

const colorrect=["#7FFFD4", "#8A2BE2", "#A52A2A","#7FFF00", "#00FFFF", "#B8860B", "#006400", "#E9967A", "#FF7F50"];
const rand1 = function(num) {
	return Math.floor(Math.random() * num) + 1;
};
const rand2 = function(num) {
	return Math.floor(Math.random() * num) + 1;
};
const randwhidth=function(z) {
	return Math.floor(Math.random() * z) + 10;
};
const rect=function(n, a, b)
{
	if(n<=0)
		return;
	arr[n]={
		x:rand2(a),
		y:rand2(b),
		wh:randwhidth(z),
		xdelta: rand1(7),
		ydelta:rand1(7),
		color:colorrect[rand2(50)]
	}

	if(arr[n].x+arr[n].wh>a)
		arr[n].x=a-arr[n].wh;
	if(arr[n].y+arr[n].wh>b)
		arr[n]=b-arr[n].wh;
	
	const draw=function()
	{
		context.clearRect(arr[n].x-arr[n].xdelta, arr[n].y-arr[n].ydelta, arr[n].wh, arr[n].wh);
		context.fillStyle=arr[n].color;
		context.fillRect(arr[n].x, arr[n].y, arr[n].wh, arr[n].wh);
	}
	const update=function()
	{
		if(arr[n].x>=a-arr[n].wh)
			arr[n].xdelta=-arr[n].xdelta;
		if(arr[n].x<=0)
			arr[n].xdelta=-arr[n].xdelta;
		if(arr[n].y>=b-arr[n].wh)
			arr[n].ydelta=-arr[n].ydelta;
		if(arr[n].y<=0)
			arr[n].ydelta=-arr[n].ydelta;
		arr[n].x=arr[n].x+arr[n].xdelta;
		arr[n].y=arr[n].y+arr[n].ydelta;
	}
	const loop=function()
	{		
		draw();
		update();
		requestAnimationFrame(loop);
	};
	loop();
	rect(n-1, a, b);
};
rect(50, a, b);