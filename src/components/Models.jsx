import React, { use} from 'react';
import ModelCard from './ModelCard';

const Models = ({ModelPromise}) => {
   const models=use(ModelPromise)
 

    return (
        <div className='py-20'> 
          <div className='text-center space-y-3'>
              <h2 className='text-5xl font-bold'>Choose your AI Model</h2>
            <p className='text-2xl mb-20'>One suscription gives access to all</p>
            
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 container mx-auto'>
           {
            models.map(model=> 
              <ModelCard key={model.id} model={model}></ModelCard>
            )
           }
          </div>
        </div>
    );
};

export default Models;