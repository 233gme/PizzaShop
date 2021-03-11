import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../../components'

const Home = ({ pizzas }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((pizza => <PizzaBlock key={pizza.id} name={pizza.name} img={pizza.imageUrl} price={pizza.price} />))}
      </div>
    </div>
  )
}

export default Home
