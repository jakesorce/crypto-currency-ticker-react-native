import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { fetchCoinData } from '../Actions/FetchCoinData'
import Spinner from 'react-native-loading-spinner-overlay';
import { CoinCard } from '../Components'

class CryptoContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCoinData());
  }

  renderCoinCards = () => {
    return this.props.crypto.data.map((coin, index) => {
      return(<CoinCard key={index} {...coin} />)
    })
  }

  render() {
    const { crypto } = this.props
    const { spinner, contentContainer } = styles

    if(crypto.isFetching)
      return(
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent="Loading Cryptos..."
            textStyle={spinner}
            animation="fade"
          />
        </View>
      )
    else
      return(
        <ScrollView contentContainerStyle={contentContainer}>
          { this.renderCoinCards() }
        </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  spinner: {
    color: '#253145',
  },
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55,
  },
})

mapStateToProps = (state) => {
  return { crypto: state.crypto }
}

export default connect(mapStateToProps)(CryptoContainer)
