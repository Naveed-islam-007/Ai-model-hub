import React, { use } from 'react';

const Models = ({ModelPromise}) => {
   const models=use(ModelPromise)
   console.log(models)

    return (
        <div className='py-20'> 
          <div className='text-center space-y-3'>
              <h2 className='text-5xl font-bold'>Choose your AI Model</h2>
            <p className='text-2xl mb-20'>One suscription gives access to all</p>
            
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 container mx-auto'>
           {
            models.map(model=> 
              <div className='border shadow-lg rounded-xl overflow-hidden '>
                <div className='flex justify-center h-56 bg-zinc-200'>
                    <img src={model.image} alt="" className='h-40 w-40 object-contain' />
                </div>
                <div className='p-4 space-y-2'>
                    <h2 className='text-2xl font-bold'>{model.title}</h2>
                    <p>{model.description}</p>
                    <span className='text-3xl font-bold'>${model.price}/month</span>
                     <button className='btn w-full bg-red-500 rounded-xl'>Subscribe</button>
                </div>
                
            
              </div>
            )
           }
          </div>
        </div>
    );
};

export default Models;