import React from 'react'
import { DessertsData } from '../Products/DessertsData'
import MenuItem from '../components/MenuItem'
import '../styles/hotdrink.css'

export const Dessert = () => {
    return (
        <div className='menu'>
            <div className='menuList'>
                {DessertsData.map((menuItem) => {
                    return (
                        <MenuItem
                            key={menuItem.name}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}
