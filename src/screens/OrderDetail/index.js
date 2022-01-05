import { React, useState } from "react";
import Image from "../../assets/jpg/product1.jpg";
import ButtonComponent from "../../components/Button";
import { setModalReturnPending, setModalWaitingForPayment, setModalPending } from "../../redux";
import { connect } from "react-redux";
import { styles } from "./styles";
import { useHistory } from "react-router-dom";


const OrderDetail = (props) => {
    const query = new URLSearchParams(window.location.search);
    const [status, setStatus] = useState(query.get("status"));
    const [numberOrder, setNumberOrder] = useState(query.get("numberOrder"));
    const { setModalReturnPending, setModalWaitingForPayment, setModalPending } = props;
    //const { id } = props.match.params;
    const history = useHistory()

    const redirectToConfirmReturn = () => {
        history.push('/confirm-return')
    }

    const redirectToReturnProduct = () => {
        history.push('/return-product')
    }

    const handleButton = () => {
        if (status === "Return Pending") {
            setModalReturnPending({ visible: true });
        }
        if (status === "Waiting for Payment") {
            setModalWaitingForPayment({ visible: true })
        }
        if (status === "Pending") {
            setModalPending({ visible: true })
        }
        if (status === "Return Done") {
            return redirectToConfirmReturn()
        }
        if (status === "Delivering") {
            return redirectToReturnProduct()
        }
        if (status === "Cancelled") {
            setModalPending({ visible: true })
        }
        if (status === "Return on Process") {
            return redirectToConfirmReturn()
        }
        if (status === "On Process") {
            setModalPending({ visible: true })
        }
    };

    const labelButton = () => {
        if (status === 'Return Pending') {
            return 'Cancel Order';
        }
        if (status === 'Waiting for Payment') {
            return 'Confirm Payment';
        }
        if (status === 'Pending' || status === 'Cancelled' || status === "On Process") {
            return 'Cancel and Refund';
        }
        if (status === 'Return Done' || status === 'Return on Process') {
            return 'Confirm Return';
        }
        if (status === 'Delivering') {
            return 'Return';
        }
    };

    const buttonRenderer = () => {
        if (status === "Done") {
            return "";
        }
        return (
            <ButtonComponent
                handleSubmit={handleButton}
                label={labelButton()}
                color="dark"
            />
        );
    };

    const returnTo = () => {
        if (
            status === "Return Pending" ||
            status === "Return Done" ||
            status === "Return on Process"
        ) {
            return (
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="d-flex flex-column mb-0">
                        <div class="p-2 bd-highlight">Return To</div>
                        <div class="px-2 bd-highlight">BCA</div>
                        <div class="px-2 bd-highlight">Mary Jane</div>
                        <div class="px-2 bd-highlight">085321232123</div>
                    </div>
                    <div class="d-flex flex-column mb-0">
                        <div class="p-2 bd-highlight">Reason</div>
                        <div class="px-2 bd-highlight">Waiting for Payment</div>
                    </div>
                </div>
            );
        }
    };
    return (
        <div className="background-color">
            <div className="card">
                <div class="d-flex mb-0">
                    <div
                        style={styles.numberOrder}
                        class="p-2 bd-highlight font-size"
                    >
                        Order {numberOrder}
                    </div>
                    <div class="ms-auto p-2 bd-highlight">20 October 2021</div>
                </div>
                <span class="border-bottom border-dark"></span>
                <div class="d-flex mb-0">
                    <div class="p-2 bd-highlight">Status</div>
                    <div
                        style={styles.capitalize}
                        class="ms-auto p-2 bd-highlight"
                    >
                        {status}
                    </div>
                </div>
                <span class="border-bottom border-dark"></span>
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="d-flex flex-column mb-0">
                        <div style={styles.capitalize} class="p-2 bd-highlight">
                            Address
                        </div>
                        <div class="px-2 bd-highlight">Mary Jane</div>
                        <div class="px-2 bd-highlight">085321232123</div>
                        <div class="px-2 bd-highlight">
                            Jl. Thamrin No.123 Medan
                        </div>
                    </div>
                    <div class="d-flex flex-column mb-0">
                        <div class="p-2 bd-highlight">AWB No.</div>
                        <div class="px-2 bd-highlight">-</div>
                    </div>
                    {returnTo()}
                </div>
                <span class="border-bottom border-dark"></span>
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="d-flex flex-column mb-0">
                        <div style={styles.capitalize} class="p-2 bd-highlight">
                            History
                        </div>
                        <div class="px-2 bd-highlight">Ordered Confirmed</div>
                        <div class="px-2 bd-highlight">Ordered Shipped</div>
                        <div class="px-2 bd-highlight">Order Return</div>
                        <div class="px-2 bd-highlight">Ordered Done</div>
                    </div>
                    <div class="d-flex flex-column mb-0">
                        <div class="p-2 bd-highlight">&nbsp;</div>
                        <div class="px-2 bd-highlight">-</div>
                        <div class="px-2 bd-highlight">-</div>
                        <div class="px-2 bd-highlight">-</div>
                        <div class="px-2 bd-highlight">-</div>
                    </div>
                </div>
                <span class="border-bottom border-dark"></span>
                <div class="d-flex flex-row bd-highlight mb-3">
                    <div class="d-flex flex-column mb-0">
                        <div style={styles.capitalize} class="p-2 bd-highlight">
                            Orders
                        </div>
                        <div class="px-2 bd-highlight">
                            <div class="d-flex">
                                <div class="flex-shrink-0">
                                    <img
                                        src={Image}
                                        alt="ProductImage"
                                        width={"100px"}
                                    />
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <div class="d-flex align-items-start flex-column bd-highlight mb-3">
                                        <div class="px-2 bd-highlight">
                                            Product
                                        </div>
                                        <div class="px-2 bd-highlight">
                                            Variant
                                        </div>
                                        <div class="mt-4 px-2 bd-highlight">
                                            Qty x Price
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span class="border-bottom border-dark"></span>
                <div class="d-flex mb-0">
                    <div class="p-2 bd-highlight font-size">Sub Total</div>
                    <div class="ms-auto p-2 bd-highlight">IDR 50.000</div>
                </div>
                <div class="d-flex mb-0">
                    <div class="p-2 bd-highlight font-size">Shipping Cost</div>
                    <div class="ms-auto p-2 bd-highlight">IDR 30.000</div>
                </div>
                <span class="border-bottom border-dark"></span>
                <div class="d-flex mb-0">
                    <div class="p-2 bd-highlight font-size">Total</div>
                    <div class="ms-auto p-2 bd-highlight">IDR 80.000</div>
                </div>
                {buttonRenderer()}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, { setModalReturnPending, setModalWaitingForPayment, setModalPending })(OrderDetail);
