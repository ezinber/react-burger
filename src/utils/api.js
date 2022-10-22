const makeRequest = async (route, options) => {
  if (options?.body) {
    JSON.stringify(options.body);
  };

  const res = await fetch(route, {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  };
};

export const getIngredients = () => makeRequest(
  'https://norma.nomoreparties.space/api/ingredients',
);
