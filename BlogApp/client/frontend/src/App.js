import React from 'react';
import { Header } from './component/header';
import { Addblog } from './component/addblog';
import { BlogDetails } from './component/blogDetails';
import {Login} from './component/lgoin';
import {Userblog} from './component/userblogs';
import { Blogs } from './component/blogs';
import  { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {


  const islogin = useSelector (state=> state.islogin);
   console.log(islogin); 
  return( 

    <Router>
      <Header/>
   
    <Routes>
       <Route path="/Login" element={<Login />}/>
       <Route path="/userblogs" element={<Userblog />}/>
       <Route path="/blogs" element={<Blogs />}/>
       <Route path="/blogDetails" element={<BlogDetails />}/>
       <Route path="/addblog" element={<Addblog />}/> 

       </Routes>
       </Router> 
     
  )}; 

export default App;
