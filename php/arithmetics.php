<?php 


//array key have to match 
//$a & $b are arrays
function add_array($a, $b) {
  $return = array();
  if(!isset($a)&&!isset($b)){
  	$return = null;
	}
	elseif(!isset($a)){
		$return = $b;
	}
	elseif(!isset($main_array[$b])){
		$return = $a;
	}
	else{	
		foreach($a as $key=>$data) {
			$return[$key] = $data + $b[$key];
		}
	}
	return $return;
}

//Table multiple arrays and sums up the values
//array key have to match
function sum_array() {
	$return = array();
	$intArgs = func_num_args();
	$arrArgs = func_get_args();
	if($intArgs < 1) trigger_error('Warning: Wrong parameter count for sum_array()', E_USER_WARNING);

	foreach($arrArgs as $arrItem) {
		if(!is_array($arrItem)) trigger_error('Warning: Wrong parameter values for sum_array()', E_USER_WARNING);
		foreach($arrItem as $k => $v) {
			if(isset($return[$k]))
				$return[$k] += $v;
				else
				$return[$k] = $v;
		}
	}
	return $return;
}


//first and last array order matters
function minus_array($a, $b) {
	$return = array();
	if(!isset($a)&&!isset($b)){
		$return = null;
	}
	elseif(!isset($a)){
		$return = $b;
	}
	elseif(!isset($main_array[$b])){
		$return = $a;
	}
	else{	
		foreach($a as $key=>$data) {
			$return[$key] = $data - $b[$key];
		}
	}
	return $return;
}

function multiply_array($a, $b) {
	$return = array();
	if(!isset($a)){
		$return = null;
	}
	elseif(!isset($main_array[$b])){
		$return = null;
	}
	else{	
		foreach($a as $key=>$data) {
			$return[$key] = $data * $b[$key];
		}
	}
	return $return;
}

//first and last array order matters
function divide_array($a, $b) {
	$return = array();
	if(!isset($a)){
		$return = null;
	}
	elseif(!isset($b)){
		$return = null;
	}
	else{	
		foreach($a as $key=>$data) {
			if($b[$key]==0){
				$return[$key] = 0;
			}
			else{
			$return[$key] = $data / $b[$key];
			}
		}
	}
	return $return;
}

//used to divide/multiple all values with a constant
function divide_array_constant($array, $value) {
	$return = array();
	if(!isset($array)){
		$return = null;
	}
	else{	
		foreach($array as $key=>$data) {		
			$return[$key] = $data / $value;		
		}
	}
	return $return;
}

function multiply_array_constant($array, $value) {
	$return = array();
	if(!isset($array)){
		$return = null;
	}
	else{	
		foreach($array as $key=>$data) {		
			$return[$key] = $data * $value;		
		}
	}
	return $return;
}
