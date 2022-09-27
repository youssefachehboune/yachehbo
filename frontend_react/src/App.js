import {useState,useEffect} from 'react';
import axios from 'axios';


import { Preloader, About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import { client } from '../src/client';

const App = () => {
  const [ip,setIP] = useState('');
  const [c_name,setC_name] = useState('');
  const [city,setCity] = useState('');
  const [date,setDate] = useState('');
  const [loading, setLoading] = useState(true);
  const loader = document.getElementById("preloader");

  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      setLoading(false);
    }, 5000);
  }
  const getData = async()=>{
      const res = await axios.get('https://geolocation-db.com/json/')
      var currentdate = new Date();
      var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
      setIP(res.data.IPv4);
      setC_name(res.data.country_name);
      setCity(res.data.city);
      setDate(datetime);
  }

  useEffect(()=>{
      getData()
  },[])

  const info = {
      _id: ip,
      _type: 'visitors',
      ipaddress: ip,
      c_name: c_name,
      city: city,
      date: date
  }

  if(info.ipaddress)
  {
    client.createOrReplace(info)
  }
    
  return (
      
    <div className='app'>
      {loading ? 
      <Preloader /> 
      :
      <>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </>
      }
             
    </div>

  );
}

export default App;