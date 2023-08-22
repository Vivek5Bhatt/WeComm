import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Form, Table, Button } from 'react-bootstrap';

import { useUserState } from '/context';
import { warningToast } from '@/services/toaster';

/* API Functions */
import { getInterestList, exportInterestList } from '@/api/interestList';

/* config */
import { APP_NAME } from '/environment';

/* components */
import Loader from '@/components/loader';
import SideBar from '@/components/dashboard/sidebar';
import importico from "@/assets/images/import-ico.svg";

const Dashboard = () => {
    const userState = useUserState();
    const [pageState, setPageState] = useState(false);
    const [interestListArr, setInterestList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [queryParams, setQueryParams] = useState({ search: '', page: 1 });

    useEffect(() => {
        getInterestedUserList(queryParams);
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams]);

    const changePage = async (backward = false) => {
        userState.incrementIsLoading();
        setQueryParams({ ...queryParams, page: (backward ? --queryParams.page : ++queryParams.page) });
    }

    const getInterestedUserList = async (params) => {
        userState.incrementIsLoading();
        const apiRes = await getInterestList(params);

        if (apiRes?.statusCode === 200) {
            interestListArr = apiRes?.data?.users;
            totalPages = apiRes?.data?.total_pages;
            setInterestList(apiRes?.data?.users);
            setTotalPages(apiRes?.data?.total_pages);
        }

        userState.decrementIsLoading();
    }

    const searchUser = async (e) => {
        e.target.disabled = true;
        const searchText = e.target.value;

        setQueryParams({ search: searchText, page: 1 });
        e.target.disabled = false;
        e.target.focus();
    }

    const exportIntoCsv = async () => {
        if (interestListArr.length > 0) {
            userState.incrementIsLoading();
            const apiRes = await exportInterestList(queryParams);
    
            if (apiRes?.statusCode === 200) {
                window.open(apiRes?.data?.filepath, '_blank').focus();
                userState.decrementIsLoading();
            }
        } else {
            warningToast('Sorry! No data for export.');
        }
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
                            <h2 className="mn-heading">Join Interest List</h2>
                            <div className="hd-right-bx">
                            </div>
                        </div>

                        <div className="min-links">
                        </div>

                        <div className="filter-bar interested-user-list">
                            <div className="search-sec">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="srch-bar"
                                    value={queryParams.search}
                                    onChange={(e) => searchUser(e)}
                                />
                            </div>
                            <div className="import-sec">
                                <Button
                                    type="button"
                                    className="import-btn"
                                    onClick={(e) => exportIntoCsv(e)}
                                >
                                    <span><Image alt="Image" src={importico} /></span> Export
                                </Button>
                            </div>
                        </div>

                        <div className="dash-table market-table">
                            <div className="d-table-in">
                                <Table hover responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            interestListArr.map((user, index) => (
                                                <tr key={index}>
                                                    <td><strong>{index + 1}</strong></td>
                                                    <td><span className="serial-no">{user.name}</span></td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone_number}</td>
                                                    <td>{user.interest_rating}</td>
                                                </tr>
                                            ))
                                        }
                                        {
                                            interestListArr.length === 0 &&
                                            <tr className="text-center">
                                                <td colSpan={6}>No data available</td>
                                            </tr>
                                        }
                                    </tbody>
                                </Table>
                            </div>
                            {
                                interestListArr.length > 0 &&
                                <div className="pagination-tbl">
                                    <Button
                                        type="button"
                                        className="pg-btn"
                                        disabled={(queryParams.page < 2)}
                                        onClick={() => changePage(true)}
                                    >Previous</Button>

                                    <p>Page {queryParams.page} of {totalPages}</p>

                                    <Button
                                        type="button"
                                        className="pg-btn"
                                        disabled={(queryParams.page === totalPages)}
                                        onClick={() => changePage()}
                                    >Next</Button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;