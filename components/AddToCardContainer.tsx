import React from 'react';

import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { addToCart } from '../redux/cardSlice';
import { useRouter } from 'next/navigation';

const AddToCardContainer = ({ product }: { product: any }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    return (
        <div className='border border-gray-300 rounded-md h-fit text-sm'>
           
            <div className='p-4'>
                <h1><span className='text-[#147C8F]'>FREE delivery</span> Thursday, 21 March. <span className='text-[#147C8F]'>Details</span></h1>
                <h1 className='mt-4'>Or fastest delivery Tomorrow, 20 March. Order within 15 hrs 53 mins. Details</h1>
                <p className='text-[#147C8F] my-2'>Deliver to Surendra - Jalandhar 144411‌</p>

                <button onClick={() => {
                    dispatch(addToCart(product));
                    router.push("/cart");
                }} className='bg-[#2ee324] w-full font-bold rounded-full py-1'>Add to Cart</button>
                <button className='bg-[#2ecc71] w-full font-bold rounded-full py-1 my-2'>Buy Now</button>
            </div>

        </div>
    )
}

export default AddToCardContainer