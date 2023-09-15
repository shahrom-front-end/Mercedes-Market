import React from 'react'

const Card = (props) => {
  return (<>
  <div data-aos="zoom-in" data-aos-duration="2000" className='bg-[#333] p-[20px] sm:w-[330px] sd:w-[270px] m-auto rounded-xl'>
    <img src={props.img} alt="" />
    <br />
    <h1 className='text-[25px] font-bold text-white'>{props.txt1}</h1>
    <br />
    <p className='text-[white]'>{props.txt2}</p>
    <br />
    <button className='bg-[white] w-[120px] text-[black] p-[15px] rounded-xl'>{props.btn1}</button>
  </div>
  
  
  </>)
}

export default Card