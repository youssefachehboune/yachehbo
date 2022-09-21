import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
            <a 
                href={`#${item}`}
                title={`${item}`}
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: '#313BAC' } : { }}
            >
              <i aria-hidden="true"></i>
            </a>
        ))}
    </div>
  )
}

export default NavigationDots