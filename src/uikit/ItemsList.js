import React from 'react'
import { Items } from './Items'

const onPress_photo = (photo, goTo) => () => goTo(photo)
const onPress_avatar = ({ user }) => () => { console.log('urls', '-----', user) }

export const ItemsList = ({ data, goToDetailsPhoto }) => (
  data.map(item => (<Items key={item.id} item={item} eventPhoto={onPress_photo(item, goToDetailsPhoto)} onPress_avatar={onPress_avatar(item)} />))
)

