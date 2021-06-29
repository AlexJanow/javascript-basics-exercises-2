greet = (userName = "Mr.Nobody") => {
  return "Hello " + userName;
};

const empty = greet();
const name1 = greet("Alex");
const name2 = greet("Peter");

alert(empty);
alert(name1);
alert(name2);
