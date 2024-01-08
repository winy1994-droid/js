function person1(person2) {
  setTimeout(() => {
    console.log("the person1 reached the end of line");
    person2(person3);
  }, 2000);
}

function person2(person3) {
  setTimeout(() => {
    console.log("the person2 reached the end of line");
    person3();
  }, 1000);
}

function person3() {
  setTimeout(() => {
    console.log("the person3 reached the end of line");
  }, 4000);
}


person1(person2)