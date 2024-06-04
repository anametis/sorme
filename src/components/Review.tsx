import React from 'react'
import Image from 'next/image'
import { Card } from './ui/card'

const Review = ():React.JSX.Element => {
    return (
    <section className='my-12 w-full flex flex-col gap-10 md:flex-row md:justify-between'>
        <div className='flex flex-col items-center justify-center'>
            <Image src="/images/r1.png" alt="Person review image" width={420} height={1080} className=""/>
            <div className='border rounded-b-3xl border-gray-200 p-6 w-[420px]'>
                <p>The most complete review of this product</p>
                <div className='flex items-center justify-between text-gray-400'>
                    <span>Jesus</span>
                    <time>1990/02/22</time>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <Image src="/images/r2.png" alt="Person review image" width={420} height={1080} className=""/>
            <div className='border rounded-b-3xl border-gray-200 p-6 w-[420px]'>
                <p>The most complete review of this product</p>
                <div className='flex items-center justify-between text-gray-400'>
                    <span>Jesus</span>
                    <time>1990/02/22</time>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <Image src="/images/r3.png" alt="Person review image" width={420} height={1080} className=""/>
            <div className='border rounded-b-3xl border-gray-200 p-6 w-[420px]'>
                <p>The most complete review of this product</p>
                <div className='flex items-center justify-between text-gray-400'>
                    <span>Jesus</span>
                    <time>1990/02/22</time>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Review