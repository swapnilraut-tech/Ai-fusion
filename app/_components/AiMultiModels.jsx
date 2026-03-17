

import React from 'react'
import {AiModel} from '@/shared/AoModleList'
import Image from 'next/image';

const AiMultiModels = () => {
    const models = AiModel;
  return (
    <div className='flex flex-1 h-[75vh] border-b'>
      {
        models.map((model,index) => {
            return (
              <Image
                key={model.model}
                alt={model.model}
                height={24}
                width={24}
                src={model.icon}
              />
            )
      })}
    </div>
  )
}

export default AiMultiModels
