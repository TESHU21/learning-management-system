import React from 'react'
import FormComp from '@/components/FormComp'
import{SignInSchema,fields,initialValues} from "./components/data"
const Login = () => {
  return (
    <div className=' flex justify-center'>
        <div className='  w-[500px]  shadow-md border rounded-3xl p-6'>
        <FormComp schema={SignInSchema} fields={fields} initialValues={initialValues} submitBtnText={"Login"}  showForgotPassword ={true}/>
        </div>
        
    </div>
  )
}

export default Login