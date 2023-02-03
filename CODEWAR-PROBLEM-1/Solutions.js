//Q1:
//Solution-1:

function bouncingBall(h,  bounce,  w) {
const condition = h>0 && (bounce>0 && bounce<1) && w<h ;

if(condition)
{
  return h<w ? -1 : 2 + bouncingBall((h*bounce) , bounce , w)
}else
{
  return -1;
}
}


// Solution-2

function bouncingBall(h,  bounce,  window) {
  if (h <= 0.0 || bounce <= 0.0 || bounce >= 1.0 || window >= h) {
    return -1;
  }
  
  let views = 1;
  while ((h *= bounce) > window) {
    views += 2;
  }
  return views;
}

//----------------------------------------------------------------------------------------------------------------------------------------------------

//Q2
//solution:

function count (string) {  
  var count = {};
    string.split('').forEach(function(s){
      count[s] ? count[s]++ : count[s]=1
    })
    return count;
  }