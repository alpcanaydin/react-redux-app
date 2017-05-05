const asyncFn = () =>
  new Promise(resolve => {
    setTimeout(() => {
      // Hata oluştu.
      resolve('asenkron data 1');
    }, 3000);
  });

const asyncFn2 = () =>
  new Promise(resolve => {
    setTimeout(() => {
      // Hata oluştu.
      resolve('asenkron data 2');
    }, 1000);
  });

Promise.all([asyncFn(), asyncFn2(), 'senkron data']).then(values => console.log(values));
