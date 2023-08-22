import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const toastPosition = toast.POSITION.TOP_RIGHT;

/* For success response */
export const successToast = (message = '') => {
    if (message) {
        toast.success(message, {
            position: toastPosition,
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            draggable: true
        });
    }
};

/* For error response */
export const errorToast = (message = '') => {
    if (!message) { message = 'Something went wrong!' }
    toast.error(message, {
        position: toastPosition,
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        draggable: true
    });
};

/* For warning response */
export const warningToast = async (message = '') => {
    if (!message) { message = 'Something went wrong!' }

    toast.warn(message, {
        position: toastPosition,
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        draggable: true
    });
}