import React, { useEffect, useState } from "react";
import Navigation from "./screens/Navigations";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./shared/custom.scss";
import "./shared/navigations.scss";
import "bootstrap/dist/css/bootstrap.css";
import LoadingCover from "./components/LoadingCover";
import ModalLogin from "./components/ModalLogin";
import ModalReturnPending from "./components/ModalReturnPending";
import ModalWaitingForPayment from "./components/ModalWaitingForPayment";
import ModalPending from "./components/ModalPending";
import ModalConfirmPayment from "./components/ModalConfirmPayment";
import { firstLoadEmitter } from "./helpers/general";
import ReturnProduct from './screens/ReturnProduct';
const ReduxProvider = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return <LoadingCover size={"3x"} title />;
    }
    return (
        <Provider store={store}>
            <ModalConfirmPayment />
            <ModalPending />
            <ModalWaitingForPayment />
            <ModalReturnPending />
            <ModalLogin />
            <Navigation />
        </Provider>
    );
};

export default ReduxProvider;
