import React from 'react'

const Header = () => {  
    const getText = text => {
      return (
        <div>
          <h3>Welcome {text}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magnam distinctio rerum explicabo, ipsam ratione?</p>
        </div>
      )
    }
  
    return <div>{getText('guys to Bukhara')}</div>
}

export default Header