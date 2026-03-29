import { Trash, Trash2 } from 'lucide-react';
import React from 'react';

const Cart = ({carts,setCarts}) => {

    const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    }
    
    return (
        <div className=''>
          <h1 className='text-center my-5 text-5xl '>MY CART</h1>
          <div className='flex flex-col container mx-auto w-full'>
            {
                carts.map(item=>
                    <div className='flex justify-between items-center border border-black rounded-2xl h-50 w-auto p-5 mb-10'>
                        <div className='flex flex-col md:flex-row items-center object-cover'>
                            <img src={item.image} alt="" className='h-20 w-20  lg:h-40 w-40'/>
                        <div>
                               <h2 className='text-4xl'>{item.title}</h2>
                            <h2 className='text-4xl'>{item.price}/month</h2>
                           
                        </div>
                        </div>
                      <div onClick={()=>handleDelete(item)}>
                        <Trash2></Trash2>
                      </div>


                    </div>
                )
            }
          </div>
        </div>
    );
};

export default Cart;