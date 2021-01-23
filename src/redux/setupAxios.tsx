export default function setupAxios(axios:any, store:any) {
  axios.interceptors.request.use(
    (    config: { headers: { Authorization: string; }; }) => {
      const {
        auth: { authToken }
      } = store.getState();

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }

      return config;
    },
    (    err: any) => Promise.reject(err)
  );
}