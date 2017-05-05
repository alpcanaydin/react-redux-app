/*
function fn(param1, param2) {
  console.log(param1);
  console.log(param2);
}

fn(1, 2);
*/

const fn = (param1 = 'value', ...rest) => ({
  key1: param1,
  key2: 'value2',
  rest,
});

const result = fn('value1', 'value3', 'value4', 'value5', 'value6', 'value7');
console.log(JSON.stringify(result, null, 2));
