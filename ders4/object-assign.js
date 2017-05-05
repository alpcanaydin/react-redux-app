// Object.assign(target, ...sources);

const output = Object.assign(
  {},
  { key2: 'value2', key3: 'value3' },
  { key1: 'new-value' },
  { key1: 'value1' },
);

console.log(output);
