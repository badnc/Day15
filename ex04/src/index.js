const milili = [10, 25, 4];

function myArr(mili) {
  "use strict";
  const milili = [10, 25, 4];
  mili[2]=25;
  mili[1]=10;
  mili[0]=4;
  return mili;
}
console.log(myArr(milili));
module.exports = myArr;
