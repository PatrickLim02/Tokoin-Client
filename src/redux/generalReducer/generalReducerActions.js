import * as types from "./generalReducerTypes";

export const setToday = (payload) => {
    return {
        type: types.SET_PRODUCT_LIST,
        payload,
    };
};
export const setModalLogin = (payload) => {
    return {
        type: types.SET_MODAL_LOGIN,
        payload,
    };
};
export const setChart = (payload) => {
    return {
        type: types.SET_CHART_PRODUCT,
        payload,
    };
};
export const setCheckout = (payload) => {
    return {
        type: types.SET_CHECKOUT_PRODUCT,
        payload,
    };
};

export const setModalReturnPending = (payload) => {
    return {
        type: types.SET_MODAL_RETURN_PENDING,
        payload,
    };
};
export const setModalWaitingForPayment = (payload) => {
    return {
        type: types.SET_MODAL_WAITING_FOR_PAYMENT,
        payload,
    };
};
export const setModalPending = (payload) => {
    return {
        type: types.SET_MODAL_PENDING,
        payload,
    };
};
export const setModalConfirmPayment = (payload) => {
    return {
        type: types.SET_MODAL_CONFIRM_PAYMENT,
        payload,
    };
};


// export const set5Days = (payload) => {
//   return {
//     type: types.SET_5DAYS,
//     payload,
//   }
// }

// export const fetchForeCast = () => {
//   return async (dispatch) => {
//     const params = {
//       q: 'Jakarta',
//       appid: WEATHER_API_KEY
//     }
//     const response5Days = await getWeatherList5Days(params)
//     dispatch(set5Days(response5Days))
//   }
// }
