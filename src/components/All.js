import React from 'react'

const All = ({data}) => {
  return (
    <section className='all-menus'>
    {data.map((menu)=>(
    <section key={menu.id} className='single-menu'>
      <img className='menu-img' src={menu.img} alt={menu.title} />
      <h2 className='menu-title'>{menu.title}</h2>
      <p className='menu-price'>${menu.price}</p>
      <p className='menu-desc'>{menu.desc}</p>
    </section>
      
    ))}
  </section>
  )
}

export default All