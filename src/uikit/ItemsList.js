import React from 'react'
import { Items } from './Items'

const onPress_photo = ({ urls }) => () => { console.log('urls', '-----', urls) }
const onPress_avatar = ({ user }) => () => { console.log('urls', '-----', user) }

export const ItemsList = ({ data }) => (
  data.map(item => (<Items key={item.id} item={item} eventPhoto={onPress_photo(item)} onPress_avatar={onPress_avatar(item)} />))
)

