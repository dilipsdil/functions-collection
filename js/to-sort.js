<script type="text/javascript" >
/*used to display one element from multiple on the same page.
this will display one element while hiding all others in the same group.
the group is defined as an array
the PHP code below shows how it can be implemented
this code just shows implemtation of selecting/link code
actual elements need to have the same id as the PHP array to make it work
*/
/*
<?php
$php_array = array(
		"idOne"=>"nameOne",
		"idTwo"=>"nameTwo",
		"idThree"=>"nameThree",
		);
//the array is fliped to get the keys as values and array_value will remove the keys to make it work with json_encode
echo "<script> getArrayFromHtml(" . json_encode(array_values(array_flip($php_array))) . ");</script>";
//use a for loop to print clickable links for selettion
foreach($php_array as $key=>$value){
?>			
	<div id='switch' > <a href="#" onclick="showOneFromGroup('<?php echo $key ; ?>'); return false;"><?php echo $value ; ?></a></div>
<?php
}
?>
*/

//defined outside of function to make it avaiable to both functions
var globalArray = new Array();

//get the array from function call and assign it to array
function getArrayFromHtml(array){
globalArray  = array;
}

//paramenter is the id of element to display
function showOneFromGroup(id) {;
	for(i = 0; i< globalArray.length ; i++){
		if(id==globalArray[i]){
		document.getElementById(globalArray[i]).style.display = 'block';
		}
		else{
		document.getElementById(globalArray[i]).style.display = 'none';
		}
	}
}	


//used to select/highlight html elements
//Example of use
//<h1 onclick="SelectContent('elementId'); return false;">

function SelectContent (elemId) {

	var elemToSelect = document.getElementById (elemId);

	if (window.getSelection) {  // all browsers, except IE before version 9
		var selection = window.getSelection ();
		var rangeToSelect = document.createRange ();
		rangeToSelect.selectNodeContents (elemToSelect);
		selection.removeAllRanges ();
		selection.addRange (rangeToSelect);
	}

	else if (document.body.createTextRange) {    // Internet Explorer// Internet Explorer before version 9
		var rangeToSelect = document.body.createTextRange ();
		rangeToSelect.moveToElementText (elemToSelect);
		rangeToSelect.select ();
	}

	else if (document.createRange && window.getSelection) {         
		range = document.createRange();             
		range.selectNodeContents(elemId);             
		sel = window.getSelection();     
		sel.removeAllRanges();             
		sel.addRange(range);              
	}  
}


//use for check boxes
//Example of use
//<input type="button" name="CheckAll"  id ="CheckBox" value="Check All" onClick="checkAll(document.formName.checkboxName[], "CheckBox")

function checkAll(field, button)
{
for (i = 0; i < field.length; i++){
	field[i].checked = true ;
	document.getElementById(button]).value = "Un-Check All";
}
}

function uncheckAll(field)
{
for (i = 0; i < field.length; i++){
	field[i].checked = false ;	
	document.getElementById(button]).value = "Check All";
}
}

//used to reload all images on the page at a given interval
setInterval(
	function() {
		var images = document.images;
		for (var i=0; i<images.length; i++) {
		images[i].src = images[i].src.replace(/\btime=[^&]*/, 'time=' + new Date().getTime());
		}
	}
	, 10000); // in ms = 1000 milliseconds = 1 seconds
</script>
