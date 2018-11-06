import React from 'react'
import { Items } from './Items'

export const ItemsList = ({ data, goTo }) => data.map(item => (<Items key={item.id} item={item} eventImg={goTo} />))
