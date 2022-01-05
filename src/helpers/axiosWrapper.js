import axios from "axios";
import { MAIN_URL } from "../shared/constants";

const request = async function (options) {
  const requestHeaders = options.customHeaders || {
    "Content-type": "application/json",
    Accept: "application/json",
  };
  let tokenParam = {
    "x-access-token": "Bearer" + localStorage.getItem("token"),
  };
  const client = axios.create({
    baseURL: options.MAIN_URL || MAIN_URL,
    headers: { ...requestHeaders, ...tokenParam },
  });
  const onSuccess = function (response) {
    //   return new Promise(async(resolve)=>{
    //     const responses =  await response.data;
    //  })
    return response.data;
  };

  const onError = function (error) {
    console.log("Request Failed:", error.config);
    if (error.response) {
      if (error.response.status === 400) {
        let message = "";
        let errorObj = error.response.data.message;
        message = errorObj;
        if (message) {
          alert(message);
        }
      }
      if (error.response.status === 500) {
        alert("Server Connection Error");
      }
    } else {
      console.log("Error Message:", error);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
