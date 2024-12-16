import { useState } from 'react'

import './App.css'
import { TextField } from '@mui/material'


function App() {

  const [name,setName]=useState('')
  const [temp,setTemp]=useState('')
  const [description,setDescription]=useState('')

  const getWeather =async()=>{
    const apiKey="ef68af1efaf1bcc9ad398b71f5fb7805";
    const city = search.value
    console.log(city);

    if (city) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      console.log(response);

      if (response.status == 200) {
        const weatherDetails = await response.json()
        console.log(weatherDetails);

          setName(weatherDetails.name) 
          setTemp(weatherDetails.main.temp) 
          setDescription(weatherDetails.weather[0].description) 
        
        
      }else{
        alert('enter a valid location')
      }
      
      
    }else{
      alert('please enter the location')
    }
    

  }


 

  return (
    <>
      <div className='d-flex justify-content-center ' style={{ height:'100vh' , width:'100%', background:` url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDktYWV3LTAxM18xXzEuanBn.jpg')`,backgroundSize:'cover' ,backgroundPosition:'center'}}> 

      <h1 className='mt-5 fw-bolder' style={{color:'white'}}>Weather details</h1>

      <div style={{position:'absolute',top:'10rem'}}>
        <input id='search' className=' p-3' style={{width:'15rem',borderRadius:'10px',height:'2.5rem'}} type="text" placeholder='enter the location' />
        <button onClick={getWeather} type='submit' className='btn btn-info ms-2'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
     
     <div style={{backgroundColor:`rgba(0, 0, 0, 0.47)`,border:'solid,white',height:'30rem',position:'relative',width:'25rem',position:'absolute',top:'15rem',borderRadius:'10px'}}>

     <img style={{width:'50%',position:'absolute',left:'6rem'}} src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png" alt="" />

     <div style={{height:'100%',width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} className='text-info mt-5'>
       <h3>Location :<span style={{color:'white'}} className='fw-bolder'>{name}</span></h3>
       <h3>temperature :<span style={{color:'white'}} className='fw-bolder'>{temp}</span></h3>
       <h3>weather :<span style={{color:'white'}} className='fw-bolder'>{description}</span></h3>
     </div>

     </div>

      



     

     

      

        


        
        



       

      </div>
    </>
  )
}

export default App
