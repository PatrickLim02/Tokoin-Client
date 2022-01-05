import React, { useEffect } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { styles } from "./styles";
import TextInput from "../../components/TextInput";
import ButtonComponent from "../../components/Button";
import { setModalConfirmPayment } from "../../redux";
import { connect } from "react-redux";
import { openLogin } from "../../helpers/general";
const ConfirmPayment = (props) => {
    const { setModalConfirmPayment } = props
    useEffect(() => {
        openLogin()
    }, [])
    return (
        <div className="background-color">
            <div className="card">
                <h1 className="title" style={styles.titlePage}>
                    Confirm Payment
                </h1>
                <Form>
                    <FormGroup
                        className="display-flex gap"
                        style={styles.formOrderNumber}
                    >
                        <Label
                            for="orderNumber"
                            className="col-md-auto"
                            style={styles.label}
                        >
                            Order Number
                        </Label>
                        <TextInput placeholder={"Masukkan Order Number"} />
                    </FormGroup>
                    <FormGroup
                        className="display-flex gap"
                        style={styles.formTwoColumn}
                    >
                        <Label
                            for="bankName"
                            className="col-md-auto"
                            style={styles.label}
                        >
                            Bank Name
                        </Label>
                        <TextInput placeholder={"Masukkan Order Number"} />
                        <Label
                            for="accountName"
                            className="col-md-auto"
                            style={styles.label}
                        >
                            Account Name
                        </Label>
                        <TextInput placeholder={"Masukkan Order Number"} />
                    </FormGroup>
                    <FormGroup
                        className="display-flex gap"
                        style={styles.formOneColumn}
                    >
                        <Label
                            for="accountNumber"
                            className="col-md-auto"
                            style={styles.label}
                        >
                            Account Number
                        </Label>
                        <TextInput placeholder={"Masukkan Account Number"} />
                    </FormGroup>
                    <FormGroup
                        className="display-flex gap"
                        style={styles.formOneColumn}
                    >
                        <Label
                            for="amountTransfered"
                            className="col-md-auto"
                            style={styles.label}
                        >
                            Amount Transfered
                        </Label>
                        <TextInput placeholder={"Masukkan Order Number"} />
                        <Label
                            for="dataTransfered"
                            className="col-md-auto"
                            style={styles.label}
                        >
                            Data Transfered
                        </Label>
                        <TextInput placeholder={"Masukkan Order Number"} />
                    </FormGroup>
                    <FormGroup
                        className="display-flex gap"
                        style={styles.formPaymentReceipt}
                    >
                        <Label
                            for="paymentReceipt"
                            className="col-md-auto"
                            style={styles.label}
                        >
                            Payment Receipt
                        </Label>
                        <Input
                            type="file"
                            name="image"
                            className="display-flex"
                        />
                    </FormGroup>
                </Form>
                <ButtonComponent
                    style={styles.button}
                    label={"Confirm"}
                    color={"dark"}
                    handleSubmit={() => setModalConfirmPayment({ visible: true })}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, { setModalConfirmPayment })(ConfirmPayment);
