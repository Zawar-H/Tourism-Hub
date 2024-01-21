import React from 'react'


export default function signin() {
  return (
    <section className='signin'>
      <div className='p-ctr'>
        <img src = "flower.jpg"/>
      </div>
        <div className='cnt'>
          <div className='h1'>
            <h1 >Good to See You Again</h1>
          </div>
          <div className='inp'>
            <input type="text" className='user' placeholder='Username/Email'/>
            <input type="password" className='pass' placeholder='Password'/>
            <button className="btn" type="button">
              Sign in
            </button>       
          </div>
      </div>
    </section>
  )
}
