import React from 'react';
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
  Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
  }
  
  Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
  }
  console.log(text)

  const headerStyles = {
    background: bgColor,
    color: textColor
  }
  
  return (<header style={headerStyles}>
            <div className="container">
              <h2>{text}</h2>
            </div>
          </header>
)
}



    
export default Header;

