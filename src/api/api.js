export function Api(http) {
  return {
    getList: params => {
      const qs = params
        ? Object.keys(params).reduce((acc, val) => {
            acc += val.toLowerCase() + '=' + params[val].join(',') + '&';
            return acc;
          }, '?')
        : '';
      return http.get(`/api/characterList/${qs}`);
    }
  };
}
