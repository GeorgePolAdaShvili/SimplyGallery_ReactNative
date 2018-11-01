import React, { Component } from 'react'
import { Header, ItemsList, Layout } from '../../uikit'
import { _Urls, _Routers } from '../../../constants'

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

  goToDetailsPhoto = params => this.props.navigation.navigate(_Routers.first.DetailsPhoto, params)

  render() {
    const { data } = this.state

    return (
      <Layout>
        <Header title={'Simply gallery'} />
        <ItemsList data={data} goToDetailsPhoto={this.goToDetailsPhoto} />
      </Layout>
    )
  }
}
