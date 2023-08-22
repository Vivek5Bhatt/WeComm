import App from "next/app";
import { RouteGuard } from '@/components/RouteGuard';
import { UserProvider } from '/context';

import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/fonts.css';
import '@/styles/globals.scss';
import '@/styles/loader.css';

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <UserProvider>
                <RouteGuard>
                    <Component {...pageProps} />
                </RouteGuard>
            </UserProvider>
        );
    }
}

export default MyApp;