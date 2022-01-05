import React, { useEffect, useState } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { setUser, setUserLogout } from "../../redux";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    Button
} from "reactstrap";
import {openLogin, setCookie} from '../../helpers/general'
const NavigationsActions = (props) => {
    const { userData, setUserLogout, chart } = props;
    const history = useHistory();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleToggle = () => {
        if (userData?.email) {
            setDropdownOpen((prevState) => !prevState);
        } else {
            openLogin()
        }
    };
    const handleLogout = (name = 'email') => {
        document.cookie = "user-data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setUserLogout();
        window.location.href = '/'
    };
    const redirectConfirmPayment = () => {
        history.push("/confirm-payment");
    };
    const redirectMyOrders = () => {
        history.push("/my-orders");
    };
    const redirectProfile = () => {
        history.push("/profile");
    };
    const redirectChart = () => {
        history.push("/chart");
    };

    const redirectChangePassword = () => {
        history.push("/change-password");
    };

    const notifValidation = () => {
        if (chart.length > 0) {
            return (
                <sup>
                    <Badge className="bg-danger rounded-lg notif-badge">{chart.length}</Badge>
                    <span className="visually-hidden">unread messages</span>
                </sup>

            )
        }
        return ''
    }
    return (
        <div className="navigations-actions-container">
            <h1>{userData?.user?.email}</h1>
            <ul className="display-flex">
                <li>
                    {userData?.email ?(<>
                        < FontAwesomeIcon className="pointer" onClick={redirectChart} icon={faShoppingBag} />
                    {notifValidation()}</>)  : ''}
                </li>
                <li>
                    <Dropdown
                        className="user-dropdown"
                        isOpen={dropdownOpen}
                        toggle={handleToggle}
                    >
                        <DropdownToggle>
                            <FontAwesomeIcon icon={faUser} />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={redirectProfile}>
                                Profile
                            </DropdownItem>
                            <DropdownItem onClick={redirectChangePassword}>
                                Change Password
                            </DropdownItem>
                            <DropdownItem onClick={redirectMyOrders}>
                                My Orders
                            </DropdownItem>
                            <DropdownItem onClick={redirectConfirmPayment}>
                                Confirm Payment
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={handleLogout}>
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </li>
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userData: state.authorizationReducer.user,
        modalLogin: state.generalReducer.modalLogin,
        chart: state.generalReducer.chart.data
    };
};

export default connect(mapStateToProps, {
    setUser,
    setUserLogout,
})(NavigationsActions);
