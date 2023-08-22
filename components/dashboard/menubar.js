import Link from 'next/link';
import Image from 'next/image';

/* Images */
import rgicon from '@/assets/images/rg-icon.svg';
import amazon from '@/assets/images/amazon.svg';
import walmart from '@/assets/images/walmart.svg';
import shopify from '@/assets/images/shopify.svg';
import settings from '@/assets/images/settings.svg';
import discover from '@/assets/images/discover.svg';
import market from '@/assets/images/market.svg';
import fulfill from '@/assets/images/fulfill.svg';
import product from '@/assets/images/shortcut.svg';

const MenuBar = (props) => {
    return (
        <div className="rg-menu">
            {/* Menu Bar */}
            <ul>
                <li>
                    <Link passHref href={`${props.baseUrl}/dashboard`}>
                        <a className={ props.activeRouteArr[0] === 'dashboard' ? 'active' : '' }>
                            <span><Image alt="Image" src={rgicon}/></span>
                            Dashboard
                        </a>
                    </Link>
                </li>
                <li>
                    <Link passHref href={'#'}>
                        <a className={ props.activeRouteArr[0] === 'fulfillment' ? 'active' : '' }>
                            <span><Image alt="Image" src={fulfill}/></span>
                            Fulfillment
                        </a>
                    </Link>
                </li>
                <li>
                    <Link passHref href={'#'}>
                        <a className={ props.activeRouteArr[0] === 'marketing' ? 'active' : '' }>
                            <span><Image alt="Image" src={market}/></span>
                            Marketing
                        </a>
                    </Link>
                </li>
                <li>
                    <Link passHref href={'#'}>
                        <a className={ props.activeRouteArr[0] === 'discover' ? 'active' : '' }>
                            <span><Image alt="Image" src={discover}/></span>
                            Discover
                        </a>
                    </Link>
                </li>
                <li>
                    <Link passHref href={'#'}>
                        <a className={ props.activeRouteArr[0] === 'settings' ? 'active' : '' }>
                            <span><Image alt="Image" src={settings}/></span>
                            Settings
                        </a>
                    </Link>
                </li>
                <li>
                    <Link passHref href={`${props.baseUrl}/product`}>
                        <a className={ props.activeRouteArr[0] === 'product' ? 'active' : '' }>
                            <span><Image alt="Image" src={product}/></span>
                            Product
                        </a>
                    </Link>
                </li>
            </ul>

            {/* Market Bar */}
            <div className="market-bar">
                <h6>Marketplaces</h6>

                <Link passHref href={`${props.baseUrl}/shopify`}>
                    <a className="mr-bar">
                        <span className={ props.activeRouteArr[0] === 'shopify' ? 'dot green' : 'dot' }></span>
                        <span className="name-bx">
                            <span className="img"><Image alt="Image" src={shopify}/></span> Shopify
                        </span>
                    </a>
                </Link>

                <Link passHref href={'#'}>
                    <a className="mr-bar">
                        <span className={ props.activeRouteArr[0] === 'amazon' ? 'dot green' : 'dot' }></span>
                        <span className="name-bx">
                            <span className="img"><Image alt="Image" src={amazon}/></span> Amazon
                        </span>
                        <span className="count">10</span>
                    </a>
                </Link>

                <Link passHref href={'#'}>
                    <a className="mr-bar">
                        <span className={ props.activeRouteArr[0] === 'walmart' ? 'dot green' : 'dot' }></span>
                        <span className="name-bx">
                            <span className="img"><Image alt="Image" src={walmart}/></span> Walmart
                        </span>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default MenuBar;