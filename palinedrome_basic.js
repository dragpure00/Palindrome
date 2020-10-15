function palindrome(str) {
var p = str.replace(/[\W_]/gi,'').toLowerCase();// this is get rid of any nonword char and replace with space
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
//same method of finding palindrome except its useful for short strings
