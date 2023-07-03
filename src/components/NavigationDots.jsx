import React from 'react'

const NavigationDots = ({ active }) => {
    const links = ['home', 'about', 'work', 'education', 'skills', 'testimonial', 'contact',]
    return (
        <div className='app__navigation'>
            {links.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? { backgroundColor: '#29adff' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots