import axios from "axios";

let axiosInstance = axios.create({
  baseURL: "https://verkehr.autobahn.de/o/autobahn",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export { axiosInstance };
