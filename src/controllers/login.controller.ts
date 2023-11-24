export function login(username: string, password: string): Promise<void> {
  const url = '/login';
  const data = {
    username: username,
    password: password,
  };

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    })
    .catch((error) => {
      console.error('There has been a problem with fetch operation:', error);
    });
}
