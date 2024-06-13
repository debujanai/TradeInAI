'use client';
import React, {  ReactNode ,useState, useEffect } from 'react';
import { CircularProgress, Grid, Typography, TextField, Button, makeStyles } from '@material-ui/core';
import Script from 'next/script';
import Footer from '@/components/ui/footer';
import axios from 'axios';
import './test.css'; // Import CSS file
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Lottie from 'react-lottie';
import LottieBackground from './animation.json';
import SearchIcon from '@mui/icons-material/Search';
import signalsData from './signals.json'; 
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
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0px',
    padding: '8px 16px',
    fontSize: '0.6rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '80px',
    height: '40px',
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
  const [chartDimensions, setChartDimensions] = useState({ width: 0, height: 0 });
  const [widgetDimensions, setWidgetDimensions] = useState({ width: 400, height: 500 });
  const [currentSignalIndex, setCurrentSignalIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSignalIndex((prevIndex) => (prevIndex + 1) % signalsData.length);
    }, 5000); // Transition every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);


  useEffect(() => {
    function handleResize() {
      // Adjust dimensions based on screen width
      if (window.innerWidth <= 767) {
        setWidgetDimensions({ width: 320, height: 500 });

      } else {
        setWidgetDimensions({ width: 400, height: 500 });
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

  
  
  useEffect(() => {
    function handleResize() {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (isMobile) {
        // Set dimensions for mobile screens
        setChartDimensions({ width: Math.floor(window.innerWidth * 0.8), height: 600 });
      } else {
        // Set dimensions for non-mobile screens (60% width and 40% height for example)
        setChartDimensions({ width: Math.floor(window.innerWidth * 0.6), height: Math.floor(window.innerHeight * 0.4) });
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
    <section  >
      
      <div style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', /* Center vertically */
  
}}>
  <h2 
    className="h1 mb-4" 
    data-aos="fade-up" 
    style={{
      background: 'linear-gradient(to right, #a7ffe2, #82f3ec, #64e6f6, #56d6fd, #60c5ff, #66bfff, #6eb8fe, #78b1fc, #6ab6fe, #5cbaff, #4cbfff, #3bc3ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text', /* Adding text shadow */
      textAlign: 'center', /* Center text horizontally */
    }}
  >
    Welcome to TradeInAI DAPP
  </h2>
</div>
      <div className='body'>
     
    <div className='first'>
    <div className="signals">
      
      <h1 style={{ textAlign: "center",fontSize: '2rem' }}>AI Signals</h1>
      <div className="coming-container">
    <p className="coming-text">Coming Soon</p>
  </div>
      {/*
      <div className="signal-text">
        {signalsData.map((signal, index) => (
          <div key={index} style={{ display: index === currentSignalIndex ? 'block' : 'none' }} className="signal-item">
            {signal.split('\n').map((line, lineIndex) => (
              <div key={lineIndex} className="line">{line}</div>
            ))}
          </div>
        ))}
      </div>
      */}
    </div>

      <div className='tradeview'>        
  
    <AdvancedRealTimeChart
            symbol={selectedSymbol}
            theme="dark"
            autosize={false}
            width={chartDimensions.width}
            height={chartDimensions.height}
          />
    

</div>
</div>  







<div  className="second">
<div className='ad'>
  <h2 style={{ textAlign: "center",fontSize: '2rem' }}>Ads here</h2>

  <div className="coming-soon-container">
    <p className="coming-soon-text">Coming Soon</p>
  </div>
</div>






      <div  className="widget">
        <iframe
  src="https://app.uniswap.org//"
  width={widgetDimensions.width}
  height={widgetDimensions.height}
  title="Matcha Widget"
  
></iframe>

      </div>

      <div   className="data">
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center form">
  <div className="flex items-center w-full">
    <div className="flex items-center w-1/2 pr-4">
      <div style={{ fontSize: '1rem', marginRight: '10px' }}>Enter a coin e.g (BTC/USD)</div>
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
    </div>

    <div className="flex items-center w-1/2 pr-4">
      <div style={{ fontSize: '1rem', marginRight: '10px' }}>Enter Time Period e.g (1h,1d)</div>
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
    </div>

    <Button
      className={classes.button}
      type="submit"
      variant="contained"
      color="primary"
      disabled={loading}
      
    >
      <SearchIcon />
    </Button>
  </div>
</form>
          <Grid container spacing={2} >
  {pivotData && (
    <Grid item xs={12} sm={5}>
      <div className="paper" style={{ textAlign: 'center' }}>
        <Typography variant="h6" style={{ fontFamily: 'Space Grotesk' }}>
          Classic Pivot Points
        </Typography>
        <Typography variant="body1" style={{ fontFamily: 'Space Grotesk', fontSize: 'small',}}>
          
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
        <Typography variant="body1" style={{ fontFamily: 'Space Grotesk', fontSize: 'small',}}>
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
        <Typography variant="body1" style={{ fontFamily: 'Space Grotesk', fontSize: 'small',}}>
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
  <Grid item xs={12} sm={12}>

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
      </Grid>
          </Grid>
      </div>  

      </div>

<Footer /> 
</div>
    </section>
    
  );
}
export default Form;
