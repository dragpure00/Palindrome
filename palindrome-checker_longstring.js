function palindrome(str) {

var f= 0; //forward variable for displaying str forward. 0 assigned as the default value
var b=str.length-1; //backward variable for displaying str backwards. str.length represent as the last letter in str
    while(b>f){//if the value of the array matches any non word character then f increments and continues to next iteration
  if(str[f].match(/[\W_]/))
  {
    f++;
    continue;
  }
if(str[b].match(/[\W_]/))//if the value of the array matches any non word character then b decrements and continues to the next ieration
{ 
    b--;
    continue;
}

if(str[f].toLowerCase()!==str[b].toLowerCase())// if str[f] does not equal str[b] (both lowercase) returns false 
  return false;

  f++;
  b--;
//otherwise program displays both f and b.
  }
  return true;
}



palindrome("eye");
