export const fetchTrending = async () => {
  const url2 = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGU4NmFlNWYzMmEzYjVjYzdlOGZlYjQwZGUwNDJhMSIsInN1YiI6IjY0YTEyNTcxNGE1MmY4MDBhZjEyN2I2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbYwtxSpkX8VkKoghnxMD7rlXZiSFV6oFwd5iYwvBIY",
    },
  };

  const res = await fetch(url2, options, { cache: "noe-store" });
  const data = await res.json();
  return data;
};

export function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
