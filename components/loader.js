import Image from 'next/image';

import { useUserState } from '/context';
import loader from "@/assets/images/loader.svg";

const Loader = () => {
    const userState = useUserState();

    if (userState.isLoading > 0) {
        let element = document.getElementsByTagName('body')[0];

        if (!element.classList.contains('processing')) {
            element.classList.add('processing');
        }
    } else {
        document.getElementsByTagName('body')[0].classList.remove('processing');
    }

    return (
        <>
            {
                (userState.isLoading > 0) &&
                <div className="overlay">
                    <div className="overlay__inner">
                        <div className="overlay__content">
                            <Image alt="loading..." src={loader} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Loader;