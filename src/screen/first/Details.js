import React, { Component } from 'react'
import { Layout, Header, ImgBlock } from '../../uikit'

export default class extends Component {
  render() {
    const { navigation } = this.props
    const { urls } = navigation.state.params

    return (
      <Layout>
        <Header title='Details photo' />
        <ImgBlock fullMode urlImg={{uri: urls.full}} />
      </Layout>
    )
  }
}
