function palindrome(str) {

var f= 0;
var b=str.length-1;
    while(b>f){
  if(str[f].match(/[\W_]/))
  {
    f++;
    continue;
  }
if(str[b].match(/[\W_]/))
{ 
    b--;
    continue;
}

if(str[f].toLowerCase()!==str[b].toLowerCase())
  return false;

  f++;
  b--;

  }
  return true;
}



palindrome("eye");
