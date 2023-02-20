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


  //=====================================================================================================================

  //Q3
  //sol:
  function score( dice ) {
    // get array of counts of each numberlet countNumber = [];
      let score = 0;
      for(i=0; i<6; i++){
         countNumber[i] = dice.filter(element => element == (i+1)).length;
      }
    // function for 1, 5function doubleEvent(array, i, big, small) {
        if(array[i]>=3) {
          score+=big;
          countNumber[i] = countNumber[i] - 3;
        }
        score+=countNumber[i] * small;
      }
    
    // function for restfunction soleEvent(array, i, reward) {
        if(array[i]>=3) {
          score+=reward;
        }
      }
    
      doubleEvent(countNumber, 0, 1000, 100);
      doubleEvent(countNumber, 4, 500, 50);
      soleEvent(countNumber, 1, 200);
      soleEvent(countNumber, 2, 300);
      soleEvent(countNumber, 3, 400);
      soleEvent(countNumber, 5, 600);
    
      return score;
    }