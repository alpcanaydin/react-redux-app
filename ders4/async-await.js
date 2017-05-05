const asyncFn = () =>
  new Promise(resolve => {
    setTimeout(() => {
      // Hata oluştu.
      resolve('asenkron data 1');
    }, 3000);
  });

const asyncFn2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Hata oluştu.
      reject('asenkron hata');
    }, 1000);
  });

const main = async () => {
  console.log('Start');

  try {
    const data1 = await asyncFn();
    console.log('ilk promise beklendi.');
    const data2 = await asyncFn2();
    console.log('ikinci promise beklendi.');
    console.log(`Data 1: ${data1}, Data 2: ${data2}`);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('end');
  }
};

main();
