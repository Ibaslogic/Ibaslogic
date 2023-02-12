export const fetcher = async (...args) => {
  const res = await fetch(...args);
  return res.json();
};
