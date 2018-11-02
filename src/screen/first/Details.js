import React, { Component } from 'react'
import { Layout, Header, ImgBlock } from '../../uikit'

export default class extends Component {
  goToHome = () => { this.props.navigation.goBack() }

  render() {
    const { navigation } = this.props
    const { urls } = navigation.state.params

    return (
      <Layout>
        <Header backMode={this.goToHome} title='Details photo' />
        <ImgBlock fullMode urlImg={{uri: urls.full}} />
      </Layout>
    )
  }
}
