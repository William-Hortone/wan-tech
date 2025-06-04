import { Hero } from './Hero'
import Infos from './Infos'
import { Nav } from './Nav'

const HeroWrapper = () => {
    return (
        <section className="relative w-full flex flex-col justify-between h-screen overflow-hidden bg-[#0f172a]">
            <Nav />
            <div className='flex flex-col-reverse items-center justify-center w-full h-full lg:justify-between lg:flex-row bgd-red-600' >
                <div className='flex flex-col items-center justify-center w-full h-full gap-4 px-4 lg:items-start'   >
                    <div className='px-8 text-center lg:text-left'>
                        <h2 className="text-3xl font-bold text-neutral-400 sm:text-5xl md:text-7xl">
                            Vos projets   <br />
                            prennent vie  <br />
                            entre
                            <span className="inline-block -skew-x-[18deg] pl-2 font-black text-basic">
                                nos mains.
                            </span>
                        </h2>
                        <p className='py-4 text-neutral-400'>Nous transformons vos idees en solutions digitales innovantes

                            Chez WANTECH.
                            <br />
                            qui se demarquent dans un monde numerique en constante
                            évolution.</p>
                    </div>
                    <div className='flex gap-2'>
                        <a
                        href='#contact' 
                            className="flex items-center gap-2 rounded-sm cursor-pointer app__button group"
                        >
                            <div className="flex items-center min-w-[150px] text-[12px] md:text-[15px] md:w-[200px]  justify-start app__button-content bg-basic">
                                <p className="text-white whitespace-nowrap" >
                                    Nous Contacter
                                </p>
                                <p className="text-white whitespace-nowrap ">
                                    Nous Contacter
                                </p>
                            </div>
                        </a>

                        <a
                        href='#services' 

                            className="flex items-center gap-2 rounded-sm cursor-pointer app__button group"
                        >
                            <div className="flex items-center w-[130px] md:w-[200px] text-[12px]  md:text-[15px] justify-start border border-white app__button-content bg-transparent">
                                <p className="text-white whitespace-nowrap " >
                                    nos services
                                </p>
                                <p className="text-white whitespace-nowrap " >
                                    nos services
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className=' hidden md:w-1/2 lg:flex items-center justify-center overfldow-hidden max-h-[30vh] h-auto md:max-h-[60vh]'>
                    <div className='w-[70%] h-[30vh] md:h-[40vh] z-20 rounded-lg'>

                        <Hero />
                    </div>
                </div>
            </div>
            <div className='bgd-green-600'>

                <Infos />
            </div>
            <div className="absolute top-[50%] translate-y-[-50%] right-[10%] w-[600px] h-[600px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full blur-3xl opacity-60 animate-spin-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-br  via-teal-400 to-green-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>

        </section>
    )
}

export default HeroWrapper