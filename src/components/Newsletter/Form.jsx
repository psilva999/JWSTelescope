import React from 'react'

const Form = () => {
  return (
    <form>
      <div>
        <p>
          <input type="text" /><label htmlFor=""></label>
        </p>

        <p>
          <input type="text" />
          <label htmlFor=""></label>
        </p>
      </div>

      <p>
        <input type="text" />
        <label htmlFor=""></label>
      </p>

      <p></p>

      <div>
        <p>
          <input type="text"/>
          <label htmlFor=""></label>
        </p>

        <p>
          <input type="text"/>
          <label htmlFor=""></label>
        </p>
      </div>

      <button className='more'>SUBSCRIBE</button>
    </form>
  )
}

export default Form