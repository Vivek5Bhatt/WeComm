/* next components */
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router';

/* bootsrap components */
import { Form, Table, Button } from "react-bootstrap";

/* config */
import { APP_NAME } from "/environment";

/* components */
import Loader from "/components/loader";
import SideBar from "/components/dashboard/sidebar";
import importico from "@/assets/images/import-ico.svg";

const Product = () => {
  const router = useRouter();

  const addProduct = () => {
    router.push({ pathname: '/product/add' });
  }

  return (
    <>
      <Head>
        <title>{`${APP_NAME} | Dashboard`}</title>
      </Head>
      <Loader></Loader>
      <div className="register-container">
        <div className="register-inner">
          <SideBar></SideBar>
          <div className="ryt-container dash-right">
            <div className="ryt-heading">
              <h2 className="mn-heading">Product List</h2>
              <div className="hd-right-bx"></div>
            </div>
            <div className="min-links"></div>
            <div className="filter-bar interested-user-list">
              <div className="import-sec">
                <Button
                  type="button"
                  className="import-btn"
                  onClick={addProduct}
                >
                  {/* <span>
                    <Image alt="Image" src={addico} />
                  </span>{" "} */}
                  Add Product
                </Button>
              </div>
            </div>
            <div className="filter-bar interested-user-list">
              <div className="search-sec">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="srch-bar"
                  // value={queryParams.search}
                  // onChange={(e) => searchUser(e)}
                />
              </div>
              <div className="import-sec">
                <Button
                  type="button"
                  className="import-btn"
                  // onClick={(e) => exportIntoCsv(e)}
                >
                  <span>
                    <Image alt="Image" src={importico} />
                  </span>{" "}
                  Export
                </Button>
              </div>
            </div>
            <div className="dash-table market-table">
              <div className="d-table-in">
                <Table hover responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Vendor</th>
                      <th>Product Type</th>
                      <th>Tags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {interestListArr.map((user, index) => (
                      <tr key={index}>
                        <td>
                          <strong>{index + 1}</strong>
                        </td>
                        <td>
                          <span className="serial-no">{user.name}</span>
                        </td>
                        <td>{user.email}</td>
                        <td>{user.phone_number}</td>
                        <td>{user.interest_rating}</td>
                      </tr>
                    ))}
                    {interestListArr.length === 0 && (
                      <tr className="text-center">
                        <td colSpan={6}>No data available</td>
                      </tr>
                    )} */}
                  </tbody>
                </Table>
              </div>
              {/* {interestListArr.length > 0 && (
                <div className="pagination-tbl">
                  <Button
                    type="button"
                    className="pg-btn"
                    disabled={queryParams.page < 2}
                    onClick={() => changePage(true)}
                  >
                    Previous
                  </Button>

                  <p>
                    Page {queryParams.page} of {totalPages}
                  </p>

                  <Button
                    type="button"
                    className="pg-btn"
                    disabled={queryParams.page === totalPages}
                    onClick={() => changePage()}
                  >
                    Next
                  </Button>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
      Products
    </>
  );
};

export default Product;
