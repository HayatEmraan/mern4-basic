const printObjectProperties = (obj) => {
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
  }
};

printObjectProperties({ a: 1, b: 2, c: 3 });
