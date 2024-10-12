import React from 'react'

function HomePages() {
  return (
    <div className='homePages'>
        <h2></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, sapiente. Impedit deleniti dicta alias obcaecati.</p>
       <div className="btns">
       <button className='btn'><a href="https://github.com/ilker09091">Read More</a></button>
       <button className='btn' style={{background: 'none', border: '1px solid #fff', color: '#fff'}}><a href="/contact">Contact</a></button>
       </div>
    </div>
  )
}

export default HomePages