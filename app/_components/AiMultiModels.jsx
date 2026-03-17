'use client'

import React, { useMemo } from 'react'
import {AiModel} from '@/shared/AoModleList'
import Image from 'next/image';

const AiMultiModels = () => {
    const models = useMemo(() => AiModel, []);
    console.log(models)
  return (
    <div className='flex flex-1 h-[75vh] border-b'>
      {
        models.map((model,index) => {
            <Image key={index} alt="img" height={300} width={300} key={index} alt={model.model} src={model.icon} />
      })}
    </div>
  )
}

export default AiMultiModels
