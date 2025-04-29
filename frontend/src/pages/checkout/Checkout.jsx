import React from 'react'
import FormComp from '@/components/FormComp'
import {CheckoutSchema,fields,initialValues} from "./components/data"


const Checkout = () => {
  return (
    <div>
        <div className=' flex md:h-[175px] w-full bg-blue-primary items-center justify-center font-lato text-[40px] font-bold leading-12'>
            <h3 className=' text-white '>Checkout</h3>
        </div>
        <div className='flex md:mx-[200px] '>
            <div className='md:mt-[161px]'>
                <FormComp schema={CheckoutSchema} fields={fields} initialValues={initialValues} hideButton={true}/>

            </div>
            <div>
                <h3>Complete Payment</h3>
            </div>
        </div>
    </div>
  )
}

export default Checkout