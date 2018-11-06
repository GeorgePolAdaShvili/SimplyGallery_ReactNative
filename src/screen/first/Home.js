import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDataItemList, goToSlider } from '../../actions'
import { Header, ItemsList, Layout } from '../../uikit'
import { _Routers } from '../../../constants'

class Home extends Component {
  componentDidMount() {
    this.props.setDataList()
  }

  goToSlider = (viewImg, params) => {
    this.props.onSlider(viewImg)
    this.props.navigation.navigate(_Routers.first.DetailsPhoto, params)
  }

  render() {
    const { itemList } = this.props

    return (
      <Layout>
        <Header title={'Simply gallery'} />
        { itemList ? <ItemsList data={itemList} goTo={this.goToSlider} /> : null }
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
    setDataList: () => { dispatch(fetchDataItemList()) },
    onSlider: viewImg => { dispatch(goToSlider(viewImg)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
