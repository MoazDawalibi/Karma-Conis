import React from 'react'
import Layout from '../../Layout/app/Layout'
import { useGetAboutUs } from '../../api/app_info'
import LoadingPage from '../Loading/LoadingPage';
import { useTranslation } from 'react-i18next';


const About = () => {
  const {data , isLoading} = useGetAboutUs({id:1})

    const [t] = useTranslation()
  if(isLoading){

    return <LoadingPage/>
  }
  console.log(data.data);
  
  return (
    <Layout>
        <h1 className='About_Header'>{t("About us")}</h1>
        <div className='Top_Card_container' >

            <span>
              <img src='/logo/LogoDone.png' alt='logo' className='logo_image'/>
              </span>
        </div>

        <div className='Bottom_Card_container' >
        </div>
        <div className='Description_title'>
          <h1 className='title'>{t("Who are we")}</h1>
        </div>
        <div className='description text-center'>
              {/* {t("UboutUsINfo")} */}
              {/* {data.} */}
              {data?.data?.translations?.at(0)?.content}
               </div>

    </Layout>
  )
}

export default About