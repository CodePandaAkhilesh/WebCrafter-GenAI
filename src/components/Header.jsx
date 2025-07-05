import React from 'react'

const Header = () => {
  return (
    <div className="profile">
      <div className="copy" onClick={() => window.location.reload()}>Start Free Trail</div>
      <p className='ai'>Your AI-powered website generator</p>
    </div>
  )
}

export default Header
