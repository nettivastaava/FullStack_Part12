import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Todo from './Todo'

test('Todo text is rendered correctly', () => {
  const todo = {
    text: 'Do your homework',
    done: false,
    _id: 'aa1104bcbb75' 
  }

  const component = render(
    <Todo todo={todo} />
  )

  expect(component.container).toHaveTextContent(todo.text)
})