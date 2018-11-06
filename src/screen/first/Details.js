import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Header, ImgBlock } from '../../uikit'

class Details extends Component {
  goToHome = () => { this.props.navigation.goBack() }

  render() {
    const { viewImg } = this.props.view
    const { urls } = viewImg

    return (
      <Layout>
        <Header backMode={this.goToHome} title='Details photo' />
        { viewImg ? <ImgBlock fullMode urlImg={{uri: urls.full}} /> : null }
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    view: state.slider
  }
}

export default connect(mapStateToProps)(Details)
