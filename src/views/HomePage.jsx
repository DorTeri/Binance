import { Component, useEffect, useState } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import { svgService } from '../services/svg.service'
import { connect, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MovesList } from '../cmps/MovesList'
import { Chart } from '../cmps/Chart'

export function HomePage() {

    const user = useSelector((storeState) => storeState.userModule.loggedInUser)

    const [bitcoinRate, setBitcoinRate] = useState(null)
    const [marketPrice, setMarketPrice] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/signup')
            return
        }
        setMarketPrice(getMarketPrice())
        getBitcoinRate()
    }, [user.coins])

    async function getBitcoinRate() {
        const bitcoinRate = await bitcoinService.getRate(user.coins)
        setBitcoinRate(bitcoinRate)
    }

    async function getMarketPrice() {
        const marketPrice = await bitcoinService.getMarketPrice()
        setMarketPrice(JSON.parse(marketPrice))
    }

    if (!user || !marketPrice) return <div>Loading...</div>
    return (
        <section className='home-page-section'>
            <section className="home-page flex align-center">
                <div className='img-container'>
                    <img src="https://cdn-icons-png.flaticon.com/512/126/126327.png?w=740&t=st=1681746897~exp=1681747497~hmac=496172e017b9f3a60d4f0cb86e5a933ab2ce94e6c774bc06624e91573eefb3e2" />
                </div>
                <div className='user-info'>
                    <h3 className='username'>{user.name}</h3>
                    <div className='more-info flex align-center'>
                        <div className='user-coins'>
                            <span>Coins</span>
                            <span>${user.coins}</span>
                        </div>
                        <div className='user-btc'>
                            <span>BTC</span>
                            <span>{bitcoinRate}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='features-section'>
                <div className='feature transfer-feature'>
                    <h2>Refer Friends & Share up to 10,000 USD This Christmas!</h2>
                    <button onClick={() => navigate('/contacts')} className='btn-action'>Share Now</button>
                    <img src={require('../assets/imgs/tree.avif')} />
                </div>
                <div className='feature stats-home'>
                    <div>
                        <h2>Watch All Currencies Statistics</h2>
                        <button className='btn-action' onClick={() => navigate('/statistics')}>Watch Now</button>
                    </div>
                    <Chart chartData={marketPrice} />
                </div>
                <div className='feature home-moves'>
                    <h2>Your last moves</h2>
                    <MovesList title="Your last moves" movesList={user.moves.splice(0, 3)} />
                </div>
            </section>
        </section>
    )
}
