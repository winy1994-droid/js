function ball1() {
  if (true) {
    return "the ball1 reached the end of the hill";
  } else {
    throw new Error("the ball1 failed");
  }
}

function ball2() {
  if (true) {
    return "the ball2 reached the end of the hill";
  } else {
    throw new Error("the ball2 failed");
  }
}

function ball3() {
  if (true) {
    return "the ball3 reached the end of the hill";
  } else {
    throw new Error("the ball3 failed");
  }
}

async function execute() {
  try {
    console.log(await ball1());
    console.log(await ball2());
    console.log(await ball3());
  } catch (error) {
    console.log(error);
  }
}

execute();





function person1() {
  if (true) {
    return "the person1 won";
  } else {
    throw new Error("the person1 failed");
  }
}

function person2() {
  if (true) {
    return "the person2 won";
  } else {
    throw new Error("the person2 failed");
  }
}

function person3() {
  if (true) {
    return "the person3 won";
  } else {
    throw new Error("the person3 failed");
  }
}

async function requestResult() {
  try {
    console.log(await person1());
    console.log(await person2());
    console.log(await person3());
  } catch (error) {
    console.log(error);
  }
}
requestResult()