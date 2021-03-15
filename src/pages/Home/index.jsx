import React, { useCallback } from 'react';
import { Categories, SortPopup, PizzaBlock } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/actions/filters';

const catigoriesItems = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [{ name: 'популярности', type: 'popylar' }, { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'alphabet' }];

const Home = () => {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();
  const onSelectCategory = useCallback(index => { dispatch(setCategory(index)) }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={catigoriesItems} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{items && items.map((pizza => <PizzaBlock key={pizza.id} {...pizza} />))}</div>
    </div>
  )
};

export default Home;
