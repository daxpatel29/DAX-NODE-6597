const add = (a, b) => {
    return console.log(`Add a+b = ${Number(a) + Number(b)}`);
  };
  
  const sub = (a, b) => {
    return console.log(`Sub a-b = ${a - b}`);
  };
  
  const multi = (a, b) => {
    return console.log(`Multi a*b = ${a * b}`);
  };
  
  const div = (a, b) => {
    return console.log(`Div a/b = ${a / b}`);
  };
  
  module.exports = { add, sub, multi, div };