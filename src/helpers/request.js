import Wrap from "./axiosWrapper";

// export const getWeatherToday = (params = {}) => {
//   return Wrap({
//     url: '/data/2.5/weather',
//     method: 'GET',
//     params : {...params},
//   });
// };

// export const getWeatherList5Days = (params = {}) => {
//   return Wrap({
//     url: '/data/2.5/forecast',
//     method: 'GET',
//     params : {...params},
//   });
// };

export const login = (data = {}) => {
  return Wrap({
    url: "/login/auth",
    method: "POST",
    data,
  });
};

export const token = (data = {}) => {
  return Wrap({
    url: "/token",
    method: "POST",
    data,
  });
};

export const register = (data = {}) => {
  return Wrap({
    url: "/register",
    method: "POST",
    data,
  });
};

export const faqList = (data = {}) => {
  return Wrap({
    url: "/faq/list",
    method: "GET",
    data,
  });
};

export const productList = (params = {}) => {
  return Wrap({
    url: "/product/list",
    method: "GET",
    params: { ...params },
  });
};

export const productDetail = (data = {}) => {
    return Wrap({
        url: '/product/list-detail',
        method: 'POST',
        data
    })
}


export const chartSubmit = (data = {}) => {
    return Wrap({
        url: '/chart/submit',
        method: 'POST',
        data
    })
}
export const getChart = (data = {}) =>{
    return Wrap({
        url: '/chart/list',
        method: 'POST',
        data,
    })
}



export const getUserProfile = (data = {}) =>{
  return Wrap({
      url: '/profile/user-profile',
      method: 'POST',
      data,
  })
}


export const changeUserProfile = (data = {}) =>{
  return Wrap({
      url: '/profile/update',
      method: 'POST',
      data,
  })
}