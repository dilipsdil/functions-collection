<script type="text/javascript" >
//used to display one element from multiple on the same page.
//this will display one element while hiding all others in the same group.
//the group is defined as an array
//TODO find a way of sending Array from the function call rather than difining in the function
function showOneFromGroup(id) {

	var idArray = ["main_table_income","main_table_client","main_table_ctl","main_table_non"];

	for(i = 0; i< idArray.length ; i++){
		if(id==idArray[i]){
		document.getElementById(idArray[i]).style.display = 'block';
		}
		else{
		document.getElementById(idArray[i]).style.display = 'none';
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
for (i = 0; i < field.length; i++)
	field[i].checked = true ;
	document.getElementById(button]).value = "Un-Check All""
}

function uncheckAll(field)
{
for (i = 0; i < field.length; i++)
	field[i].checked = false ;	
	document.getElementById(button]).value = "Check All""
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
