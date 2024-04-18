import { useState } from 'react'
import stratosLogo from '/StratosLogo.svg'
import cloudsMorning from './assets/cloudsMorning.jpg'
import cloudsAfternoon from './assets/cloudsAfternoon.jpg'
import cloudsNight from './assets/cloudsNight.jpg'
import './App.css'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { PrimeReactProvider } from 'primereact/api';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-blue/theme.css";

import { StatBox } from './components/StatBox.jsx';

import { toZonedTime } from 'date-fns-tz';

import 'chartjs-adapter-date-fns';
import annotationPlugin from 'chartjs-plugin-annotation';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const yAxis = {
  Temperature:'y',
  Precipitation:'y1',
  'Wind Speed':'y2',
  Humidity:'y3',
}

const colors = {
  x:{ solid:'rgb(3, 105, 161)', opacity: 'rgba(3, 105, 161, 0.7)' },
  y:{ solid:'rgb(247, 147, 22)', opacity:'rgba(247, 147, 22, 0.5)' },
  y1:{ solid:'rgb(53, 162, 235)', opacity:'rgba(53, 162, 235, 0.5)' },
  y2:{ solid:'rgb(161, 108, 204)', opacity:'rgba(161, 108, 204, 0.5)' },
  y3:{ solid:'rgb(255, 99, 132)', opacity:'rgba(255, 99, 132, 0.5)' },
}

const legendClicked = function (e,legendItem) {
  this.chart.getDatasetMeta(legendItem.datasetIndex).hidden = this.chart.getDatasetMeta(legendItem.datasetIndex).visible
  this.chart.scales[yAxis[legendItem.text]].options.display = !this.chart.getDatasetMeta(legendItem.datasetIndex).visible
  this.chart.update()
};

let options = {
  responsive: true,
  maintainAspectRatio:true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: '28 Day Climate Variation',
      //color: 'rgba(255,255,255,0.7)',
      color: 'rgba(3,105,161)',
      font: {
        size: 20,
        weight: 'bold'
      }
    },
    legend: {
      onClick:legendClicked,
      labels: {
        color: "rgb(255,255,255)",
        font: {
          size: 14,
          weight: 600
        }
      },
    },
    annotation: {
      drawTime: 'afterDatasetsDraw',
      annotations: {
        line1: {
          type: 'line',
          mode: 'vertical',
          //value: new Date().valueOf(),
          borderColor: 'red',
          borderWidth: 1,
          scaleID: 'x',
          label: {
            display: true,
            position: 'start',
            //content: 'Now',
            //xAdjust: 25,
            yAdjust: -6,
            //backgroundColor: colors.x.opacity,
            backgroundColor: 'rgba(255,255,255,1)',
            color: colors.x.opacity
          }
        },
        
      }
    }
  },
  scales: {
    x:{
      type: 'time',
      time: {
          unit: 'day',
          //stepSize: 24
      },
      ticks: {
        source: 'ticks', // get ticks from given labels
        color: colors.x.solid,
        //stepSize: 24
      },
    },
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      ticks: {
        color: colors.y.solid,
      },
      title:{
        text:'°C',
        display:true,
        color: colors.y.solid,
      }
    },
    y1: {
      type: 'linear',
      display: false,
      position: 'left',
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        color: colors.y1.solid,
      },
      title:{
        text:'mm',
        display:true,
        color: colors.y1.solid,
      }
    },
    y3: {
      type: 'linear',
      display: false,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        color: colors.y3.solid,
      },
      title:{
        text:'%',
        display:true,
        color: colors.y3.solid,
      }
    },
    y2: {
      type: 'linear',
      display: false,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        color: colors.y2.solid,
      },
      title:{
        text:'km/h',
        display:true,
        color: colors.y2.solid,
      }
    },
  },
};

let datasets = [
  {
    label: 'Temperature',
    borderColor: colors.y.solid,
    backgroundColor: colors.y.opacity,
    yAxisID: 'y',
    tension: 0.4
  },
  {
    label: 'Precipitation',
    borderColor: colors.y1.solid,
    backgroundColor: colors.y1.opacity,
    yAxisID: 'y1',
    tension: 0.4,
    hidden: true,
  },
  {
    label: 'Humidity',
    borderColor: colors.y3.solid,
    backgroundColor: colors.y3.opacity,
    yAxisID: 'y3',
    tension: 0.4,
    hidden: true,
  },
  {
    label: 'Wind Speed',
    borderColor: colors.y2.solid,
    backgroundColor: colors.y2.opacity,
    yAxisID: 'y2',
    tension: 0.4,
    hidden: true,
  },
]

gsap.registerPlugin(useGSAP);

const names = {
  temperature:'temperature_2m',
  windSpeed:'wind_speed_10m',
  humidity:'relative_humidity_2m',
  cloud:'cloud_cover',
  precipitation:'precipitation'
}

const calculateWeight = (variable, value, isSnow = false) => {
  switch (variable) {
    case names.temperature:
      switch (true) {
        case value<0:
          return 1;

        case value<20:
          return 2;

        case value<30:
          return 3;

        case value<40:
          return 4;

        case value>=40:
          return 5;
      
        default:
          return 3;
      }
    
    case names.precipitation:
      if(isSnow){
        switch (true) {
          case value<1.3:
            return 'Snow1';

          case value<2.5:
              return 'Snow2';

          case value>=2.5:
            return 'Snow3';
        
          default:
            return 1;
        }
      }
      else{
        switch (true) {
          case value == 0:
            return 1;

          case value<3.5:
              return 2;

          case value<10:
            return 3;

          case value>=10:
              return 4;
        
          default:
            return 1;
        }
      }

    case names.humidity:
      switch (true) {
        case value<20:
          return 1;

        case value<40:
          return 2;

        case value<60:
          return 3;

        case value<80:
          return 4;

        case value>=80:
          return 5;
      
        default:
          return 3;
      } 

    case names.windSpeed:
      switch (true) {
        case value<10:
          return 1;

        case value<35:
          return 2;

        case value<70:
          return 3;

        case value>=70:
          return 4;
      
        default:
          break;
      }
      break;
  
    default:
      break;
  }

}

let currentClouds = ''

function App() {

  const [latitude, setLatitude] = useState('')

  const [longitude, setLongitude] = useState('')

  const [values, setValues] = useState({})

  const [isReady, setReady] = useState(false)

  const [chartData, setData] = useState({})

  const [glass, setGlass] = useState({})

  let tl = gsap.timeline()

  let first = true

  let labels = []

  

  const fetchData = async () => {
    let link = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m&timezone=auto&past_days=14&forecast_days=14`
    await fetch(link).then(async res => {

      const response = await res.json()

      let date = toZonedTime(new Date(), response.timezone)

      let clouds
      
      if(date.getHours()>12 && date.getHours()<=18){
        setGlass('orange')
        clouds = cloudsAfternoon
      } 
      else if(date.getHours()>18 || date.getHours()<6){
        setGlass('black')
        clouds = cloudsNight
      }
      else{
        setGlass('')
        clouds = cloudsMorning
      }
      if(currentClouds != clouds){
        gsap.to('.bg',{ opacity: 0, duration:0.1 })
        gsap.to('.bg',{ backgroundImage:`url(${clouds})`, opacity: 1, duration:0.1 },'>')
      }
      currentClouds = clouds

      

      if(first){
        tl.to('.anim1',{ y: '-50vh', opacity: 0, duration: 0.7 })
        tl.to('.cont',{ height:115, top:0, position:'absolute', duration: 0.7},'>')
        tl.to('.anim2',{ y: -35, duration: 0.7 },'<')
        tl.to('.anim1',{ height:0, duration: 0.7},'<')
        tl.to('.first-screen',{ y: '-100vh', duration: 0.7 },'>')
        tl.to('.first-screen',{ opacity: 0, duration: 0.7 },'>')
      }
      first = false;
      
      setValues(response)
      //console.log(response)
      
      

      options.plugins.annotation.annotations.line1.value = date
      options.plugins.annotation.annotations.line1.label.content = date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour:'numeric' })
      let temp = []
      temp = response.hourly.time.map((time,i) => i%24 === 0 ? 5 : 0)
      labels = response.hourly.time
      datasets = [
        { ...datasets[0], data:response.hourly[names.temperature], pointRadius: temp },
        { ...datasets[1], data:response.hourly[names.precipitation], pointRadius: temp },
        { ...datasets[2], data:response.hourly[names.windSpeed], pointRadius: temp },
        { ...datasets[3], data:response.hourly[names.humidity], pointRadius: temp }
      ]
      setData({labels,datasets})
      setTimeout(() => {
        if(!isReady){
          setReady(true)
          setTimeout(() => {
            tl.fromTo('.stat-box',{ opacity: 0, y: 100 },{ opacity: 1, y: 0, stagger:0.2, ease: "power1.in", duration: 0.7 })
            tl.fromTo('.chart-cont',{ opacity: 0, y: -100, height:0 },{ opacity: 1, y: 0, ease: "power1.in", height:'60vh', duration: 0.7 })
            tl.fromTo('.chart',{ opacity: 0 },{ opacity: 1, y: 0, ease: "power1.in", duration: 0.7 })
          }, 0);
        }
      }, 2100);
    })
  }
  

  return (
    <PrimeReactProvider>
      
      <div className='absolute first-screen w-screen h-screen z-20 bg-[#242424] top-0'></div>
      <div className={`relative ${glass} cont w-screen h-screen flex flex-col items-center justify-center overflow-hidden z-50`}>
        <img id="logo" className='anim1' src={stratosLogo} width='270rem' alt="Stratos logo" />
        <p className='anim1 mb-8 text-slate-400 font-bold pt-8 text-xl subtitle'>A simple climate dashboard</p>
        <div className={`flex anim2 flex-row sm:space-x-8 space-x-2 pt-2 ${isReady ? 'ready' : ''}`}>
          <span className='p-float-label flex'>
              <InputNumber id="latitude" value={latitude} onChange={(e) => { 
                if(e.value >= 90)
                  setLatitude(89)
                else if(e.value <= -90)
                  setLatitude(-89)
                else
                  setLatitude(e.value)
              }} max={90} min={-90} minFractionDigits={2} maxFractionDigits={6} />
              <label htmlFor="latitude">Latitude</label>
          </span>
          <span className="p-float-label flex">
              <InputNumber id="longitude" value={longitude} onChange={(e) => {
                if(e.value >= 180)
                  setLongitude(179)
                else if(e.value <= -180)
                  setLongitude(-179)
                else
                  setLongitude(e.value)
              }} max={179} min={-180} minFractionDigits={2} maxFractionDigits={6} />
              <label htmlFor="longitude">Longitude</label>
          </span>
          <Button onClick={fetchData} label="Go" disabled={!(latitude && longitude)} />
        </div>
      </div>
      <div className={`bg ${glass} min-h-screen w-screen absolute top-0 ${isReady ? 'z-40' : 'z-10'}`} style={{backgroundImage:`url(${cloudsAfternoon})`}}>
        <div className='glass h-28 m-auto !rounded-t-none 2xl:w-[47%] xl:w-[70%] lg:w-[90%]'></div>
        {isReady &&<div className={`flex flex-col mt-6 w-screen h-[calc(100% - 136px)] items-center`} >
           <div className='flex flex-row justify-between flex-wrap xl:w-[80vw] lg:w-[90vw] w-[100vw]'>
            <StatBox 
              title={'Temperature'} 
              value={values.current[names.temperature]} 
              scale={values.current_units[names.temperature]}
              weight={calculateWeight(names.temperature, values.current[names.temperature])} />
            <StatBox 
              title={'Precipitation'} 
              value={values.current[names.precipitation]} 
              scale={values.current_units[names.precipitation]} 
              weight={calculateWeight(names.precipitation, values.current[names.precipitation], values.current.snowfall == 1)} />
            <StatBox
              title={'Humidity'} 
              value={values.current[names.humidity]} 
              scale={values.current_units[names.humidity]}
              weight={calculateWeight(names.humidity, values.current[names.humidity])} />
            <StatBox 
              title={'Wind Speed'} 
              value={values.current[names.windSpeed]} 
              scale={values.current_units[names.windSpeed]}
              weight={calculateWeight(names.windSpeed, values.current[names.windSpeed])} />
          </div>
          <div className='glass chart-cont h-[60vh] min-h-96 mt-6 self-center flex items-center justify-center py-2 px-4 xl:w-[80vw] lg:w-[90vw] w-[100vw] opacity-0 mb-4'>
            <Line className='chart opacity-0' options={options} data={chartData}  />          
          </div>
        </div>}
        
      </div>
      
    </PrimeReactProvider>
  )
}

export default App
