/* next components */
import Head from "next/head";

/* config */
import { APP_NAME } from "/environment";

/* components */
import Loader from "/components/loader";
import SideBar from "/components/dashboard/sidebar";

const Detail = () => {
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
              <h2 className="mn-heading">Product Detail</h2>
              <div className="hd-right-bx"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
