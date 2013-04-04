<script type="text/javascript" >
function showStuff(id) {
if(id=='main_table_income'){
    document.getElementById('main_table_income').style.display = 'block';
  document.getElementById('main_table_ctl').style.display = 'none';
	document.getElementById('main_table_non').style.display = 'none';
	//document.getElementById('switch').innerHTML = '<a href="#" onclick="showStuff(\'main_table_non\'); return false;">Switch Report</a>';
	}
	else if(id=='main_table_ctl'){
	  document.getElementById('main_table_income').style.display = 'none';
    document.getElementById('main_table_ctl').style.display = 'block';
	document.getElementById('main_table_non').style.display = 'none';
	//document.getElementById('switch').innerHTML = '<a href="#" onclick="showStuff(\'main_table_non\'); return false;">Switch Report</a>';
	}
	else{
	document.getElementById('main_table_income').style.display = 'none';
	document.getElementById('main_table_ctl').style.display = 'none';
	document.getElementById('main_table_non').style.display = 'block';
	//document.getElementById('switch').innerHTML = '<a href="#" onclick="showStuff(\'main_table_ctl\'); return false;">Switch Report</a>';
	}
}

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
</script>
