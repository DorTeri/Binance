import axios from "axios"

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins) {
    const url = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    try {
        const rate = await axios({
            method: 'get',
            url,
        })
        return rate.data
    } catch (err) {
        console.log('error rate', err)
    }
}

async function getConfirmedTransactions() {
    const transc = localStorage.getItem('transc')
    if (transc) return transc
    const url = `https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`
    try {
        const res = await axios({
            method: 'get',
            url,
        })
        console.log('res', res.data)
        localStorage.setItem('transc' , JSON.stringify(res.data))
        return res.data
    } catch(err) {
        console.log('error rate' , err)
    }
}

async function getMarketPrice() {
    const marketPrice = localStorage.getItem('marketPrice')
    if (marketPrice) return marketPrice
    const url = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
    try {
        const res = await axios({
            method: 'get',
            url,
        })

        localStorage.setItem('marketPrice', JSON.stringify(res.data))
        return res.data
    } catch (err) {
        console.log('error rate', err)
    }
}

// getConfirmedTransactions()
// getMarketPrice()