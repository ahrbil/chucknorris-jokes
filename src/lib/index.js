//  function that takes length of  jokes we want and a category
// and returns an array of promises that we can await to resolve
// and getting our list of jokes
export const getJokes = (count = 10, category = "") => {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const jokesPromises = Array(count)
    .fill()
    .map(async () => {
      const result = await fetch(url);
      const joke = await result.json();
      return joke;
    });
  return jokesPromises;
};
