const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  professionals: {
    list() {
      return callApi('/professionals?_sort=votes&_order=desc');
      // throw new Error('Error 500')
    },
    create(professional) {
      // throw new Error('500: Server error');
      return callApi(`/professionals`, {
        method: 'POST',
        body: JSON.stringify(professional),
      });
    },
    read(professionalId) {
      return callApi(`/professionals/${professionalId}`);
    },
    update(professionalId, updates) {
      return callApi(`/professionals/${professionalId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(professionalId) {
      return callApi(`/professionals/${professionalId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
