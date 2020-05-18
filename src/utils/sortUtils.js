const sortData = (data, param, sort) => {
  if (sort === '') return data;
  return data.sort((a, b) => {
    if (sort === 'asc') {
      return a[param] - b[param];
    } else {
      return b[param] - a[param];
    }
  });
};

export default sortData;
