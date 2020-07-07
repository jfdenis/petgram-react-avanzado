import React from 'react'
import { Item, List } from './styles'
import { Category } from '../Category'

export const ListOfCategories = () => {
  return (
    <List>
      {
        [1, 2, 3, 4].map(category => <Item key={category}><Category /></Item>)
      }
    </List>
  )
}