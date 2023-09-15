import React from 'react'

const Cord = (props) => {
  return (<>
        <div data-aos="zoom-in" data-aos-duration="2000" className='sm:flex gap-6 m-auto bg-[#333] 2xl:w-[674px] lg:w-[480px] md:w-[500px] sm:w-[560px] p-[20px] rounded-xl dark:text-white'>
            <div className='bg-[white] p-[10px] rounded-xl'>
                <img className='m-auto' src={props.img} alt="" />
            </div>
            <div className='sd:text-center sm:text-start'>
                <h1 className='text-[25px] font-bold'>{props.text1}</h1><br />
                <h1>{props.text2}</h1>
            </div>
        </div>
  </>)
}

export default Cord