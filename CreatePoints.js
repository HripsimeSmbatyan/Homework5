const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");

const a=canvas.width;
const b=canvas.height;
const z=35;

const color=["#7FFFD4", "#8A2BE2", "#A52A2A","#7FFF00", "#00FFFF", "#B8860B", "#006400", "#E9967A", "#FF7F50"];

const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};

const randwhidth=function(z) {
  return Math.floor(Math.random() * z) + 10;
};

const rect=function(n, a, b, c, d, e)
{
  if(n<=0)
    return;

  c=rand(a);
  d=rand(b);
  e=randwhidth(z)

  if(c+e>a)
    c=a-e;
  if(d+e>b)
    d=b-e;

  context.fillStyle=color[rand(50)];
  context.fillRect(c, d, e, e);
  rect(n-1, a, b);
};

rect(50, a, b);