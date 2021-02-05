const eq = document.getElementById("input");
function dis(val) {
  console.log(val);
  eq.value += val;
}

function answer() {
  let str = eq.value;
  let ans = eval(str);
  console.log(ans);
  eq.value = ans;
}

function clr() {
  console.log("cl");
  eq.value = "";
}
