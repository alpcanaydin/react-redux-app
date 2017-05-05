const obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4',
};

// console.log(Object.entries(obj));

// eslint-disable-next-line
for (const [key, value] of Object.entries(obj)) {
  console.log(`key: ${key}, value: ${value}`);
}
