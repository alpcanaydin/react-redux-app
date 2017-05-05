const props = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 'value4',
  prop5: 'value5',
  prop6: {
    key1: 'value6',
    key2: 'value7',
  },
};

/*
const prop1 = props.prop1;
const prop3 = props.prop3;
*/

const { prop6: { key1: var1 } } = props;
console.log(var1);
