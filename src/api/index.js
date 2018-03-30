import data from './mockData.json';

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(data);
    }, 1000);
  });
}

export async function getImages() {
  return await fetchData();
}
