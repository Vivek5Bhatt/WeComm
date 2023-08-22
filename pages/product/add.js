/* next components */
import Head from "next/head";
import Link from 'next/link';

/* bootstrap components */
import { Form, Button } from "react-bootstrap";

/* config */
import { APP_NAME } from "/environment";

/* components */
import Loader from "/components/loader";
import SideBar from "/components/dashboard/sidebar";

const Add = () => {
  return (
    <div>
      <Head>
        <title>{`${APP_NAME} | Dashboard`}</title>
      </Head>
      <Loader></Loader>
      <div className="register-container">
        <div className="register-inner">
          <SideBar></SideBar>
          <div className="ryt-container dash-right">
            <div className="ryt-heading">
              <h2 className="mn-heading">Add Product</h2>
              <div className="hd-right-bx"></div>
            </div>
            <div className="min-links"></div>
            <div className="product-in">
              <div className="login-right sign-right">
                <div className="login-form mt-3">
                  <Form noValidate id="join-form">
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" multiple />
                  </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="label-bx">Title*</Form.Label>
                      <Form.Control
                        type="text"
                        // isInvalid={errors.name ? true : false}
                        className="field-bx"
                        placeholder="Enter Title"
                        // value={formData.name}
                        // onChange={(e) => {
                        //   setErrors({ ...errors, name: "" });
                        //   setFormData({ ...formData, name: e.target.value });
                        // }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {/* {errors.name} */}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Description</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="label-bx">Vendor*</Form.Label>
                      <Form.Control
                        type="text"
                        // isInvalid={errors.name ? true : false}
                        className="field-bx"
                        placeholder="Enter Vendor"
                        // value={formData.name}
                        // onChange={(e) => {
                        //   setErrors({ ...errors, name: "" });
                        //   setFormData({ ...formData, name: e.target.value });
                        // }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {/* {errors.name} */}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="label-bx">Product Type*</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Product Type</option>
                        <option value="1">Product Type 1</option>
                        <option value="2">Product Type 2</option>
                        <option value="3">Product Type 3</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="label-bx">Tags*</Form.Label>
                      <Form.Control
                        type="text"
                        // isInvalid={errors.name ? true : false}
                        className="field-bx"
                        placeholder="Enter Tags"
                        // value={formData.name}
                        // onChange={(e) => {
                        //   setErrors({ ...errors, name: "" });
                        //   setFormData({ ...formData, name: e.target.value });
                        // }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {/* {errors.name} */}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form>
                  <Link href={'/product/1'} passHref>
                    <Button className="signin-btn" type="button">Add Product</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
