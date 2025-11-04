import React from 'react'

const FormPart = () => {
  return (
    <div>
      <form className='grid grid-cols-1 gap-12'>
        <input type="text" placeholder='ENTER YOUR NAME*' className='outline-0'/>
        <input type="email" placeholder='ENTER YOUR EMAIL*'/>
        <input type="number" placeholder='PHONE NUMBER'/>
        <input type="text" placeholder='YOUR MESSAGE*'/>
        <button type='submit'/>
      </form>
    </div>
  )
}

export default FormPart
