import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDataItemList } from '../../actions/get_ItemList'
import { Header, ItemsList, Layout } from '../../uikit'
import { _Routers } from '../../../constants'

class Home extends Component {
  componentDidMount() {
    this.props.setDataList()
  }

  goToDetailsPhoto = params => this.props.navigation.navigate(_Routers.first.DetailsPhoto, params)

  render() {
    const { itemList } = this.props
    //console.log(this.props)

    return (
      <Layout>
        <Header title={'Simply gallery'} />
        { itemList ? <ItemsList data={itemList} goToDetailsPhoto={this.goToDetailsPhoto} /> : null }
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemList: state.setList.itemList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setDataList: () => { dispatch(fetchDataItemList()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
