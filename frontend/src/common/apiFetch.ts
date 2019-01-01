const apiFetch = (url: string, params: any = {}) =>
  fetch(url, params)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        throw new Error('Status code is not 200');
      }
    })
    .then(res => res.json());

export default apiFetch;
