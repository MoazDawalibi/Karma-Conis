import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useLogin } from '../../api/auth'
import { LoadingButton } from '../../Components/Utils/Loading/LoadingButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/auth/AuthReducer'
import { useTranslation } from 'react-i18next'
import { EmailJSResponseStatus } from '@emailjs/browser'
import { toast } from 'react-toastify'

function LoginForm({handleRegisterClick}:any) {
    const Navigate = useNavigate() 
    const {mutate , isSuccess ,isLoading, data,status,error} = useLogin()
    const dispatch = useDispatch()
    const [t] = useTranslation()
    
    
    const handelSubmit = (values:any)=>{
        mutate({
            email:values['email'],
            password:values['password']
          })
      }

    useEffect(()=>{
      if(isSuccess){
        dispatch(login((data as any )?.data))
        Navigate('/', { replace: true })
      }
      else if((error as any)?.response?.status == 510){
          Navigate('/verified')
          toast.error(t("Please verify your email"))
      }

    },[isSuccess , Navigate, dispatch , data])

  return (
    <div className="form-container sign-in">
  <Formik 
        initialValues={{ email: '', password: '' }}
        onSubmit={handelSubmit}
      >
      <Form >
        <img  src='/logo/LogoDone.png' style={{width:110}} />

        <h1>{t("Sign In")}</h1>
        <div  className='login_dev'>
          <label>{t("Email")}</label>
          <Field name="email" type="email" placeholder="Email" />
        </div>

        <div className='login_dev'>
          <label>{t("Password")}</label>
          <Field name="password" type="password" placeholder="Password" />
        </div>

        <LoadingButton  isLoading={isLoading}  >{t("Sign In")}</LoadingButton>
        <p className='navigateto' onClick={handleRegisterClick} >{t("or Register")}</p>

      </Form>
    </Formik>
  </div>
  )
}

export default LoginForm