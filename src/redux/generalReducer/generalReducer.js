import * as types from "./generalReducerTypes";

const initialState = {
    productList: {},
    modalLogin: {
        visible: false,
    },
    chart: {
        data: [],
    },
    checkout: {
        data: []
    },
    modalReturnPending: {
        visible: false,
    },
    modalWaitingForPayment: {
        visible: false
    },
    modalPending: {
        visible: false
    },
    modalConfirmPayment: {
        visible: false
    }
};

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_PRODUCT_LIST:
            return {
                ...state,
                productList: {
                    ...state.productList,
                    ...action.payload,
                },
            };
        case types.SET_MODAL_LOGIN:
            return {
                ...state,
                modalLogin: {
                    ...state.modalLogin,
                    ...action.payload,
                },
            };
        case types.SET_CHART_PRODUCT:
            return {
                ...state,
                chart: {
                    ...state.chart,
                    ...action.payload,
                },
            };
        case types.SET_CHECKOUT_PRODUCT:
            return {
                ...state,
                checkout: {
                    ...state.checkout,
                    ...action.payload,
                },
            };
        case types.SET_MODAL_RETURN_PENDING:
            return {
                ...state,
                modalReturnPending: {
                    ...state.modalReturnPending,
                    ...action.payload,
                },
            };
        case types.SET_MODAL_WAITING_FOR_PAYMENT:
            return {
                ...state,
                modalWaitingForPayment: {
                    ...state.modalWaitingForPayment,
                    ...action.payload,
                },
            };
        case types.SET_MODAL_PENDING:
            return {
                ...state,
                modalPending: {
                    ...state.modalPending,
                    ...action.payload,
                },
            };
        case types.SET_MODAL_CONFIRM_PAYMENT:
            return {
                ...state,
                modalConfirmPayment: {
                    ...state.modalConfirmPayment,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};

export default generalReducer;
