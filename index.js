const cx = require("classnames");

function returnsAnArray() {
  return ["arrays", "have", "commas"];
}

console.log(cx("strings", { ["are"]: true }, { ok: true }));
console.log(cx("but", { [returnsAnArray()]: true }));
