import {useState,useEffect} from 'react';
import axios from 'axios';


import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';
import { client } from '../src/client';

const App = () => {
  const [ip,setIP] = useState('');
  const [c_name,setC_name] = useState('');
  const [city,setCity] = useState('');

    const getData = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data.IPv4);
        setC_name(res.data.country_name);
        setCity(res.data.city);
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
    }
    if(info.ipaddress)
    {
      client.createIfNotExists(info)
    }
    
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;