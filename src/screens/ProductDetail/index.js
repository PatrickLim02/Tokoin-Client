/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { setChart, setModalLogin } from "../../redux";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { ProductDetails } from "./dummy_productDetails";
import { openLogin, getChartHandle } from "../../helpers/general";
import { productDetail, chartSubmit } from "../../helpers/request";

const ProductDetail = (props) => {
  const { setChart, chart, userData } = props;
  const { id } = props.match.params;
  const [harga, setHarga] = useState();
  const [stock, setStock] = useState();
  const [color, setColor] = useState();
  const [qty, setQty] = useState(1);
  const [data, setData] = useState();

  const loadData = () => {
    productDetail({ id_product_header: id })
      .then((res) => {
        setData(res.data);
        setHarga(res.data.product_price);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  const handleChartSubmit = () => {
    if (userData?.email) {
      const dataChart = {
        id_product_header: id,
        id_user: userData.id_users,
        qty: qty,
        subtotal: harga,
      };
      chartSubmit(dataChart)
        .then((res) => {
          console.log("data: ", res.data);
          getChartHandle();
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    } else {
      openLogin();
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="container mt-5 pad0">
      <div className="row">
        <div className="col-lg-5 col-sm-12 ">
          <img
            src={data?.file_url}
            alt="product1"
            style={{ border: "1px solid" }}
            className="w-100"
          />
        </div>

        <div className="col-lg-5 col-sm-12">
          <h1>{data?.product_name}</h1>
          <h3>IDR {harga}</h3>
          <h5>Include: </h5>

          <div
            dangerouslySetInnerHTML={{ __html: data?.product_description }}
          />
        </div>
        <div className="col-lg-2 col-sm-12">
          <FormGroup>
            <Label for="variants">Variants</Label>
            {/* <Input
                              id="variants"
                              name="select"
                              type="select"
                          >
                                                    
                          </Input> */}
            <div>
              <select
                onChange={(ev) => {
                  const data = JSON.parse(ev.target.value);
                  setHarga(data.varian_price);
                  setColor(data.varian_color);
                  setStock(data.varian_stocks);
                }}
              >
                {data?.product_varians.map((item, index) => (
                  <option value={JSON.stringify(item)}>
                    {item.varian_color}
                  </option>
                ))}
              </select>
            </div>
          </FormGroup>
          <div className="mt-2">Stock Available: {stock}</div>
          <Button onClick={handleChartSubmit} className="w-100 bg-dark">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.authorizationReducer.user,
    chart: state.generalReducer.chart.data,
  };
};
export default connect(mapStateToProps, { setChart })(ProductDetail);
