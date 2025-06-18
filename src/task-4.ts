type printUserInfo = (name: string, age: number, email?: string) => void;

const consolePrint: printUserInfo = (name, age, email) => {
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
};

export default consolePrint;
