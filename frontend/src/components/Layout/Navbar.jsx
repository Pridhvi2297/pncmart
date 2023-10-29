import React from 'react'
import styles from '../../styles/styles'
import { navItems } from '../static/data'
import { Link } from 'react-router-dom'

const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
        {
            navItems && navItems.map((i,index) => (
                <div className='flex'>
                <Link to={i.url}
                className={`${active === index + 1 ? "text-[#a2b73b]" : "text-[#0a0505] 800px:text-white"} font-[500] px-6 cursor-pointer hover:bg-[#34a48e] pb-[30px] 800px:pb-0 }`}>
                {i.title}
                </Link>  
                </div>
            ))
        }

    </div>
  )
}

export default Navbar