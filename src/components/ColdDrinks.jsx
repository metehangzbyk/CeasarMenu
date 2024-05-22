import React from 'react'
import { ColdDrinkData } from '../Products/ColdDrinkData'
import MenuItem from '../components/MenuItem'
import '../styles/hotdrink.css'

export const ColdDrinks = () => {
    return (
        <div className='menu'>
            <div className='menuList'>
                {ColdDrinkData.map((menuItem) => {
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
