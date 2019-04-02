
var demo=new Demo();

function Demo()
{
		//this.focus=focus;
		this.isEmpty=isEmpty;
		this.checkBoxValid=checkBoxValid;
		this.firstName=firstName;
		this.lastName=lastName;
		this.mobNumber=mobNumber;
		this.emailId=emailId;
		this.address=address;
		this.date=date;
		this.pin=pin;
		this.pass=pass;
		this.confirmpass=confirmpass;
		this.firstNameAlpha=firstNameAlpha;
		this.lastNameAlpha=lastNameAlpha;
		this.numOnly=numOnly;
		this.numOnlyPin=numOnlyPin;
		this.validateRegForm=validateRegForm;
		this.popUp=popUp;
		this.loginPopUp=loginPopUp;
		this.loginemailId=loginemailId;
		this.loginpass=loginpass;
		this.validateRegForm1=validateRegForm1;
		this.errorHide=errorHide;
		this.errorHideforLogin=errorHideforLogin;
		this.resetRegForm=resetRegForm;
		this.resetLogForm=resetLogForm;
		this.bodyclick=bodyclick;
		this.RegisterForm=RegisterForm;
		//global regex for first Nmae and last name
		var regex=/^[a-zA-Z]{1,10}$/;
		var txt="";
		function firstName()
		{
			
			var fName=$("#name").val();
			if (isEmpty(fName) && regex.test(fName)) 
			{
				$("#name").css("border","none");
				return true;
			}  
			else 
			{
				$("#name").css("border","1px solid red");
				$("#ON").text("* Please enter valid name!");
				$("#ON").css("color", "red");
				return false;
            }
		
		}
		function lastName()
		{
			var lName=$("#lname").val();
			if (isEmpty(lName) && regex.test(lName) ) 
			{
				$("#lname").css("border", "none");
				return true;
			} 
			else 
			{	

				$("#lname").css("border", "1px solid red");
				$("#ON1").text("* Please enter valid name!");
				$("#ON1").css("color", "red");
				return false;
            
			}
		};
		//Checkbox validation
		function checkBoxValid()
		{
			var count=0;
			$("input:checkbox[name='Hobbies']").each(function()
			{
				if($(this).is(':checked'))
				{
					count++;
					
				}
			});
				if(count<0 || count==0)
				{
					$("#ON10").text("* please check atlst one Box");
					$("#ON10").css("color", "red");	
					return false;				
				}
				else
				{
					return true;
				}
			
		}
		//mobile number
		function mobNumber()
		{
			var mbNumber=$("#MbNum").val();
			var mbRegEx=/^[789]+[0-9]{9}$/;
			if(isEmpty(mbNumber)&& mbRegEx.test(mbNumber))
			{
				$("#MbNum").css("border", "none");
				$("#ON2").text("");
				return true;
			} 
			else 
			{	
				$("#MbNum").css("border", "1px solid red");
				$("#ON2").text("* please Enter valid Mobile Number");
				$("#ON2").css("color", "red");
				return false;
			}
		}//mob number
		function emailId()
		{
			var emailId=$("#emailID").val();
			var emailRegEx=/^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
			if(isEmpty(emailId)&& emailRegEx.test(emailId))
			{
				$("#emailID").css("border", "none");
				$("#ON3").text("");
				return true;
			} 
		else 
			{	
				$("#emailID").css("border", "1px solid red");
				$("#ON3").text("* Please Enter valid Email!");
				$("#ON3").css("color", "red");
				return false;
			}
		}//email
		function address()
		{
			var address=$("#Address").val();	
			if(isEmpty(address))
			{
				$("#Address").css("border", "none");
				$("#ON4").text("");
				return true;
			}
			else
			{
				$("#Address").css("border", "1px solid red");
				$("#ON4").text("* Address cant be blank!");
				$("#ON4").css("color", "red");
				return false;
			}
		}
		//address focus validation
		function date()
		{
			var date=$("#date").val();
			var dateRegEx=/(^(((0[1-9]|1[0-9]|2[0-8])[-](0[1-9]|1[012]))|((29|30|31)[-](0[13578]|1[02]))|((29|30)[-](0[4,6,9]|11)))[-](19|[2-9][0-9])\d\d$)|(^29[-]02[-](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
			if(isEmpty(date)&& dateRegEx.test(date))
			{
				$("#date").css("border", "none");
				$("#ON8").text("");
				return true;
			}
			else
			{
				$("#date").css("border", "1px solid red");
				$("#ON8").text("* Please enter Date!");
				$("#ON8").css("color", "red");
				return false;
			}
		}
		//date focus validation
		function pin()
		{
			var pin=$("#pin").val();
			var pinRegEx=/^[1-9][0-9]{5}$/
			if(isEmpty(pin)&& pinRegEx.test(pin))
			{
				$("#pin").css("border", "none");
				$("#ON5").text("");
				return true;
			} 
		else 
			{	
				$("#pin").css("border", "1px solid red");
				$("#ON5").text("* Please Enter your pin!");
				$("#ON5").css("color", "red");
				return false;
			}
		}
		//pin focus validation
		function pass()
		{
			var pass=$("#Pass").val();
			var passRegEx=/^[a-zA-Z]{3,5}?[_@]{1,2}[0-9]{2,3}$/;
			if(isEmpty(pass)&& passRegEx.test(pass))
			{
				$("#Pass").css("border", "none");
				$("#ON6").text("");
				return true;
			} 
		else 
			{	
				$("#Pass").css("border", "1px solid red");
				$("#ON6").text("* Please Enter your password!");
				$("#ON6").css("color", "red");
				return false;
			}
		}
		//ConfirmPass validation
		function confirmpass()
		{
			var pass=$("#Pass1").val();
			var passRegEx=/^[a-zA-Z]{3,5}?[_@]{1,2}[0-9]{2,3}$/;
			if(isEmpty(pass)&& passRegEx.test(pass))
			{
				$("#Pass1").css("border", "none");
				$("#ON7").text("");
				return true;
			} 
		else 
			{	
				$("#Pass1").css("border", "1px solid red");
				$("#ON7").text("* Please Enter your password!");
				$("#ON7").css("color", "red");
				return false;
			}
		}
		//Only Text Allowed for firstName
		function firstNameAlpha()
		{
			var key = event.keyCode;
			if (key > 31 && (key < 48 || key > 57)|| key==8 || key==9|| key==0)
			{
				$(".textFeild").css("border","none");
				$("#ON").text(" ");
				return true;
			}
			else
			{
				$("#ON").text("* Enter Characters Only!").css("color","red");
				$(".textFeild").css("border","1px solid red");
				return false;
			}
		
		}
		//alphabet input only for Lastname
		function lastNameAlpha()
		{
			var key = event.keyCode;
			if (key > 31 && (key < 48 || key > 57)|| key==8 || key==9|| key==0)
			{
				$(".textFeild1").css("border","none")
				$("#ON1").text(" ");
				return true;
			}
			else
			{
				$("#ON1").text("* Enter Characters Only!").css("color","red");
				$(".textFeild1").css("border","1px solid red")
				return false;
			        
			}
		};
	

		//Only Number Input for phone
		function numOnly()
		{
			var key = event.keyCode;
			//this.key=key;
			if(key < 31 && (key > 48 || key < 57)|| key==8 || key==9)
			{
				$(".numfeild").css("border","none");
				$("#ON2").text(" ");
				return true;
                    
			}
			if (key > 31 && (key < 48 || key > 57))
			{
				$("#ON2").text("* Enter number Only!").css("color","red");
				$(".numfeild").css("border","1px solid red");
				return false;
			}
        
		}
		//Number input for pin
		function numOnlyPin()
		{
			var key = event.keyCode;
			if(key < 31 && (key > 48 || key < 57)|| key==8 || key==9)
			{
				$(".numfeild1").css("border","none");
				$("#ON5").text(" ");
				return true;
                    
			}
			if (key > 31 && (key < 48 || key > 57))
			{
				$(".numfeild1").css("border","1px solid red");
				$("#ON5").text("* Enter number Only!").css("color","red");
				return false;
			}
        
		}
		function popUp()
		{
			$("#RegisterContainer").css("display","block");
			$("#Over").css("display","block");
			//$('div').not(".Registerdiv,.form,.container1").addClass("blurry")		
		
		}
		//Login Popup
		function loginPopUp()
		{
		
			$("#Over").css("display","block");
			$("#RegisterContainer1").css("display","block");
			//$("#Over").css("display","block","opacity","0.7");
			 
			//$('div').not(".Container1,.Registerdiv,.form,.Display,.DisplayDiv1").addClass("blurry")
			 

		}
		//Functions for login
		function loginemailId()
		{
			var emailId1=$("#emailID1").val();
			var emailRegEx=/^[a-zA-Z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
			if(isEmpty(emailId1)&& emailRegEx.test(emailId1))
			{
				$("#emailID1").css("border", "none");
				$("#ON13").text("");
				return true;
			} 
			else 
			{	
				$("#emailID1").css("border", "1px solid red");
				$("#ON13").text("* Please Enter valid Email!");
				$("#ON13").css("color", "red");
				return false;
			}
		}
		//Password
		function loginpass()
		{
			var pass2=$("#Pass2").val();
			var passRegEx=/^[a-zA-Z]{3,5}?[_@]{1,2}[0-9]{2,3}$/;
			if(isEmpty(pass2)&& passRegEx.test(pass2))
			{
				$("#Pass2").css("border", "none");
				$("#ON14").text("");
				return true;
			} 
		else 
			{	
				$("#Pass2").css("border", "1px solid red");
				$("#ON14").text("* Please Enter your password!");
				$("#ON14").css("color", "red");
				return false;
			}
		}
	
	//common Empty function
	function isEmpty(value)
	{
		if(value!="" && value!=null && value!=undefined)
		{
			return true;
		
		}
		else
		{
			return false;
		}
	}
	//hide error/delete png
	function errorHide()
	{
		$("#RegisterContainer").css("display","none");
		$("#Over").css("display","none");
		resetRegForm();
		resetLogForm();
	
	}
	//error png hide for Login
	function errorHideforLogin()
	{
	
		$("#RegisterContainer1").css("display","none");
		$("#Over").css("display","none");
		resetRegForm();
		resetLogForm();
	}
	


	//validateRegFormLogin		
	function validateRegForm1()
	{
		
		if((loginemailId())&&(loginpass()))
		{
			$("#hrishi1").css("display","none");
			$("#MainDisplay1").show();
			$("#Span15").text("You Have SuccessFully LoggedIn!").css("color","green");
			$("#Span16").text($("#emailID1").val());
			$("#Span17").text($("#Pass2").val());
			setTimeout(function(){$("#MainDisplay1").hide();}, 2000);//TimeOut 5 secs for Login after that popup will disappear
				return false;
		}
		else
		{
				return false;
		}
	}
	//Function if click on register button to validate all the feilds
	function validateRegForm()
	{
		if((firstName())&&(lastName())&&(checkBoxValid())&&(mobNumber())&&(emailId())&&(address())&&(date())&&(pin()))
		{		//For Gender Values
				var gender=$("input[name='gender']:checked").val();
				//For Checkboxes
				$("input:checkbox[name='Hobbies']").each(function(){
				
					if($(this).is(':checked'))
					txt+=$(this).val();
				
				})
				
				//For Password match Validation
				var pass=$("#Pass").val();
				var pass1=$("#Pass1").val();
				if(pass==pass1)
				{
					//return false;
				}
				else
				{
					$("#ON7").text("* Password does not match!").css("color","red");
					$("#pass1").css("border","1px solid red");
					return false;
				}
				//for City Values
				var City=$("#Select").val();
				
				$("#hrishi").css("display","none");
				$("#MainDisplay").show();
				$("#Span12").text("You Have SuccessFully Registered!").css("color","green");
				$("#Span").text($("#name").val());
				$("#Span1").text($("#lname").val());
				$("#Span2").text(gender);
				$("#Span3").text(txt);
				$("#Span4").text($("#MbNum").val());
				$("#Span5").text($("#emailID").val());
				$("#Span6").text($("#Address").val());
				$("#Span7").text($("#Select").val());
				$("#Span8").text($("#date").val());
				$("#Span9").text($("#pin").val());
				$("#Span10").text($("#Pass").val());
				$("#Span11").text($("#Pass1").val());
				setTimeout(function(){$("#MainDisplay").hide();}, 2000);////TimeOut 5 secs for Login after that popup will disappear;

				
					return false;
		
		}
		else
		{
			return false;
			
		}
	
	}
	//Function to clear All Errors registration form
	function resetRegForm()
	{
		$("#reset").closest('form').find("input[type=text], textarea").val("");
		$("#reset").closest('form').find("input[type=password], textarea").val("");
		$("#reset").closest('form').find("input[type=text], textarea").css("border","none");
		$("#reset").closest('form').find("input[type=password], textarea").css("border","none");
		$(".Span").hide();
	}
	//function clear All Errors login Form
	function resetLogForm()
	{
		$("#reset1").closest('form').find("input[type=text], textarea").val("");
		$("#reset1").closest('form').find("input[type=password], textarea").val("");
		$("#reset1").closest('form').find("input[type=text], textarea").css("border","none");
		$("#reset1").closest('form').find("input[type=password], textarea").css("border","none");
		$(".Span").hide();
	}
	//bodyclick blurr
	function bodyclick()
	{	
		if (!$(event.target).closest('#register').length) 
		{
			$("#Over").css("display","none");
			$('#RegisterContainer').hide();
			$('#RegisterContainer1').hide();
			resetRegForm();
			resetLogForm();
			
		}
		else 
		{
			$("#Over").css("display","block");	
			$('#RegisterContainer').show();
			$('#RegisterContainer1').show();
			 
		}
		if (!$(event.target).closest('#login').length) 
		{
			$("#over").css("display","none");
			$('#RegisterContainer').hide();
			$('#RegisterContainer1').hide();
			resetRegForm();
			resetLogForm();
			
		}
		else 
		{
				$("#Over").css("display","block");
				$('#RegisterContainer').show();
				$('#RegisterContainer1').show();
				
		}
		
	}
	function RegisterForm ()
	{

			
			event.stopPropagation();
	}
   


}//main function of class Demo ends
