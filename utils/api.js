const apiServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  timeout: 1000,
});
