function ball1() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("the ball1 reached the end of the hill");
    } else {
      reject("the ball1 failed");
    }
  });
}

function ball2() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("the ball2 reached the end of the hill");
    } else {
      reject("the ball2 failed");
    }
  });
}

function ball3() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("the ball3 reached the end of the hill");
    } else {
      reject("the ball3 failed");
    }
  });
}

ball1()
  .then((msg) => {
    console.log(msg);
    return ball2();
  })
  .then((msg) => {
    console.log(msg);
    return ball3();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((e) => console.log(e));

function person1() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("the person one won");
    } else {
      reject("the person one failed");
    }
  });
}

function person2() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("the person two won");
    } else {
      reject("the person2 failed");
    }
  });
}

function person3() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("the person 3 won");
    } else {
      reject("the person3 failed");
    }
  });
}

person1()
  .then((msg) => {
    console.log(msg);
    return person2();
  })
  .then((msg) => {
    console.log(msg);
    return person3();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((e) => console.log(e));
