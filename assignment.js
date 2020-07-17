 // Feet To Mile Converter 
 function feetToMile(feet){
    // checks whether the feet is valid or not. 
    if(feet<0 || feet == undefined){
		return 0;
	} 
	else{
	return 0.00018939393 * feet; 
	}
 }
 
 // woodCalculator function.
 function woodCalculator(chair, table, bed){
	 
    /* If the value of any variable is less than 0(zero) or equal to undefined then the isValid function will set its value to 0.*/
    const isValid = (value) => {
	if(value < 0 || value == undefined){
	    return 0;
	  }
	else{
		return value;  
	  }
    }
	
    chair = isValid(chair);
	table = isValid(table);
	bed = isValid(bed);
	
	return chair + (table*3) + (bed*5) ; // return amount of wood in cubic feet.
 }

 
 // brickCalculator function.
 
 function brickCalculator(numberOfFloors){
	if(numberOfFloors <= 0 || numberOfFloors == undefined){
		return 0;
	}
	else{
      if(numberOfFloors<=10){
		  return numberOfFloors*15*1000;
	  }   
	  else if(numberOfFloors >= 11 && numberOfFloors <= 20){
		  return (10*15*1000) + ((numberOfFloors-10)*12*1000);
	  }
	  else{
		  return (10*15*1000) + (10*12*1000) + ((numberOfFloors-20)*10*1000); 
	  }
    }
 }
 
 // tinyFriend function
 function tinyFriend(friendlist){
	 if(friendlist.length == 0){
		 return 'The array is empty!';
	 }
	 else{
		 var smallestName = friendlist[0];
		 for(var i=1; i < friendlist.length; i++){
			 if( friendlist[i].length < smallestName.length){
				 smallestName = friendlist[i];
			 }
		 }
		 return smallestName;
	 }
 }


 

