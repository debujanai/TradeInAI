"use client";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Button, Typography } from '@material-ui/core';
import './test.css'; // Import CSS file

interface Coin {
  name: string;
  symbol: string;
  thumb: string;
  sparkline: string;
  price: number;
  marketRank: number;
  priceChange24h: number;
  marketCap: number;
  totalVolume: number;
}

export default function Trending() {
  const [trendingCoins, setTrendingCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        const coins = response.data.coins.map((coin: any) => ({ // You can replace 'any' with 'Coin'
          name: coin.item.name,
          symbol: coin.item.symbol,
          thumb: coin.item.thumb,
          sparkline: coin.item.data.sparkline,
          price: coin.item.data.price,
          marketRank: coin.item.market_cap_rank,
          priceChange24h: coin.item.data.price_change_percentage_24h.usd,
          marketCap: coin.item.data.market_cap,
          totalVolume: coin.item.data.total_volume,
        }));
        setTrendingCoins(coins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };
    fetchTrendingCoins();
    const intervalId = setInterval(fetchTrendingCoins, 30000);

    return () => clearInterval(intervalId);
    
    
  }, []);

  return (
    
    
    <section className="relative overflow-hidden" style={{  fontFamily: 'Space Grotesk, sans-serif',padding: '20px 0' }} >
        <div style={{ fontFamily: 'Space Grotesk, sans-serif'}} className="max-w-6xl mx-auto px-4 sm:px-6 trendingCoinsContainer">
          

            <div className="trendingCoins">
              {trendingCoins.map((coin, index) => (
                <a
                  key={index}
                  className={`coin ${coin.priceChange24h < 0 ? 'negative' : 'positive'}`}
                  href={`https://www.coingecko.com/en/coins/${coin.name.toLowerCase().replace(/\s+/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginBottom: '20px' }}
                >
                  <img src={coin.thumb} alt={coin.symbol} className="coinIcon" style={{ float: 'left', marginRight: '10px' }} />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div  style={{ marginRight: '10px' }}>
                      <Typography className="text-lg text-center grow" variant="subtitle1" style={{ fontSize: '0.9rem' ,fontFamily: 'Space Grotesk, sans-serif' }}>
                        {coin.name}
                      </Typography>
                      <Typography variant="body2" style={{ fontSize: '0.8rem' ,fontFamily: 'Space Grotesk, sans-serif'  }}>
                        {coin.symbol}
                      </Typography>
                    </div>
                    <div style={{ textAlign: 'right', marginRight: '10px' }}>
                      <Typography variant="body2" style={{ fontSize: '1rem' ,fontFamily: 'Space Grotesk, sans-serif'  }}>
                      Price: {parseFloat(coin.price.toString()).toFixed(4)}

                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ fontSize: '0.8rem',  color: coin.priceChange24h < 0 ? 'red' : 'green',fontFamily: 'Space Grotesk, sans-serif'         }}
                      >
                        Change: {parseFloat(coin.priceChange24h.toString()).toFixed(2)}%

                      </Typography>
                    </div>
                    <div>
                      <img src={coin.sparkline} alt={coin.symbol} className="coinIcon" />
                    </div>
                  </div>
                </a>
              ))}
            
          </div>
        </div>
      </section>
    
  );
}
