import Link from 'next/link';
import { Container } from 'react-bootstrap';

/* environment */
import { BASE_URL } from '/environment';
import { useUserState } from '/context';

const Footer2 = () => {
    const userState = useUserState();
    return (
        <>
            <Container>
                <div className="copy-right">
                    <div className="left">
                    {
                        (!userState.isAuth) &&
                        <>
                            <p>Get started <br/> with our product</p>
                            <Link passHref href={`${BASE_URL}/home`}><a className="join-btn">Subscribe</a></Link>
                        </>
                    }
                    </div>
                    <div className="right">
                        <p>© {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Footer2;