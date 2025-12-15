import React from 'react'

const ProgressBar = ({step,steps=4}) => {
    const percent=Math.round((step-1)/(steps-1)*100);
  return (
    <div className='mb-6'>
        <div className='flex items-center justify-between text-sm text-gray-600 mb-2'>
            <div>Step {step} of {steps}</div>
            <div>{percent}%</div>
        </div>

        <div className='h-2 b-gray-200 rounded-full overflow-hidden'>
            <div className='h-2 bg-cyan-600' style={{width:`{percent}%`}}></div>
        </div>
    </div>
  )
}

export default ProgressBar