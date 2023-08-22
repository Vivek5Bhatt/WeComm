import Head from 'next/head';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { successToast } from '@/services/toaster';
import { useUserState } from '/context';

/* API Functions */
import { handleShopifyCallback } from '@/api/integrations';

/* config */
import { APP_NAME } from '/environment';

/* components */
import Loader from '@/components/loader';
import SideBar from '@/components/dashboard/sidebar';

/* images */
import shopifyLogo from "@/assets/images/shopify.svg";

const ShopifyCallback = () => {
    const router = useRouter();
    const userState = useUserState();

    const createAccessToken = async () => {
        userState.incrementIsLoading();

        if (Object.keys(router.query).length > 0) {
            const apiRes = await handleShopifyCallback(router.query);

            if (apiRes?.statusCode === 200) {
                successToast('Shopify Connected successfully.');
                setTimeout(() => { window.location.href = '/shopify'; }, 2000);
            }
        }
    }

    useEffect(() => {
        createAccessToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);

    return (
        <>
            <Head>
                <title>{`${APP_NAME} | Shopify`}</title>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopifyCallback;