import store from "../redux/store";
import { userSelector } from "../redux/authorizationReducer/selector";
import { setModalLogin, setUser, setChart } from "../redux";
import { getChart, login, token } from "../helpers/request";
import * as CryptoJS from "crypto-js";
export const findIcon = (icons) => {
    const icon = `https://openweathermap.org/img/w/${icons}.png`;
    return icon;
};

export const celciusConverter = (kelvin) => {
    const k = parseFloat(kelvin);
    const c = k - 273.15;
    return c.toFixed(0);
};

export const openLogin = () => {
    const user = userSelector(store.getState());
    if (!user?.email) {
        store.dispatch(setModalLogin({ visible: true }));
    }
};

export const closeLogin = () => {
    store.dispatch(setModalLogin({ visible: false }));
};

export const firstLoadEmitter = (data_cookie) => {
    store.dispatch(setUser(data_cookie));
    const data = {
        email: data_cookie.email,
        password: data_cookie.password,
    };
    setTimeout(() => {
        getToken(data);
        getChartHandle();
    }, 1000);
};

export const setCookie = (cEmail, cPassword, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie =
        cEmail + "=" + cPassword + cValue + "; " + expires + "; path=/";
};
export const getCookie = (cEmail) => {
    let name = cEmail + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

export const getChartHandle = async () => {
    const user = userSelector(store.getState());
    if (user?.id_users) {
        const params = {
            id_user: user.id_users,
        };
        const response = await getChart(params);
        store.dispatch(setChart({ data: response?.data }));
    }
};

export const handleLogin = async (email, password) => {
    const data_cookie = getCookie("user-data");
    const data = {
        email: email,
        password: password,
    };
    if (data_cookie) {
        const decrypted = CryptoJS.AES.decrypt(
            data_cookie,
            "Mh&N*v8#kTFHiYQjc448VYsWS@3f7N"
        );
        const result = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
        firstLoadEmitter(result[0], data);
    }
    console.log(email)
    if (email && password) {
        const respons = await login(data);
        if (respons.status === 200) {
            //Dekripsi data
            const decrypted = CryptoJS.AES.decrypt(
                respons.data,
                "Mh&N*v8#kTFHiYQjc448VYsWS@3f7N"
            );
            // Konversi data dekripsi menjadi string
            const result = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));

            //update ke cookie
            setCookie("user-data", respons.data, 1);

            //update redux dengan data yang sudah di dekripsi
            store.dispatch(setUser(result[0]));

            //hit endpoint token dan chart
            setTimeout(() => {
                getToken(data);
                getChartHandle();
            }, 1000);
        }
    }
};

export const getToken = async (ev) => {
    const user = userSelector(store.getState()); //
    const respons = await token(ev);

    localStorage.setItem("token", respons.token);
    store.dispatch(setUser({ ...user, token: respons.token })); // perlu pakai store.dispatch untuk update redux karena diluar lifecycle react
    closeLogin();
};
