import axios, { AxiosResponse } from "axios";

const Http = axios.create();
Http.defaults.baseURL = 'http://localhost:8080';

function getData<T>(res: AxiosResponse<T>) {
  return res.data;
}

class Service {
  protected static Http = Http;
  protected static getData = getData;
}

export default Service;
