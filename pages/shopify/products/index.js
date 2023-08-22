import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';

/* config */
import { APP_NAME, BASE_URL } from '/environment';
import { useUserState } from '/context';

/* API Functions */
import { errorToast } from '@/services/toaster';
import { fetchShopifyProducts } from '@/api/integrations';

/* components */
import Loader from '@/components/loader';
import SideBar from '@/components/dashboard/sidebar';

/* images */
import shopifyLogo from '@/assets/images/shopify.svg';
import back from '@/assets/images/back-ico.svg';

const ShopifyProduct = () => {
    const userState = useUserState();
    const [page, setPages] = useState(1);
    const [products, setProducts] = useState([]);
    const [pageTokens, setPageTokens] = useState([]);
    const [queryParams, setQueryParams] = useState({ token: '' });

    const getShopifyProducts = async (params) => {
        const apiRes = await fetchShopifyProducts(params);

        if (apiRes?.statusCode === 200) {
            setProducts(apiRes?.data?.products);

            if (apiRes?.data?.token) {
                const nextPageNumber = page + 1;
                pageTokens[nextPageNumber] = apiRes?.data?.token;
                setPageTokens(pageTokens);
            }
        } else if (apiRes?.statusCode === 400 && apiRes?.not_connected === true) {
            errorToast(apiRes?.message);
            setTimeout(() => { window.location.href = '/shopify'; }, 2000);
        }

        userState.decrementIsLoading();
    }

    useEffect(() => {
        userState.incrementIsLoading();
        getShopifyProducts(queryParams);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams]);

    const changePage = async (backward = false) => {
        userState.incrementIsLoading();
        page = ( backward ? --page : ++page );
        queryParams = { token: pageTokens[page] !== undefined ? pageTokens[page] : '' };

        setQueryParams({ ...queryParams });
        setPages(page);
    }

    return (
        <>
            <Head>
                <title>{`${APP_NAME} | Shopify Products`}</title>
            </Head>

            <Loader></Loader>

            <div className="register-container">
                <div className="register-inner">
                    <SideBar></SideBar>

                    <div className="ryt-container dash-right">
                        <div className="ryt-heading">
                            <h2 className="mn-heading marketplace-heading">
                                <Image alt="Image" src={shopifyLogo} />
                                <span> Shopify</span>
                            </h2>
                        </div>

                        <div className="min-links">
                        </div>

                        <div className="form-section mt-2">
                            <Row>
                                <Col className="text-md-end">
                                    <Link passHref href={`${BASE_URL}/shopify`}>
                                        <a className="icon-btn mb-4"><span><Image alt="Image" src={back} /></span> Go Back</a>
                                    </Link>
                                </Col>
                                <Col lg={12}>
                                    <div className="dash-table market-table">
                                        <div className="d-table-in">
                                            <Table hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Type</th>
                                                        <th>Description</th>
                                                        <th>Tags</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        products.map((product, index) => (
                                                            <tr key={index}>
                                                                <td><span className="serial-no">{product.title}</span></td>
                                                                <td>{product.product_type}</td>
                                                                <td className="white-space-break" dangerouslySetInnerHTML={{ __html: product.body_html }}></td>
                                                                <td>{product.tags}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                    {
                                                        products.length === 0 &&
                                                        <tr className="text-center">
                                                            <td colSpan={4}>No data available</td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </Table>
                                        </div>
                                        {
                                            products.length > 0 &&
                                            <div className="pagination-tbl">
                                                <Button
                                                    type="button"
                                                    className="pg-btn"
                                                    disabled={(page === 1)}
                                                    onClick={() => changePage(true)}
                                                >Previous</Button>

                                                <p></p>

                                                <Button
                                                    type="button"
                                                    className="pg-btn"
                                                    disabled={(pageTokens[page + 1] === undefined)}
                                                    onClick={() => changePage()}
                                                >Next</Button>
                                            </div>
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopifyProduct;