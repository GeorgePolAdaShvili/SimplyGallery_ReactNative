import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDataItemList } from '../../actions/get_ItemList'
import { Header, ItemsList, Layout } from '../../uikit'
import { _Urls, _Routers } from '../../../constants'

class Home extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    try {
      const api_call = await fetch(_Urls.getItemList)
      const data = await api_call.json()
      this.setState({ data })
      this.props.setDataList()
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

const mapStateToProps = state => {
  return {
    itemList: state.itemList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setDataList: () => { dispatch(fetchDataItemList()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
