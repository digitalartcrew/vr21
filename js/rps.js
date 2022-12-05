const sort = (arr) => {
  let lowestValue;
  for (i = 0; i < arr.length; i++) {
    lowestValue = arr[i];
    if (lowestValue > arr[i + 1] && i < arr.length - 1) {
      lowestValue = arr[i + 1];
    }
  }
};
