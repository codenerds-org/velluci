import { useShoppingCart } from "use-shopping-cart";
import Lottie from 'react-lottie';
import animationData from '../../../public/lottie/empty-cart.json';

const ShoppingCart = () => {
    // const { shouldDisplayCart } = useShoppingCart();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div
            className={`bg-white flex flex-col absolute right-3 md:right-9 top-14 
            w-80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md transition-opacity duration-500 ${true ? "opacity-0" : "opacity-100"}`}
        >
            <div className="flex flex-col justify-center items-center py-20">
                <Lottie
                    options={defaultOptions}
                    height={250}
                    width={250}
                    style={{ userSelect: 'none', position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -40%)' }}
                />
                <h2 className="text-3xl text-black mt-24">Your cart is empty</h2>
                <h3 className="text-lg text-black">Add some items to get started!</h3>
            </div>
        </div>
    )
}

export default ShoppingCart;