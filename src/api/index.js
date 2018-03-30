import Mock from 'mockjs';

function genData() {
  const id = Mock.Random.increment();
  return {
    id: id,
    image: Mock.Random.image('320x240', undefined, undefined, id),
    author: Mock.Random.name(),
    email: Mock.Random.email(),
    updateAt: Mock.Random.date()
  };
}

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(new Array(10).fill(null).map(_ => genData()));
    }, 1000);
  });
}

export async function getImages() {
  return await fetchData();
}
