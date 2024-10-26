import React from 'react'
import { Header,Description, ProjectView} from '../containers';



const Home = () => {
  return (
   <>
    <Header />
    <Description />
    <ProjectView />
    <div className='h-screen w-full'></div>
   </>
  )
}

export default Home