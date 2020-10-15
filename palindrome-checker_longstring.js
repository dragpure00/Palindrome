function palindrome(str) {

var f= 0; //this is variable is set to 0 and to be increment 
var b=str.length-1; //this variable for str written in reverse.
    while(b>f){// 
  if(str[f].match(/[\W_]/))//loop to match word characters
  {
    f++;
    continue;
  }
if(str[b].match(/[\W_]/))
{ 
    b--;
    continue;
}

if(str[f].toLowerCase()!==str[b].toLowerCase())//loop to display palindrome
  return false;

  f++;
  b--;

  }
  return true;
}



palindrome("eye");
