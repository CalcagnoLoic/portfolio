import picture from '../assets/img/developer.png';


const Presentation = () => {
    return (
        <div className='flex justify-center mt-7 flex-col md:flex-row lg:flex-row gap-5 px-5 sm:px-5 md:px-28 lg:px-28 sm:gap-8 md:gap-16 lg:gap-16' >
            <div className='flex flex-col justify-center basis-1/2'>
                <div className='flex flex-row justify-center'>
                    <p className='text-3xl text-dark-blue text-center'>Hey, bienvenue</p>
                    <span className='text-3xl animate-wave'>👋</span>
                </div>
                
                <h1 className='text-center text-dark-blue text-2xl'>Je suis développeur web junior</h1>
                <p className='text-center text-dark-blue text-xl leading-relaxed'>Vous pouvez retrouver dans ce portfolio les réalisations dont je suis le plus fier et ainsi montrer mes capacités dans ce monde magnifique du développement web!</p>
            </div>
            <div className='basis-1/2'>
                <img src={picture} alt="I'm a dev" className='mx-auto'/>
            </div>
        </div>
    )
}

export default Presentation;