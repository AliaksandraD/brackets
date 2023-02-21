module.exports = function check(str, bracketsConfig) {
  if (str.length %2 != 0) {
    return false;
  }
let e = [];
let br = str.split('');
  for (let i = 0; i<str.length; i++){
    for (let p = 0; p<bracketsConfig.length; p++){
      if (br[i] == bracketsConfig[p][1] && (e[e.length-1] == bracketsConfig[p][0]))  {
        e.pop();
      } else  if (br[i] == bracketsConfig[p][0]) {
        e.push(br[i]);
      }
      

    }
  }
  return e.length === 0;
}
