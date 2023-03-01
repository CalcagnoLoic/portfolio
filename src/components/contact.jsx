import CONTACT from '../assets/img/contactme.png'

const Contact = () => {
    return (
        <div className="mb-8">
            <h2 id="contact" className="text-center text-dark-blue mt-20 text-3xl lg:text-4xl font-bold">Contact</h2>
            <div className= "mt-6 flex justify-center lg:gap-20">
                <div className='self-center hidden md:block lg:block'>
                    <img src={CONTACT} alt="" />
                </div>
                <div>
                    <form action=""className="flex flex-col my-5 bg-dark-blue py-8 px-6 md:py-10 md:px-20 md:py-6 rounded-xl shadow-lg shadow-indigo-500/50 sm:px-20 md:mr-6 lg:mr-4">
                        <div className="flex flex-col sm:gap-1 sm:mb-8 mb-2">
                            <label htmlFor="" className="text-white mb-1 font-semibold">Nom : </label>
                            <input type="text" placeholder="Votre nom..." required className="rounded-md p-2 w-72 md:w-80 lg:w-96"/>
                        </div>
                        <div className="flex flex-col sm:gap-1 sm:mb-8 mb-2">
                            <label htmlFor="" className="text-white mb-1 font-semibold">Sujet : </label>
                            <input type="text" placeholder="Votre sujet..." required className="rounded-md p-2 w-72 md:w-80 lg:w-96"/>
                        </div>
                        <div className="flex flex-col sm:gap-1 sm:mb-8 mb-2">
                            <label htmlFor="" className="text-white mb-1 font-semibold">Email : </label>
                            <input type="email" required placeholder="Votre adresse email..." className="rounded-md w-72 p-2 md:w-80 lg:w-96"/>
                        </div>
                        <div className="flex flex-col sm:gap-1 sm:mb-8 mb-2">
                            <label htmlFor="" className="text-white mb-1 font-semibold">Votre message : </label>
                            <textarea cols="30" rows="4" required placeholder="Votre message..." className="rounded-md w-72 p-2 md:w-80 lg:w-96"></textarea>
                        </div>
                        <input type="submit" value="Envoyer" className="text-white font-bold p-4 bg-black rounded-xl cursor-pointer hover:bg-white hover:text-dark-blue duration-1000 text-lg mt-3"/>
                    </form>
                </div>
                
            </div>
            
        </div>
    )
}

export default Contact