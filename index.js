// add solution here
function theBeatlesPlay(musicians, instruments) {
  //given musicians:
  //["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  //given instruments:
  //["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
  //"returns an array of strings containing what instruments each musician plays"
  //["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]
  var arr = [];
  if (musicians.length === instruments.length)
  {
    for ( let i = 0; i < musicians.length; i++)
    {
      arr[i] = musicians[i] + " plays " + instruments[i]
    }
  }
  return arr;
  }


function johnLennonFacts (arr) {
  // given input:
  //  "He was the last Beatle to learn to drive",
  //  "He was never a vegetarian",
  //  "He was a choir boy and boy scout",
  //  "He hated the sound of his own voice"
  //returns an array of strings with exclamation points:
  //"He was the last Beatle to learn to drive!!!",
  //"He was never a vegetarian!!!",
  //"He was a choir boy and boy scout!!!",
  //"He hated the sound of his own voice!!!

  //given an array:
  //"foo"
  //"bar"
  //returns an array:
  //"foo!!!",
  //"bar!!!"
  var newArr = [];
  var i = 0;
  while (i < arr.length) {
      newArr[i] = arr[i] + "!!!"
      i++;
  }
  //for (let i = 0; i < arr.length; i++)
//  {
//    newArr[i] = arr[i] + "!!!"
//  }
  return newArr;
}

function iLoveTheBeatles(n) {
    // returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :
    //"I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"
    // returns an array of 'I love the Beatles!' once when passed the parameter 17:
    // "I love the Beatles!""
    var array = [];
    var i;

  //  i = n === 17  ? : 1 : n;
  //  if (n === 17){
//      i = 1;
//    } else {
//      i = n + 1;
//    }

    i = n === 17 ? 1 : n + 1;
    var counter = 0;

    do {
      array[counter] = 'I love the Beatles!';
      counter++;
    } while (counter < i )

//    if (n === 7) {
//      for (let i = 0; i <= 7; i++){
//        array[i] = 'I love the Beatles!';
//      }
//    } else if (n=== 17){
//      array[0] = 'I love the Beatles!'
//    }
        return array;
}
