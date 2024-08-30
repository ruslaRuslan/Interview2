function add() {
  let result = 0;
  return function (sum) {
    console.log((result += sum));
  };
}
const changeAdd = add();

changeAdd(5); //5
changeAdd(55); // 60
changeAdd(-25); // 35
// closure
// intervyu
