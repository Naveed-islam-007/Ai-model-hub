import React, { useState } from 'react';

const ModelCard = ({model}) => {
     const [isSubscribed,setisSubscribed]=useState(false);

     const handleSubscripion=()=>{
        setisSubscribed(true);
       
     }
    return (
      <div className='border shadow-lg rounded-xl overflow-hidden '>
                <div className='flex justify-center h-56 bg-zinc-200'>
                    <img src={model.image} alt="" className='h-40 w-40 object-contain' />
                </div>
                <div className='p-4 space-y-2'>
                    <h2 className='text-2xl font-bold'>{model.title}</h2>
                    <p>{model.description}</p>
                    <span className='text-3xl font-bold'>${model.price}/month</span>
                     <button onClick={handleSubscripion} className='btn w-full bg-red-500 rounded-xl' disabled={isSubscribed}>{isSubscribed?"Subscribed":"Subscribe Now"}</button>
                </div>
                
            
              </div>
    );
};

export default ModelCard;