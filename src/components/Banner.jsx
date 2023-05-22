import img1 from '/banner/1.jpg'
import img2 from '/banner/2.jpg'
import img3 from '/banner/3.jpg'
import img4 from '/banner/4.jpg'

const Banner = () => {
    return (
        <section>
            <div className="carousel w-full ui-container rounded-[15px mt-5">
                  <div id="slide1" className="carousel-item !h-[80vh] relative w-full">
                    <img src={img1} className="w-full h-full object-cover" />
                    <div className='absolute bg-gradient-to-r rounded-[15px] from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full w-full'>
                        <div className='w-full h-full relative'>
                        <div className='absolute top-1/2 transform -translate-y-1/2 p-20 text-white'>
                            <h3 className='text-5xl font-bold leading-snug'>Affordable <br /> Price For Car <br /> Servicing</h3>
                            <p className='my-5'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div >
                                <button className='px-6 py-3 bg-[#FF3811] rounded text-white'>Discover More</button>
                                <button className='ml-5 px-6 py-3 text-white border border-white rounded'>Latest Project</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between bottom-16">
                      <a href="#slide4" className="absolute buttom-3 right-20 btn btn-circle">❮</a> 
                      <a href="#slide2" className="absolute buttom-3 right-4 btn btn-circle">❯</a>
                    </div>
                  </div> 
                  <div id="slide2" className="carousel-item relative !h-[80vh] w-full">
                    <img src={img2} className="w-full h-full object-cover" />
                    <div className='absolute bg-gradient-to-r rounded-[15px] from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full w-full'>
                        <div className='w-full h-full relative'>
                        <div className='absolute top-1/2 transform -translate-y-1/2 p-20 text-white'>
                            <h3 className='text-5xl font-bold leading-snug'>Affordable <br /> Price For Car <br /> Servicing</h3>
                            <p className='my-5'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div >
                                <button className='px-6 py-3 bg-[#FF3811] rounded text-white'>Discover More</button>
                                <button className='ml-5 px-6 py-3 text-white border border-white rounded'>Latest Project</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between bottom-16">
                      <a href="#slide1" className="absolute buttom-3 right-20 btn btn-circle">❮</a> 
                      <a href="#slide3" className="absolute buttom-3 right-4 btn btn-circle">❯</a>
                    </div>
                  </div> 
                  <div id="slide3" className="carousel-item relative !h-[80vh] w-full">
                    <img src={img3} className="w-full h-full object-cover" />
                    <div className='absolute bg-gradient-to-r rounded-[15px] from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full w-full'>
                        <div className='w-full h-full relative'>
                        <div className='absolute top-1/2 transform -translate-y-1/2 p-20 text-white'>
                            <h3 className='text-5xl font-bold leading-snug'>Affordable <br /> Price For Car <br /> Servicing</h3>
                            <p className='my-5'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div >
                                <button className='px-6 py-3 bg-[#FF3811] rounded text-white'>Discover More</button>
                                <button className='ml-5 px-6 py-3 text-white border border-white rounded'>Latest Project</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between bottom-16">
                      <a href="#slide2" className="absolute buttom-3 right-20 btn btn-circle">❮</a> 
                      <a href="#slide4" className="absolute buttom-3 right-4 btn btn-circle">❯</a>
                    </div>
                  </div> 
                  <div id="slide4" className="carousel-item !h-[80vh] relative w-full">
                    <img src={img4} className="w-full h-full  object-cover" />
                    <div className='absolute bg-gradient-to-r rounded-[15px] from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] h-full w-full'>
                        <div className='w-full h-full relative'>
                        <div className='absolute top-1/2 transform -translate-y-1/2 p-20 text-white'>
                            <h3 className='text-5xl font-bold leading-snug'>Affordable <br /> Price For Car <br /> Servicing</h3>
                            <p className='my-5'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                            <div >
                                <button className='px-6 py-3 bg-[#FF3811] rounded text-white'>Discover More</button>
                                <button className='ml-5 px-6 py-3 text-white border border-white rounded'>Latest Project</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between bottom-16">
                      <a href="#slide3" className="absolute buttom-3 right-20 btn btn-circle">❮</a> 
                      <a href="#slide1" className="absolute buttom-3 right-4 btn btn-circle">❯</a>
                    </div>
                  </div>
                </div>
        </section>
    );
};

export default Banner;