function v() {
  var a = 10;

  if (true) {
    var a = 20;

    console.log(a);
  }

  console.log(a);
}

v();
