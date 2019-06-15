var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight-20;

var c = canvas.getContext("2d");

//CANNON
var xc = window.innerWidth/2;
var yc = window.innerHeight-5;

function can()
{
	this.xc = xc;
	this.yc = yc;
	this.draw = function()
	{
		c.beginPath();
		c.fillRect(this.xc,this.yc-30,80,25);
	}
	this.update = function()
	{
		window.addEventListener("keydown",event=>
		{
			if(((event.key=="d")||(event.keyCode==39))&&(this.xc<innerWidth-110))
			{
				this.xc = this.xc + 0.1;
			}
			else if(((event.key=="a")||(event.keyCode==37))&&(this.xc>0))
			{
				this.xc = this.xc - 0.1;
			} 
		})
		this.draw();
	}
}
var can = new can();

//BULLET
var xb = window.innerWidth/2 + 40;
var yb = window.innerHeight;
function bull()
{
	this.xb = xb;
    this.yb = yb;
    this.draw = function()
    {
    	c.beginPath();
    	c.arc(this.xb,this.yb,5,0,Math.PI*2,true);
		c.fillStyle = "red";
		c.fill();
		c.stroke();
    }
    this.update = function()
    {
    	window.addEventListener("keydown",event=>
		{
			if(((event.key=="d")||(event.keyCode==39))&&(this.xb<window.innerWidth-140)&&(this.yb > (window.innerHeight-75)))
			{
				this.xb = this.xb + 0.1;
			}
			else if(((event.key=="a")||(event.keyCode==37))&&(this.xb>40)&&(this.yb > (window.innerHeight-75)))
			{
				this.xb = this.xb - 0.1;
			} 
		})
		this.yb = this.yb - 50;
    	if (this.yb < 0)
    	{
    		this.yb = window.innerHeight-60;
    		this.xb = can.xc + 40;
    	}
    	this.draw();
    }
}
var bullArray = [];
for(var i = 1; i < 21 ; i++)
{
	var yb = 25*i;
    bullArray.push(new bull());
}

//ROCKS
function rockl()
{
	this.xr = [50,window.innerWidth-80];
	this.xrl = this.xr[Math.floor(Math.random()*this.xr.length)];
	this.yrl = window.innerHeight/2*Math.random();
	this.dxrl = 10;
	this.dyrl = 1;
    this.ddyrl = 0.1;
    this.power = Math.round(Math.random()*50)+50;
	this.draw = function()
	{
		c.beginPath();
	    c.arc(this.xrl,this.yrl,50,0,Math.PI*2,true);
	    c.fillStyle="brown";
	    c.fill();
	}
	this.update = function()
	{
		this.xrl = this.xrl + this.dxrl;
		this.yrl = this.yrl + this.dyrl;
		this.dyrl = this.dyrl + this.ddyrl;
		if((this.xrl<=50)||(this.xrl>=window.innerWidth-50))
		{
			this.dxrl = -this.dxrl
		}
		if((this.yrl>=window.innerHeight-70)||(this.yrl<=50))
		{
			this.dyrl = -this.dyrl;
		}
		this.draw();
	}
}

var rocks = [];
function rock_creator()
{
	rocks.push(new rockl());
}

var r1 = new rockl();
var r2 = new rockl();
var r3 = new rockl();
var r4 = new rockl();
var r5 = new rockl();
var r6 = new rockl();
var r7 = new rockl();
var r8 = new rockl();
var r9 = new rockl();
var r10 = new rockl();
var r11 = new rockl();
var r12 = new rockl();
var r13 = new rockl();
var r14 = new rockl();
var r15 = new rockl();
var r16 = new rockl();
var r17 = new rockl();
var r18 = new rockl();
var r19 = new rockl();
var r20 = new rockl();
var r21 = new rockl();
var r22 = new rockl();
var r23 = new rockl();
var r24 = new rockl();
var r25 = new rockl();
var r26 = new rockl();
var r27 = new rockl();
var r28 = new rockl();
var r29 = new rockl();
var r30 = new rockl();
var t = 0;
var s = 0;
function main()
{
	requestAnimationFrame(main);
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
    c.fillStyle = "blue";
    c.fill();
	can.update();
    c.fill();
	for(var i = 0; i < 20; i++)
		{
			bullArray[i].update();
		}
	c.fillStyle = "brown";
    c.fill();
	if(t>=0)
	{
		r1.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r1.xrl,2)+Math.pow(bullArray[i].yb-r1.yrl,2))<=55)
				{r1.power--;}
			if (r1.power<=0) {r1.xrl=-500;}
		if((r1.xrl > (can.xc-50))&&(r1.xrl < (can.xc+130))&&(r1.yrl > (can.yc-80))&&(r1.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=2) 
	{
		r2.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r2.xrl,2)+Math.pow(bullArray[i].yb-r2.yrl,2))<=55)
				{r2.power--;}
			if (r2.power<=0) {r2.xrl=-500;}
		if((r2.xrl > (can.xc-50))&&(r2.xrl < (can.xc+130))&&(r2.yrl > (can.yc-80))&&(r2.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=3) 
	{
		r3.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r3.xrl,2)+Math.pow(bullArray[i].yb-r3.yrl,2))<=55)
				r3.power--;
			if (r3.power<=0) {r3.xrl=-500;}
		}
		if((r3.xrl > (can.xc-50))&&(r3.xrl < (can.xc+130))&&(r3.yrl > (can.yc-80))&&(r3.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
	}
	if(t>=4)
	{
		r4.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r4.xrl,2)+Math.pow(bullArray[i].yb-r4.yrl,2))<=55)
				r4.power--;
			if (r4.power<=0) {r4.xrl=-500;}
		if((r4.xrl > (can.xc-50))&&(r4.xrl < (can.xc+130))&&(r4.yrl > (can.yc-80))&&(r4.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=5) 
	{
		r5.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r5.xrl,2)+Math.pow(bullArray[i].yb-r5.yrl,2))<=55)
				r5.power--;
			if (r5.power<=0) {r5.xrl=-500;}
		if((r5.xrl > (can.xc-50))&&(r5.xrl < (can.xc+130))&&(r5.yrl > (can.yc-80))&&(r5.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=6) 
	{
		r6.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r6.xrl,2)+Math.pow(bullArray[i].yb-r6.yrl,2))<=55)
				r6.power--;
			if (r6.power<=0) {r6.xrl=-500;}
		if((r6.xrl > (can.xc-50))&&(r6.xrl < (can.xc+130))&&(r6.yrl > (can.yc-80))&&(r6.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=7) 
	{
		r7.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r7.xrl,2)+Math.pow(bullArray[i].yb-r7.yrl,2))<=55)
				r7.power--;
			if (r7.power<=0) {r7.xrl=-500;}
		if((r7.xrl > (can.xc-50))&&(r7.xrl < (can.xc+130))&&(r7.yrl > (can.yc-80))&&(r7.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=8) 
	{
		r8.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r8.xrl,2)+Math.pow(bullArray[i].yb-r8.yrl,2))<=55)
				r8.power--;
			if (r8.power<=0) {r8.xrl=-500;}
		if((r8.xrl > (can.xc-50))&&(r8.xrl < (can.xc+130))&&(r8.yrl > (can.yc-80))&&(r8.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=9) 
	{
		r9.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r9.xrl,2)+Math.pow(bullArray[i].yb-r9.yrl,2))<=55)
				r9.power--;
			if (r9.power<=0) {r9.xrl=-500;}
		if((r9.xrl > (can.xc-50))&&(r9.xrl < (can.xc+130))&&(r9.yrl > (can.yc-80))&&(r9.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=10) 
	{
		r10.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r10.xrl,2)+Math.pow(bullArray[i].yb-r10.yrl,2))<=55)
				r10.power--;
			if (r10.power<=0) {r10.xrl=-500;}
		if((r10.xrl > (can.xc-50))&&(r10.xrl < (can.xc+130))&&(r10.yrl > (can.yc-80))&&(r10.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=11) 
	{
		r11.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r11.xrl,2)+Math.pow(bullArray[i].yb-r11.yrl,2))<=55)
				r11.power--;
			if (r11.power<=0) {r11.xrl=-500;}
		if((r11.xrl > (can.xc-50))&&(r11.xrl < (can.xc+130))&&(r11.yrl > (can.yc-80))&&(r11.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=12) 
	{
		r12.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r12.xrl,2)+Math.pow(bullArray[i].yb-r12.yrl,2))<=55)
				r12.power--;
			if (r12.power<=0) {r12.xrl=-500;}
		if((r12.xrl > (can.xc-50))&&(r12.xrl < (can.xc+130))&&(r12.yrl > (can.yc-80))&&(r12.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=13) 
	{
		r13.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r13.xrl,2)+Math.pow(bullArray[i].yb-r13.yrl,2))<=55)
				r13.power--;
			if (r13.power<=0) {r13.xrl=-500;}
		if((r13.xrl > (can.xc-50))&&(r13.xrl < (can.xc+130))&&(r13.yrl > (can.yc-80))&&(r13.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=14) 
	{
		r14.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r9.xrl,2)+Math.pow(bullArray[i].yb-r9.yrl,2))<=55)
				r9.power--;
			if (r9.power<=0) {r9.xrl=-500;}
		if((r9.xrl > (can.xc-50))&&(r9.xrl < (can.xc+130))&&(r9.yrl > (can.yc-80))&&(r9.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=15) 
	{
		r15.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r15.xrl,2)+Math.pow(bullArray[i].yb-r15.yrl,2))<=55)
				r15.power--;
			if (r15.power<=0) {r15.xrl=-500;}
		if((r15.xrl > (can.xc-50))&&(r15.xrl < (can.xc+130))&&(r15.yrl > (can.yc-80))&&(r15.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=16) 
	{
		r16.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r16.xrl,2)+Math.pow(bullArray[i].yb-r16.yrl,2))<=55)
				r16.power--;
			if (r16.power<=0) {r16.xrl=-500;}
		if((r16.xrl > (can.xc-50))&&(r16.xrl < (can.xc+130))&&(r16.yrl > (can.yc-80))&&(r16.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=17) 
	{
		r17.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r17.xrl,2)+Math.pow(bullArray[i].yb-r17.yrl,2))<=55)
				r17.power--;
			if (r17.power<=0) {r17.xrl=-500;}
		if((r17.xrl > (can.xc-50))&&(r17.xrl < (can.xc+130))&&(r17.yrl > (can.yc-80))&&(r17.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=18) 
	{
		r18.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r18.xrl,2)+Math.pow(bullArray[i].yb-r18.yrl,2))<=55)
				r18.power--;
			if (r18.power<=0) {r18.xrl=-500;}
		if((r18.xrl > (can.xc-50))&&(r18.xrl < (can.xc+130))&&(r18.yrl > (can.yc-80))&&(r18.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=19) 
	{
		r19.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r19.xrl,2)+Math.pow(bullArray[i].yb-r19.yrl,2))<=55)
				r19.power--;
			if (r19.power<=0) {r19.xrl=-500;}
		if((r19.xrl > (can.xc-50))&&(r19.xrl < (can.xc+130))&&(r19.yrl > (can.yc-80))&&(r19.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=20) 
	{
		r20.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r20.xrl,2)+Math.pow(bullArray[i].yb-r20.yrl,2))<=55)
				r20.power--;
			if (r20.power<=0) {r20.xrl=-500;}
		if((r20.xrl > (can.xc-50))&&(r20.xrl < (can.xc+130))&&(r20.yrl > (can.yc-80))&&(r20.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=21)
	{
		r21.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r21.xrl,2)+Math.pow(bullArray[i].yb-r21.yrl,2))<=55)
				{r21.power--;}
			if (r21.power<=0) {r21.xrl=-500;}
		if((r21.xrl > (can.xc-50))&&(r21.xrl < (can.xc+130))&&(r21.yrl > (can.yc-80))&&(r21.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=22) 
	{
		r22.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r22.xrl,2)+Math.pow(bullArray[i].yb-r22.yrl,2))<=55)
				{r22.power--;}
			if (r22.power<=0) {r22.xrl=-500;}
		if((r22.xrl > (can.xc-50))&&(r22.xrl < (can.xc+130))&&(r22.yrl > (can.yc-80))&&(r22.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=23) 
	{
		r23.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r23.xrl,2)+Math.pow(bullArray[i].yb-r23.yrl,2))<=55)
				r23.power--;
			if (r23.power<=0) {r23.xrl=-500;}
		}
		if((r23.xrl > (can.xc-50))&&(r23.xrl < (can.xc+130))&&(r23.yrl > (can.yc-80))&&(r23.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
	}
	if(t>=24)
	{
		r24.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r24.xrl,2)+Math.pow(bullArray[i].yb-r24.yrl,2))<=55)
				r24.power--;
			if (r24.power<=0) {r24.xrl=-500;}
		if((r24.xrl > (can.xc-50))&&(r24.xrl < (can.xc+130))&&(r24.yrl > (can.yc-80))&&(r24.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=25) 
	{
		r25.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r25.xrl,2)+Math.pow(bullArray[i].yb-r25.yrl,2))<=55)
				r25.power--;
			if (r25.power<=0) {r25.xrl=-500;}
		if((r25.xrl > (can.xc-50))&&(r25.xrl < (can.xc+130))&&(r25.yrl > (can.yc-80))&&(r25.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=26) 
	{
		r26.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r26.xrl,2)+Math.pow(bullArray[i].yb-r26.yrl,2))<=55)
				r26.power--;
			if (r26.power<=0) {r26.xrl=-500;}
		if((r26.xrl > (can.xc-50))&&(r26.xrl < (can.xc+130))&&(r26.yrl > (can.yc-80))&&(r26.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=27) 
	{
		r27.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r27.xrl,2)+Math.pow(bullArray[i].yb-r27.yrl,2))<=55)
				r27.power--;
			if (r27.power<=0) {r27.xrl=-500;}
		if((r27.xrl > (can.xc-50))&&(r27.xrl < (can.xc+130))&&(r27.yrl > (can.yc-80))&&(r27.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=28) 
	{
		r28.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r28.xrl,2)+Math.pow(bullArray[i].yb-r28.yrl,2))<=55)
				r28.power--;
			if (r28.power<=0) {r28.xrl=-500;}
		if((r28.xrl > (can.xc-50))&&(r28.xrl < (can.xc+130))&&(r28.yrl > (can.yc-80))&&(r28.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=29) 
	{
		r29.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r29.xrl,2)+Math.pow(bullArray[i].yb-r29.yrl,2))<=55)
				r29.power--;
			if (r29.power<=0) {r29.xrl=-500;}
		if((r29.xrl > (can.xc-50))&&(r29.xrl < (can.xc+130))&&(r29.yrl > (can.yc-80))&&(r29.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}
	if(t>=30) 
	{
		r30.update();
		for(var i = 0;i<20;i++)
		{
			if(Math.sqrt(Math.pow(bullArray[i].xb-r30.xrl,2)+Math.pow(bullArray[i].yb-r30.yrl,2))<=55)
				r30.power--;
			if (r30.power<=0) {r30.xrl=-500;alert("You Won");cancelAnimationFrame(main);}
		if((r30.xrl > (can.xc-50))&&(r30.xrl < (can.xc+130))&&(r30.yrl > (can.yc-80))&&(r30.yrl < (can.yc+45)))
		{
			alert("GAME ENDED.Your score is "+s);
		}
		}
	}	
	t = t + 0.01;
	s = s +1;
}
main();