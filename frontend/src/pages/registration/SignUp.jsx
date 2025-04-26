import React from 'react'
import {SignUpSchema,fields,initialValues} from "./components/data"
import FormComp from '@/components/FormComp'

const SignUp = () => {
  return (
    <div>
        <FormComp schema={SignUpSchema} initialValues={initialValues} fields={fields} submitBtnText={"Sign Up"} />
    </div>
  )
}

export default SignUp