import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, ItemsList, Layout } from '../../uikit'
import { _Urls } from '../../../constants'

export default class extends Component {
  state = {
    data: []
  }
  async componentDidMount() {
    try {
      const api_call = await fetch(_Urls.getItemList)
      const data = await api_call.json()
      this.setState({ data })
    } catch (e) {
      throw e
    }
  }

  render() {
    const { data } = this.state

    return (
      <View>
        <Layout>
          <Header title={'Simply gallery'} />
          <ItemsList data={data} />
        </Layout>
      </View>
    )
  }
}
