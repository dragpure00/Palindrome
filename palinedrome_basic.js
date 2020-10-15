function palindrome(str) {// same method as you would check for long strings except using the replace method to replace any nonword charactter as space
var p = str.replace(/[\W_]/gi,'').toLowerCase();//This is only useful if you want to check for short strings.
var forward=0;
var back = p.length-1;
  while(back>forward){
    var charf=p.charAt(forward++);
    var charb=p.charAt(back--);
 if(charf!=charb){
    return false
        }
    }
  return true;
}
