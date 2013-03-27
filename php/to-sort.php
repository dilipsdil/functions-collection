<?php

//to sort later

function american_to_european_date($strDate){
  trim($strDate);
	$new_date = str_replace('/', '-', $strDate);
	$europeanDate =date("d-M-Y", strtotime($new_date));
	return $europeanDate;
}


function print_r_html($array){
echo "<pre>" . print_r($array, true) . "</pre>";
}
