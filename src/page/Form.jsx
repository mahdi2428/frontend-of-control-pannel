import React from 'react'

export default function Form() {
  return (
    <div>
        <form>
            <input type="text" name='name' placeholder='Enter your name' />
            <input type="email" name='email' placeholder='Enter your email' />
            <input type="text" name='content' placeholder='Content' />
            <button type='submit'>SEND</button>
        </form>
    </div>
  )
}
