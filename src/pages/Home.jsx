import React from 'react'
import { Header,Description,ServicesView,  ProjectView} from '../containers';



const Home = () => {
  return (
   <>
    <Header />
    <Description />
    <ServicesView />
    <ProjectView />
    <div className='h-screen w-full'></div>
   </>
  )
}

export default Home