import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_MATERATE || "https://materate.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
});
