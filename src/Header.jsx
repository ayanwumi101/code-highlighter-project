import React from 'react'
import './App.css'

const Header = ({language}) => {
  return (
      <div className='language'>
          <div>
              <p>{language}</p>
              <p>Copy code</p>
          </div>
      </div>
  )
}

export default Header