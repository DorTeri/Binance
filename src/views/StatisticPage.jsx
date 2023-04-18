import { Component } from 'react'
import { bitcoinService } from '../services/bitcoin.service'
import { Chart } from '../cmps/Chart'

export class StatisticPage extends Component {

    state = {
        transc: null,
        marketPrice: null
    }

    async componentDidMount() {
        const transc = await bitcoinService.getConfirmedTransactions()
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({ transc: JSON.parse(transc) , marketPrice: JSON.parse(marketPrice) })
    }


  render() {
    const { transc , marketPrice } = this.state
    if(!transc || !marketPrice) return <div>Loading...</div>
    return (
      <section className='statistic-page'>
        <Chart chartData={transc}/>
        <Chart chartData={marketPrice}/>
        </section>
    )
  }
}
