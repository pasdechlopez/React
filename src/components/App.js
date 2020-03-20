import React from 'react';

import { addTodo, setVisibilityFilter} from './actions'
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)

// Выведем в консоль начальное состояние
console.log(store.getState())

// Каждый раз при обновлении состояния — выводим его
// Отметим, что subscribe() возвращает функцию для отмены регистрации слушателя
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Отправим несколько действий
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(setVisibilityFilter(“HIDE_COMPLETED”))

// Прекратим слушать обновление состояния
unsubscribe()

export default App;
