/***Object Creation for Snake Game***/
var snakeObj=new snakeObj();

/***Main Function/Constructor for Snake Game***/
function snakeObj()
{	
	/*****Globaly Defined Variables****/
	var win_var=300;
	var count;
	var old_Key=39;
	var arr_Dir=[];
	var myVar;
	var myVar_Up;
	var myVar_Left;
	var myVar_Down;
	this.create_gameArea=create_gameArea;
	this.snake_Movement_Right=snake_Movement_Right;
	this.snake_Movement_Left=snake_Movement_Left;
	this.snake_Movement_Up=snake_Movement_Up;
	this.snake_Movement_Down=snake_Movement_Down;
	this.start_Snake_Game=start_Snake_Game;
	this.on_KeyPress=on_KeyPress;
	var block_Size=15;
	var size=block_Size;
	this.genrate_Food=genrate_Food;
	this.in_It_snake=in_It_snake;
	//this.start_game=start_game;
	
	/*************Range of I(row) values form 0-14 For Snake*****************/
	var minValueI=0; 
	var maxValueI=10;
	var randomI; 
				
	/*************Range of J(Column) values form 0-14 For Snake*****************/	
	var minValueJ=0; 
	var maxValueJ=10;
	var randomJ;
	var z;
	/**************Id of Each block for Retrival****************/
		
		
	
	/*************Range of I(row) values form 0-14 For Food*****************/
	var minVal_Food=0; 
	var maxVal_Food=14;
	var randomFI =Math.floor(Math.random() * (+maxVal_Food - +minVal_Food)) + +minVal_Food; 
				
	/*************Range of J(Column) values form 0-14 For Food*****************/	
	var minVal_Food=0; 
	var maxValue_Food=14;
	var randomFJ =Math.floor(Math.random() * (+maxValue_Food - +minVal_Food)) + +minVal_Food;
	var f=randomFI+'_'+randomFJ;
	
	/************************This function will add blocks dynamically*********************************/
	/************************This function will add blocks and ids dynamically*********************************/
	function create_gameArea()
	{	
		count=0;
		
		$('#Score_val').text("0");
		clear_Feilds();
		var size = block_Size;
		for (var i = 0; i < size; i++) 
		{
			for (var j = 0; j < size; j++) 
			{
				$("#playArea").append('<div id="'+i+'_'+j+'" class="block"></div>');
			}
		}

	}//function create_gameArea()ends here...

	/****************************************Snake movemnet defind in this below functions**************************************/
	/**************Snake movement for Right Direction********************/
	function snake_Movement_Right()
	{
		myVar=setInterval(function()//setInterval for right Direction
		{
				
			randomJ++;
			var z1=randomI+'_'+randomJ;
			for(var i=0;i<arr_Dir.length;i++)
			{
				if(arr_Dir[i]==z1)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').text("Ooops Game Over!");
					
					clear_Feilds();
					clearInterval(myVar);
					clearInterval(myVar_Up);
					clearInterval(myVar_Left);
					clearInterval(myVar_Down);
				}
			}
			if(z1==f)
			{
				arr_Dir.push(f);
				$('#'+f).css("background","black");
				count+=10;

				$('#Score_val').text(count);
				
				if(count==win_var)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').css("color","green");
					$('#Error').text("Congratz you won!");
					
					clear_Feilds();
					clearInterval(myVar);
					clearInterval(myVar_Up);
					clearInterval(myVar_Left);
					clearInterval(myVar_Down);
				}
					
				genrate_Food();
				
			}
			else
			{
				arr_Dir.push(z1);
				$('#'+arr_Dir.shift()).css("background","#fff");
				$('#'+z1).css("background","black");
				
			}
			if(randomJ==15)
			{
				$('.overlaywindow').css("display","block");
				$('.popupbox').css("display","block");
				$('#Error').text("Ooops Game Over!");
				
				clear_Feilds();
				clearInterval(myVar);
				clearInterval(myVar_Up);
				clearInterval(myVar_Left);
				clearInterval(myVar_Down);
			}
	
		},500);
			/************this feild will get call before interval starts****************/
			randomJ++;
			var z1=randomI+'_'+randomJ;
			for(var i=0;i<arr_Dir.length;i++)
			{
				if(arr_Dir[i]==z1)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').text("Ooops Game Over!");
						
					clear_Feilds();
					clearInterval(myVar);
					clearInterval(myVar_Up);
					clearInterval(myVar_Left);
					clearInterval(myVar_Down);
				}
			}
			if(z1==f)
			{
					
				arr_Dir.push(f);
				$('#'+f).css("background","black");
				count+=10;
				$('#Score_val').text(count);
				
				if(count==win_var)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').css("color","green");
					$('#Error').text("Congratz you won!");
					
					clear_Feilds();
					clearInterval(myVar);
					clearInterval(myVar_Up);
					clearInterval(myVar_Left);
					clearInterval(myVar_Down);
					
				}
					genrate_Food();
			}
			else
			{
				arr_Dir.push(z1);
				$('#'+arr_Dir.shift()).css("background","#fff");
				$('#'+z1).css("background","black");
				
			}
			if(randomJ==15)
			{
				$('.overlaywindow').css("display","block");
				$('.popupbox').css("display","block");
				$('#Error').text("Ooops Game Over!");
						
				clear_Feilds();
				clearInterval(myVar);
				clearInterval(myVar_Up);
				clearInterval(myVar_Left);
				clearInterval(myVar_Down);
			}
						
		}//function for movment of snake to right ends here...
		
		/*******************************This Code is for testing purpose*****************************************/
		/*myVar=setInterval(function()
		{
			var z=randomI+'_'+(parseInt(randomJ)+1);
			$('#'+z).css("background","black");
			if(count==1){
				var z1=randomI+'_'+randomJ;
				$('#'+z1).css("background", "");
			}
			var x=(parseInt(randomJ)+1);
			randomJ=x;
		},1000);
										

		//if(z==f)
		//{	
											
			//count++;
			/*alert("hello");
			var arr1=[];
			arr1.push(z);
			alert(z);
			var z1=randomI+'_'+(parseInt(randomJ)+1);
			arr1.push(z1);
			var z2=randomI+'_'+(parseInt(randomJ)+2);
			arr1.push(z2);
			alert(arr1); 
			//arr1.pop();
			//z=arr1[0];
			//$('#'+z).css("background","black");
			z1=arr1[1];
			$('#'+z1).css("background","black");
			z2=arr1[2];
			$('#'+z2).css("background","black");
			$('#'+z2).prev().css("background","");
												
			//11_5 , 11_6
			//z=randomI+'_'+randomJ;
			//var z=arr1[0];
												
			//$('#'+z).css("background","black");
			//var z1=randomI+'_'+randomJ;
			//var z1=arr1[1];
			//$('#'+z1).css("background","black");
			//$('#'+z).prev().css("background","none");
			*/
	/**************Snake movement for Right Direction********************/								
	function snake_Movement_Left()
	{		
				
		myVar_Left=setInterval(function()
		{
			randomJ--;
			var z1=randomI+'_'+randomJ;
			for(var i=0;i<arr_Dir.length;i++)
			{
				if(arr_Dir[i]==z1)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').text("Ooops Game Over!");
						
					clear_Feilds();
					clearInterval(myVar_Left);
					clearInterval(myVar_Up);//up
					clearInterval(myVar);//right
					clearInterval(myVar_Down);//down
				}
			}
			if(z1==f)
			{
				arr_Dir.push(f);
				$('#'+f).css("background","black");
				count+=10;
				$('#Score_val').text(count);
				if(count==win_var)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').css("color","green");
					$('#Error').text("Congratz you won!");
						
					clear_Feilds();
					clearInterval(myVar);
					clearInterval(myVar_Up);
					clearInterval(myVar_Left);
					clearInterval(myVar_Down);
					
				}
					genrate_Food();
				
			}
			else
			{
				arr_Dir.push(z1);
				$('#'+arr_Dir.shift()).css("background","#fff");
				$('#'+z1).css("background","black");
			}
			if(randomJ<0)
			{
				$('.overlaywindow').css("display","block");
				$('.popupbox').css("display","block");
				$('#Error').text("Ooops Game Over!");
				
				clear_Feilds();
				clearInterval(myVar_Left);
				clearInterval(myVar_Up);//up
				clearInterval(myVar);//right
				clearInterval(myVar_Down);//down
			}
	
		},500);
				randomJ--;
				var z1=randomI+'_'+randomJ;
				for(var i=0;i<arr_Dir.length;i++)
				{
					if(arr_Dir[i]==z1)
					{
						$('.overlaywindow').css("display","block");
						$('.popupbox').css("display","block");
						$('#Error').text("Ooops Game Over!");
						
						
						clear_Feilds();
						clearInterval(myVar_Left);
						clearInterval(myVar_Up);//up
						clearInterval(myVar);//right
						clearInterval(myVar_Down);//down
						
					}
				}
				if(z1==f)
				{
					arr_Dir.push(f);
					$('#'+f).css("background","black");
					count+=10;
					$('#Score_val').text(count);
					if(count==win_var)
					{
						$('.overlaywindow').css("display","block");
						$('.popupbox').css("display","block");
						$('#Error').css("color","green");
						$('#Error').text("Congratz you won!");
						
						clear_Feilds();
						clearInterval(myVar);
						clearInterval(myVar_Up);
						clearInterval(myVar_Left);
						clearInterval(myVar_Down);
					
					}
					genrate_Food();
				
				}
				else
				{
					arr_Dir.push(z1);
					$('#'+arr_Dir.shift()).css("background","#fff");
				
					$('#'+z1).css("background","black");
				}
				if(randomJ<0)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').text("Ooops Game Over!");
					
					clear_Feilds();
					clearInterval(myVar_Left);
					clearInterval(myVar_Up);//up
					clearInterval(myVar);//right
					clearInterval(myVar_Down);//down
						
				
				}
		//$('#'+arr_Dir).css("background","black");
						
		
	
	}
	/**************Snake movement for Up Direction********************/								
	function snake_Movement_Up()
	{
				
		myVar_Up=setInterval(function()
		{
						
			randomI--;
			var z1=randomI+'_'+randomJ;
			for(var i=0;i<arr_Dir.length;i++)
			{
				if(arr_Dir[i]==z1)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').text("Ooops Game Over!");
						
					clear_Feilds();
					clearInterval(myVar_Up);
					clearInterval(myVar);
					clearInterval(myVar_Left);
					clearInterval(myVar_Down);
					
				}
			}
			if(z1==f)
			{
				//alert("hello");
				arr_Dir.push(f);
				$('#'+f).css("background","black");
				count+=10;
				$('#Score_val').text(count);
				if(count==win_var)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').css("color","green");
					$('#Error').text("Congratz you won!");
						
					clear_Feilds();
					clearInterval(myVar);
					clearInterval(myVar_Up);
					clearInterval(myVar_Left);
					clearInterval(myVar_Down);
					
				}
				genrate_Food();
			}
			else
			{
				arr_Dir.push(z1);
				$('#'+arr_Dir.shift()).css("background","#fff");
				$('#'+z1).css("background","black");
			}
			if(randomI<0)
			{
				$('.overlaywindow').css("display","block");
				$('.popupbox').css("display","block");
				$('#Error').text("Ooops Game Over!");
				
				clear_Feilds();
				clearInterval(myVar_Up)
				clearInterval(myVar);
				clearInterval(myVar_Left);
				clearInterval(myVar_Down);
				
			}
						
		},500);
				
		randomI--;
		var z1=randomI+'_'+randomJ;
		for(var i=0;i<arr_Dir.length;i++)
		{
			if(arr_Dir[i]==z1)
			{
				$('.overlaywindow').css("display","block");
				$('.popupbox').css("display","block");
				$('#Error').text("Ooops Game Over!");
				
				clear_Feilds();
				clearInterval(myVar_Up);
				clearInterval(myVar);
				clearInterval(myVar_Left);
				clearInterval(myVar_Down);
					
			}
		}
		if(z1==f)
		{
			arr_Dir.push(f);
			$('#'+f).css("background","black");
			count+=10;
			$('#Score_val').text(count);
			if(count==win_var)
			{
				$('.overlaywindow').css("display","block");
				$('.popupbox').css("display","block");
				$('#Error').css("color","green");
				$('#Error').text("Congratz you won!");
				
				clear_Feilds();
				clearInterval(myVar);
				clearInterval(myVar_Up);
				clearInterval(myVar_Left);
				clearInterval(myVar_Down);
					
			}
			genrate_Food();
		}
		else
		{
			arr_Dir.push(z1);
			$('#'+arr_Dir.shift()).css("background","#fff");
				
			$('#'+z1).css("background","black");
		}
		if(randomI<0)
		{
			$('.overlaywindow').css("display","block");
			$('.popupbox').css("display","block");
			$('#Error').text("Ooops Game Over!");
			
			clear_Feilds();
			clearInterval(myVar_Up);
			clearInterval(myVar);
			clearInterval(myVar_Left);
			clearInterval(myVar_Down);
				
		}
	
	}//up interval clear

	/**************Snake movement for Down Direction********************/								
	function snake_Movement_Down()
	{
				
		myVar_Down=setInterval(function()
		{
			//randomI--;
			randomI++;
			var z1=randomI+'_'+randomJ;
			for(var i=0;i<arr_Dir.length;i++)
			{
				if(arr_Dir[i]==z1)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').text("Ooops Game Over!");
					
					clear_Feilds();
					clearInterval(myVar_Down);
					clearInterval(myVar_Up);
					clearInterval(myVar_Left);
					clearInterval(myVar);
				}
			}
			if(z1==f)
			{
		
				arr_Dir.push(f);
				$('#'+f).css("background","black");
				count+=10;
				$('#Score_val').text(count);
				if(count==win_var)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').css("color","green");
					$('#Error').text("Congratz you won!");
					
					clear_Feilds();
					clearInterval(myVar);
					clearInterval(myVar_Up);
					clearInterval(myVar_Left);
					clearInterval(myVar_Down);
					
				}
				genrate_Food();
			}
			else
			{
				arr_Dir.push(z1);	
				$('#'+arr_Dir.shift()).css("background","#fff");
				
				$('#'+z1).css("background","black");
			}
			if(randomI==15)
			{
				$('.overlaywindow').css("display","block");
				$('.popupbox').css("display","block");
				$('#Error').text("Ooops Game Over!");
				
				clear_Feilds();
				clearInterval(myVar_Down);
				clearInterval(myVar_Up);
				clearInterval(myVar_Left);
				clearInterval(myVar);
				
			}
						
		},500);
		
			randomI++;
			var z1=randomI+'_'+randomJ;
			for(var i=0;i<arr_Dir.length;i++)
			{
				if(arr_Dir[i]==z1)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').text("Ooops Game Over!");
					
					clear_Feilds();
					clearInterval(myVar_Down);
					clearInterval(myVar_Up);
					clearInterval(myVar_Left);
					clearInterval(myVar);
						
					
				}
			}
			if(z1==f)
			{
				//alert("hello");
				arr_Dir.push(f);
				$('#'+f).css("background","black");
				count+=10;
				$('#Score_val').text(count);
				if(count==win_var)
				{
					$('.overlaywindow').css("display","block");
					$('.popupbox').css("display","block");
					$('#Error').css("color","green");
					$('#Error').text("Congratz you won!");
					
					clear_Feilds();
					clearInterval(myVar);
					clearInterval(myVar_Up);
					clearInterval(myVar_Left);
					clearInterval(myVar_Down);
					
				}
					genrate_Food();
			}
			else
			{
				arr_Dir.push(z1);
				$('#'+arr_Dir.shift()).css("background","#fff");
				$('#'+z1).css("background","black");
				
			}
			if(randomI==15)
			{
				$('.overlaywindow').css("display","block");
				$('.popupbox').css("display","block");
				$('#Error').text("Ooops Game Over!");
				
				clear_Feilds();
				clearInterval(myVar_Down);
				clearInterval(myVar_Up);
				clearInterval(myVar_Left);
				clearInterval(myVar);
				
			}
	}//down function
	/*************************Function for generating snake food**********************************/
	function genrate_Food()
	{			
		food_Snake_Creation();
		//f=randomFI+'_'+randomFJ;
		$('#'+f).css("background","red");
	
	}/*******food and snake id is getting generated*********/
	function food_Snake_Creation()
	{
		randomFI =Math.floor(Math.random() * (+maxVal_Food - +minVal_Food)) + +minVal_Food; 
		randomFJ =Math.floor(Math.random() * (+maxValue_Food - +minVal_Food)) + +minVal_Food;
				
		f=randomFI+'_'+randomFJ;
		for(var i=0;i<arr_Dir.length;i++)
		{
			if(arr_Dir[i]==f)
			{
				
				food_Snake_Creation();
				break;
			}
		}
	
	}
	

/************ This code is added only for testing purpose********************/
	
	
		/*$("body").keydown(function(e){
			for(var i=0;i<size;i++)
			{
				
				for(var j=0; j<size; j++)
				{
					if(e.keyCode == 38) 
					{ 		
						if(randomI==i && randomJ==j)
						{
							
							
						    setInterval(function()
							{
										/*randomI--;
										var z=randomI+'_'+randomJ;
										alert("Z when loop started"+z);
										$('#'+z).css("background","black");
										$('#'+z).prev().css("background", "" );
									    
								randomI--;
								var z=randomI+'_'+randomJ;
								$('#'+z).css("background","black");
								$('#'+z).prev().css("background", "" );
								
							},1000);
						}	
					}
					
				}
			}

		
		)};*/
		
		


/************ Onkeypress evnet triggered will allow you to move back and forth up and down ******************/
	function on_KeyPress()
	{
		$(document).keydown(function(e) 
		{
			var new_keyCode;
			
			if(old_Key==e.keyCode)
			{

				
			}
			else
			{	
				//left direction
				if(e.keyCode == 37 && old_Key != 39)
				{	
					
						old_Key=e.keyCode;
						
						clearInterval(myVar_Up);//up
						clearInterval(myVar);//right
						clearInterval(myVar_Down);//down
						snake_Movement_Left();	
				} 
				//up direction
				else if(e.keyCode == 38 && old_Key != 40)
				{	
						old_Key=e.keyCode;

						clearInterval(myVar);
						clearInterval(myVar_Left);
						clearInterval(myVar_Down);
						snake_Movement_Up();
					

					//flag=0;
				}// right direction
				else if(e.keyCode == 39 && old_Key != 37) 
				{ 
						
						old_Key=e.keyCode;
						clearInterval(myVar_Up);
						clearInterval(myVar_Left);
						clearInterval(myVar_Down);
						snake_Movement_Right();
				}
				//down direction
				else if(e.keyCode == 40 && old_Key != 38) 
				{ 
					old_Key=e.keyCode;
					clearInterval(myVar_Up);
					clearInterval(myVar_Left);
					clearInterval(myVar);
					snake_Movement_Down();
				}

			}	
		});
	}/*****************function to set Snake Values/Snake color**************************/
	function in_It_snake()
	{
		randomJ =Math.floor(Math.random() * (+maxValueJ - +minValueJ)) + +minValueJ; 
		randomI =Math.floor(Math.random() * (+maxValueI - +minValueI)) + +minValueI;
		z=randomI+'_'+randomJ;
		$('#'+z).css("background","black");
		arr_Dir.push(z);
	}
	function clear_Feilds()
	{	
		//count=0;
		
		//$('#Score_val').text(" ");
		$("#playArea").empty();
		
		clearInterval(myVar_Up);
		clearInterval(myVar_Left);
		clearInterval(myVar_Down);
		clearInterval(myVar);
		
		old_Key=39;
		arr_Dir=[];
	
	
	}

	/**********************Main calling Function for Snake game***************************/
	/***********************From this function you can make call to other function*******************************************************/

	function main_Game_loop()
	{	
		create_gameArea();
		in_It_snake();
		genrate_Food();
		on_KeyPress();
		snake_Movement_Right();
			
	}
	function start_Snake_Game()
	{
		$('#Win').text(" ");
		$('#Error').text(" ");
		main_Game_loop();
	}
		this. overlayStop = overlayStop;
	function overlayStop()
	{
		$(".popupbox").css("display","none");
		$(".overlaywindow").css("display","none");
		$('#Score_val').text("0");

	}

	
}//Main function ends here...


/********* Document Ready function*************/

$( document ).ready(function() {
    console.log( "ready!" );
	
	});

