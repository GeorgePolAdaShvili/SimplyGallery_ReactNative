import React from 'react'
import { Items } from './Items'

const eventPhoto = (photo, goTo) => () => goTo(photo)
const eventAvatar = ({ user }) => () => { console.log('urls', '-----', user) }

export const ItemsList = ({ data, goToDetailsPhoto }) => (
  data.map(item => (
    <Items key={item.id} item={item} eventPhoto={eventPhoto(item, goToDetailsPhoto)} eventAvatar={eventAvatar(item)} />
  ))
)
