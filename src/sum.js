function sum(a,b) {
    return a+b;
}
function double(a) {
    return a*2;
}

function triple(a) {
  return a*3;
}

function Biggest(a,b){
  if (a>b) return a;
  return b;
}

module.exports = {sum,double,triple,Biggest};
