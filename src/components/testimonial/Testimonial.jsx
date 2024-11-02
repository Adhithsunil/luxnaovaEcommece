import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { useNavigate } from 'react-router-dom';

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    const user = JSON.parse(localStorage.getItem('user'));

    // navigate is funciton add comment 
    const navigate = useNavigate();
    const handleAddCommentClick = () => {
    navigate('/addcomment');
     };

     const handleDisplayCommentClick = () => {
        navigate('/displaycomment');
         };

    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/personid.jpg" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">These pants are surprisingly comfortable and stylish. They fit well and look great with a variety of tops. The material is durable and easy to care for. I'm really happy with my purchase.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Rishab Rikhiram Sharma</h2>
                                <div className="flex justify-center items-center">
                                    <img className="w-10 h-10" src="/reshot-icon-star.svg" alt="" />
                                    <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500 ml-2">5</p>
                                </div>       
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/personid.jpg" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">"I'm absolutely in love with this dress! The fabric is so soft and comfortable, and the fit is perfect. I've received so many compliments on it. Highly recommend!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Radha</h2>
                                <div className="flex justify-center items-center">
                                    <img className="w-10 h-10" src="/reshot-icon-star.svg" alt="" />
                                    <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500 ml-2">5</p>
                                </div> 
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/personid.jpg" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">This shirt is exactly what I was looking for. The color is vibrant, and the material is high-quality. It's great for casual wear and looks fantastic with jeans or shorts.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">harry</h2>
                                <div className="flex justify-center items-center">
                                    <img className="w-10 h-10" src="/reshot-icon-star.svg" alt="" />
                                    <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500 ml-2">5</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center -mt-10 mb-4 pt-9 ">

                    <button onClick={handleAddCommentClick} className=' bg-gray-300 px-5 py-2 rounded-xl me-3'>Addcomment</button>
                    <button    onClick={handleDisplayCommentClick} className=' bg-gray-300 px-5 py-2 rounded-xl me-3'>See more</button>
                </div>
            </section>
        </div>
    )
}

export default Testimonial