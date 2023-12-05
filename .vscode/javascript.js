{/* <html>  
<head> Javascript Events </head>  
<body>  
<script language="Javascript" type="text/Javascript">  
    
    function clickevent()  
    {  
        document.write("This is me");  
    }  
     
</script>  
<form>  
<input type="button" onclick="clickevent()" value="Who's this?"/>  
</form>  
</body>  
</html> */}


{/* <html> 
<head>  
<h1> Javascript Events </h1> 
</head> 
<body> 
<script language="Javascript" type="text/Javascript"> 
	 
	function mouseoverevent() 
	{ 
		alert("This is my world"); 
	} 
	 
</script> 
<p onmouseover="mouseoverevent()"> Keep cursor over me</p> 
</body> 
</html> */}

{/* <html>   
<head> Javascript Events</head>   
<body>   
<h2> Enter something here</h2>   
<input type="text" id="input1" onfocus="focusevent()"/>   
<script>   
 
    function focusevent()   
    {   
        document.getElementById("input1").style.background=" aqua";   
    }   
</script>   
</body>   
</html>
 */}



<html>   
<head> Javascript Events</head>   
<body>   
<h2> Enter something here</h2>   
<input type="text" id="input1" onkeydown="keydownevent()"/>   
<script>   
    function keydownevent()   
    {   
        document.getElementById("input1");   
        alert("Pressed a key");   
    }   
 
</script>   
</body>   
</html>