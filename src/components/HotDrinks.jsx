import React from 'react'
import { HotDrinksData } from '../Products/HotDrinksData'
import MenuItem from '../components/MenuItem'
import '../styles/hotdrink.css'

export const HotDrinks = () => {
    return (
        <div className='menu'>
            <div className='menuList'>
                {HotDrinksData.map((menuItem) => {
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
