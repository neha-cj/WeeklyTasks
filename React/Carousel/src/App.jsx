import { useState } from 'react';
const images = [
    {
      title:"First image",
      url:'https://picsum.photos/id/1018/800/400'},
    {
      title:"Second image",
      url:'https://picsum.photos/id/1015/800/400'},
    {
      title:"Third image",
      url:'https://picsum.photos/id/1019/800/400'
    }
];

function App() {
  const[activeIndex, setActiveIndex]=useState(0);
  const length = images.length;

  const nextSlide= () =>{
    setActiveIndex((nextIndex) =>(nextIndex+1)%length);
  };

  const prevSlide = ()=>{
    setActiveIndex((prevIndex)=> prevIndex === 0 ? length-1 : prevIndex-1);
  };


  return (
    <> 
      <h1 className='text-center text-semibold text-xl mt-5'>Carousel</h1>
      <div className='relative mx-auto mt-10 shadow-lg rounded overflow-hidden md:w-[800px]'>
        <section>
          {images.map((slide,index)=> (
            <div
              key={index}
              className={`${index === activeIndex ? "block": "hidden"} transition-opacity duration-500 ease-in-out`}
            >
              <img className='slide-image' src={slide.url} alt="" />
              <h2 className='text-center text-blue-400 font-semibold'>{slide.title}</h2>
            </div>
          ))}
        </section>
      </div>
      <div className='absolute mx-auto top-1/3 left-0 right-0 flex justify-between items-center px-4 transform md:w-[800px]'>
        <span className='text-4xl text-white opacity-65 cursor-pointer select-none hover:scale-125 transition' onClick={prevSlide}>&#10094;</span>
        <span className='text-4xl text-white opacity-65 cursor-pointer select-none hover:scale-125 transition' onClick={nextSlide}>&#10095;</span>
      </div>
    </>
  )
}

export default App
