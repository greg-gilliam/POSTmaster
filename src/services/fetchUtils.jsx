export const fetchReq = async (method, urlInput, jsonInput) => {
  const res = await fetch(urlInput, {
    method,
    headers: {
      'Content-Type': 'application-json',
      [jsonInput.length ? body : null]: [jsonInput.length ? jsonInput : null],
    },
  });
  const response = await res.json();
  return response;
};
