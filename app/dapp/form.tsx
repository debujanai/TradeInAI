'use client';
import React, {  ReactNode ,useState, useEffect } from 'react';
import { CircularProgress, Grid, Typography, TextField, Button, makeStyles } from '@material-ui/core';
import Script from 'next/script';

import axios from 'axios';
import './test.css'; // Import CSS file
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Lottie from 'react-lottie';
import LottieBackground from './animation.json';

interface PivotData {
  pivot_point: {
    classic: {
      pp: number;
      R1: number;
      R2: number;
      R3: number;
      S1: number;
      S2: number;
      S3: number;
    };
    fibonacci: {
      pp: number;
      R1: number;
      R2: number;
      R3: number;
      S1: number;
      S2: number;
      S3: number;
    };
    camarilla: {
      pp: number;
      R1: number;
      R2: number;
      R3: number;
      S1: number;
      S2: number;
      S3: number;
    };
  };
}

interface MAData {
  ma_avg: {
    summary: string; // Add this line
    SMA: {
      MA5: {
        v: number;
        s: string;
      };
      MA10: {
        v: number;
        s: string;
      };
      MA20: {
        v: number;
        s: string;
      };
      MA50: {
        v: number;
        s: string;
      };
      MA100: {
        v: number;
        s: string;
      };
      MA200: {
        v: number;
        s: string;
      };
    };
    EMA: {
      MA5: {
        v: number;
        s: string;
      };
      MA10: {
        v: number;
        s: string;
      };
      MA20: {
        v: number;
        s: string;
      };
      MA50: {
        v: number;
        s: string;
      };
      MA100: {
        v: number;
        s: string;
      };
      MA200: {
        v: number;
        s: string;
      };
    };
  };
  count: {
    Total_Buy: number;
    Total_Sell: number;
    Total_Neutral: number;
  };
  overall: {
    summary: string;
    // Other properties if applicable...
  };
}

interface IndicatorsData {
  indicators: {
    summary: ReactNode;
    RSI14: {
      v: number;
      s: string;
    };
    STOCH9_6: {
      v: number;
      s: string;
    };
    STOCHRSI14: {
      v: number;
      s: string;
    };
    MACD12_26: {
      v: number;
      s: string;
    };
    WilliamsR: {
      v: number;
      s: string;
    };
    CCI14: {
      v: number;
      s: string;
    };
    ATR14: {
      v: number;
      s: string;
    };
    UltimateOscillator: {
      v: number;
      s: string;
    };
    ROC: {
      v: number;
      s: string;
    };
    overall: {
      summary: string;
    };
  };
}


const useStyles = makeStyles({
  button: {
    fontFamily: 'Space Grotesk',
    marginTop: '20px',
    backgroundColor: '#1c1b36',
    color: 'white',
    borderRadius: '0px',
    padding: '16px 32px',
    fontSize: '0.8rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '120px',
    height: '60px',
    '&:hover': {
      backgroundColor: '#302e54',
    },
  },
  lottieContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    backgroundColor: '#131726',
  },

});

const Form: React.FC = () => {
  const classes = useStyles();
  const [coinName, setCoinName] = useState('');
  const [period, setPeriod] = useState('');
  const [loading, setLoading] = useState(false);
  const [pivotData, setPivotData] = useState<PivotData | null>(null);
  const [MAData, setMAData] = useState<MAData | null>(null);
  const [IndicatorsData, setIndicatorsData] = useState<IndicatorsData | null>(null);
  const [selectedSymbol, setSelectedSymbol] = useState('BINANCE:BTCUSDT');
  const [inputSymbol, setInputSymbol] = useState('BTCUSDT');
  const [chartDimensions, setChartDimensions] = useState({ width: 600, height: 600 });

  
  
  useEffect(() => {
    function handleResize() {
      // Adjust dimensions based on screen width
      if (window.innerWidth <= 767) {
        setChartDimensions({ width: window.innerWidth, height: 600 });
      } else {
        setChartDimensions({ width: 600, height: 600 });
      }
    }

    // Set initial dimensions
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSymbol(e.target.value);
  };
  const handleLoadChart = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    setSelectedSymbol(inputSymbol.toUpperCase());
  };
  
  const defaultOptions = {
    
    loop: true,
    autoplay: true,
    animationData: LottieBackground,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);
    try {
      const apiKey = 'cSXTKWueMjGtwSCVzQDZXIk';
      const url = `https://fcsapi.com/api-v3/crypto/pivot_points?symbol=${coinName}&period=${period}&access_key=${apiKey}`;
      const url_one = `https://fcsapi.com/api-v3/crypto/ma_avg?symbol=${coinName}&period=${period}&access_key=${apiKey}`;
      const url_two = `https://fcsapi.com/api-v3/crypto/indicators?symbol=${coinName}&period=${period}&access_key=${apiKey}`;
      const response_three = await axios.get(url);
      const response_one = await axios.get(url_one);
      const response_two = await axios.get(url_two);
      setPivotData(response_three.data.response);
      setMAData(response_one.data.response);
      setIndicatorsData(response_two.data.response);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {    
    handleLoadChart();
    
  }, []);


  return (
    <section style={{  fontFamily: 'Space Grotesk, sans-serif' }} >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography className='text-justify' variant="h4" style={{ margin: '20px 0', color: 'white' , fontFamily: 'Space Grotesk, sans-serif' }}>
        Welcome to TradeIn AI DApp
      </Typography>
      </div>
    <div className="container" >
   
             <div className={classes.lottieContainer}>
      <Lottie options={defaultOptions} />
      </div>
        <div  className="widget">
        <iframe
  src="https://jup.ag/"
  width="400"
  height="700"
  title="Matcha Widget"
  
></iframe>

      </div>



      <div   className="form">
      <form onSubmit={handleSubmit} className="flex flex-col items-center form">
            
            <div style={{ fontSize: '1.3rem' }}>Enter a coin e.g (BTC/USD)</div>
            <TextField
              value={coinName}
              onChange={(e) => setCoinName(e.target.value)}
              required
              className="inputField"
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
            />
            <div style={{ fontSize: '1.3rem',marginTop:'20px'  }}>Enter Time Period e.g (1h,1d)</div>
            <TextField
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              required
              className="inputField"
              InputProps={{
                style: { color: 'white' },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
            />
            
            <Button
            className={classes.button}
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              style={{ marginTop: '20px' }}
            >
              Fetch Data
            </Button>
          </form>
          <Grid container spacing={1}>
  {pivotData && (
    <Grid item xs={12} sm={5}>
      <div className="paper" style={{ textAlign: 'center' }}>
        <Typography variant="h6" style={{ fontFamily: 'Space Grotesk' }}>
          Classic Pivot Points
        </Typography>
        <Typography variant="body1" style={{ fontFamily: 'Space Grotesk', fontSize: 'small', fontWeight: 'bold' }}>
          
          PP: {pivotData.pivot_point?.classic?.pp}<br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              R1: {pivotData.pivot_point?.classic?.R1}<br />
              R2: {pivotData.pivot_point?.classic?.R2}<br />
              R3: {pivotData.pivot_point?.classic?.R3}<br />
            </div>
            <div>
              S1: {pivotData.pivot_point?.classic?.S1}<br />
              S2: {pivotData.pivot_point?.classic?.S2}<br />
              S3: {pivotData.pivot_point?.classic?.S3}
            </div>
          </div>
        </Typography>
      </div>

      <div className="paper" style={{ textAlign: 'center' }}>
        <Typography variant="h6" style={{ fontFamily: 'Space Grotesk' }}>
          Fibonacci Pivot Points
        </Typography>
        <Typography variant="body1" style={{ fontFamily: 'Space Grotesk', fontSize: 'small', fontWeight: 'bold' }}>
          PP: {pivotData.pivot_point?.fibonacci?.pp}<br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              R1: {pivotData.pivot_point?.fibonacci?.R1}<br />
              R2: {pivotData.pivot_point?.fibonacci?.R2}<br />
              R3: {pivotData.pivot_point?.fibonacci?.R3}<br />
            </div>
            <div>
              S1: {pivotData.pivot_point?.fibonacci?.S1}<br />
              S2: {pivotData.pivot_point?.fibonacci?.S2}<br />
              S3: {pivotData.pivot_point?.fibonacci?.S3}
            </div>
          </div>
        </Typography>
      </div>

      <div className="paper" style={{ textAlign: 'center' }}>
        <Typography variant="h6" style={{ fontFamily: 'Space Grotesk' }}>
          Camarilla Pivot Points
        </Typography>
        <Typography variant="body1" style={{ fontFamily: 'Space Grotesk', fontSize: 'small', fontWeight: 'bold' }}>
          PP: {pivotData.pivot_point?.camarilla?.pp}<br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              R1: {pivotData.pivot_point?.camarilla?.R1}<br />
              R2: {pivotData.pivot_point?.camarilla?.R2}<br />
              R3: {pivotData.pivot_point?.camarilla?.R3}<br />
            </div>
            <div>
              S1: {pivotData.pivot_point?.camarilla?.S1}<br />
              S2: {pivotData.pivot_point?.camarilla?.S2}<br />
              S3: {pivotData.pivot_point?.camarilla?.S3}
            </div>
          </div>
        </Typography>
      </div>


    </Grid>
  )}

  {/* Moving Averages & Technical Indicators */}
  <Grid item xs={12} sm={7}>
    {/* Moving Averages Summary */}
    {MAData?.ma_avg && (
      <div className="paper" style={{ textAlign: 'center' }}>
        <Typography style={{ fontFamily: 'Space Grotesk', fontSize: 'small', fontWeight: 'bold' }}>
          Moving Averages Summary
          </Typography>
          <div >Summary: {MAData.ma_avg?.summary}</div>
        
        <Typography variant="body1" style={{ fontFamily: 'Space Grotesk', fontSize: 'small', fontWeight: 'bold' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <strong>SMA:</strong>
              <div>MA5: {MAData.ma_avg?.SMA?.MA5?.v} ({MAData.ma_avg?.SMA?.MA5?.s})</div>
              <div>MA10: {MAData.ma_avg?.SMA?.MA10?.v} ({MAData.ma_avg?.SMA?.MA10?.s})</div>
              <div>MA20: {MAData.ma_avg?.SMA?.MA20?.v} ({MAData.ma_avg?.SMA?.MA20?.s})</div>
              <div>MA50: {MAData.ma_avg?.SMA?.MA50?.v} ({MAData.ma_avg?.SMA?.MA50?.s})</div>
              <div>MA100: {MAData.ma_avg?.SMA?.MA100?.v} ({MAData.ma_avg?.SMA?.MA100?.s})</div>
              <div>MA200: {MAData.ma_avg?.SMA?.MA200?.v} ({MAData.ma_avg?.SMA?.MA200?.s})</div>
            </div>
            <div>
              <strong>EMA:</strong>
              <div>MA5: {MAData.ma_avg?.EMA?.MA5?.v} ({MAData.ma_avg?.EMA?.MA5?.s})</div>
              <div>MA10: {MAData.ma_avg?.EMA?.MA10?.v} ({MAData.ma_avg?.EMA?.MA10?.s})</div>
              <div>MA20: {MAData.ma_avg?.EMA?.MA20?.v} ({MAData.ma_avg?.EMA?.MA20?.s})</div>
              <div>MA50: {MAData.ma_avg?.EMA?.MA50?.v} ({MAData.ma_avg?.EMA?.MA50?.s})</div>
              <div>MA100: {MAData.ma_avg?.EMA?.MA100?.v} ({MAData.ma_avg?.EMA?.MA100?.s})</div>
              <div>MA200: {MAData.ma_avg?.EMA?.MA200?.v} ({MAData.ma_avg?.EMA?.MA200?.s})</div>
            </div>
          </div>
        </Typography>
      </div>
    )}

        {/* Technical Indicators Summary */}
        {IndicatorsData?.indicators &&  (
      <div className="paper" style={{ textAlign: 'center' }}>
        <Typography style={{ fontFamily: 'Space Grotesk', fontSize: 'small', fontWeight: 'bold' }}>
          Technical Indicators Summary
          </Typography>
          <div >Summary: {IndicatorsData.indicators?.summary}<br/></div>
        
        <Typography variant="body1" style={{ fontFamily: 'Space Grotesk', fontSize: 'small', fontWeight: 'bold' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              RSI: {IndicatorsData.indicators?.RSI14?.v} ({IndicatorsData.indicators?.RSI14?.s})<br />
              STOCH: {IndicatorsData.indicators?.STOCH9_6?.v} ({IndicatorsData.indicators?.STOCH9_6?.s})<br />
              STOCHRSI: {IndicatorsData.indicators?.STOCHRSI14?.v} ({IndicatorsData.indicators?.STOCHRSI14?.s})<br />
              MACD: {IndicatorsData.indicators?.MACD12_26?.v} ({IndicatorsData.indicators?.MACD12_26?.s})<br />
              Williams: {IndicatorsData.indicators?.WilliamsR?.v} ({IndicatorsData.indicators?.WilliamsR?.s})<br />
            </div>
            <div>
              
              CCI: {IndicatorsData.indicators?.CCI14?.v} ({IndicatorsData.indicators?.CCI14?.s})<br />
              ATR: {IndicatorsData.indicators?.ATR14?.v} ({IndicatorsData.indicators?.ATR14?.s})<br />
              UO: {IndicatorsData.indicators?.UltimateOscillator?.v} ({IndicatorsData.indicators?.UltimateOscillator?.s})<br />
              ROC: {IndicatorsData.indicators?.ROC?.v} ({IndicatorsData.indicators?.ROC?.s})
            </div>
          </div>
        </Typography>
      </div>
    )}
  </Grid>
</Grid>
{MAData?.count && (
        <div className="paper" style={{ textAlign: 'center' }}>
          <Typography variant="h6" style={{ fontFamily: 'Space Grotesk' }}>
            Overall Summary: {MAData.overall.summary}
          </Typography>
          <Typography variant="body1" style={{ fontFamily: 'Space Grotesk', fontSize: 'small', fontWeight: 'bold' }}>
            Total Buy: {MAData.count.Total_Buy}<br />
            Total Sell: {MAData.count.Total_Sell}<br />
            Total Neutral: {MAData.count.Total_Neutral}
          </Typography>
        </div>
      )}
          
      </div>  


      <div className='tradeview'>
    <div className="tradingViewContainer">
    <AdvancedRealTimeChart
            symbol={selectedSymbol}
            theme="dark"
            autosize={false}
            width={chartDimensions.width}
            height={chartDimensions.height}
          />
    </div>
      <div className="tradeform">
    <form 
        onSubmit={handleLoadChart} 
        style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginTop: '20px' 
        }}
    >
        <TextField
            value={inputSymbol}
            onChange={handleInputChange}
            required
            className="inputField"
            placeholder="Enter Symbol e.g. BTCUSDT"
            variant="standard"
            style={{ 
                width: '300px', // Set a fixed width
                maxWidth: '350%'// Ensure it doesn't overflow
            }}
            InputProps={{
                style: { color: 'white' },
            }}
            InputLabelProps={{
                style: { color: 'white' },
            }}
        />
            
            <Button
            className={classes.button}
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}              
              style={{ paddingBottom: "30px"
                
            }}>
              Load Chart
            </Button>
    </form>
    </div>
</div>
</div>
    </section>
  );
}
export default Form;