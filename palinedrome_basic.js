function palindrome(str) {
var p = str.replace(/[\W_]/gi,'').toLowerCase();
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
