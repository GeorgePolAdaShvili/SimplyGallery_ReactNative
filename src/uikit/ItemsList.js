import React from 'react'
import { Items } from './Items'

const event_onPress = item => {
  const { urls, user } = item
  const getDataItem = {urls, user}
  console.log('urls', '-----', urls)
  console.log('user', '-----', user)
  console.log('getData', '-----', getDataItem)
}

export const ItemsList = ({ data }) => (
  data.map(item => (<Items key={item.id} item={item} onPress={() => { event_onPress(item) }} />))
)

