import  React from 'react'
import img1 from './images/img1.jpeg.jpg';
import img2 from './images/img2.jpeg.jpeg';
import img3 from './images/img3.jpeg.PNG';
import img4 from './images/img4.jpeg.PNG';
import img5 from './images/img5.jpeg.PNG';

function Home(){
    
        return(
        <div>
            
    
       <div class="carded">
        <div  class="cards">
            <div style={{display:'flex'}}>
                <div >
                    <img src={img1}class="imaged"/>
                </div>
                <div>
                   <h1  class="head">karthikeya Home Stay</h1>
                   <p class="para">Mopidevi , Andhra Pradesh 521125</p>
              </div>
            </div>
            
            <img src={img2}class="img"/>
            <div class="style">
                <div style={{display:'flex'}}>
             <img src={img3}class="images"/>
             <img src={img4}class="images"/>
             <img src={img5}class="images"/>
             </div>
             </div>
           </div>
      
    
    <div class="container">
     <h1 class="heading">Our Extra  Facilities </h1>   
        <div class="paragraph">      
        24 Hours Wifi Service <br/>
         Ac  and Non Ac Rooms <br/>
        
        Mineral Water  and Hot Water (Greaser)Available<br/>
        Nature Environment Surroundings <br/>
        10 Memebers using Hall<br/>
        Car and Bike Parking also  Available<br/>
        Nearest Distance Temple  Visit(400 m)</div>
     
    </div>
   <div class="card">
<h1 class="paras" >Tirumalsetti Samudra Venu Surya Prakasa Rao</h1>
<p class="paragraphs">Contact Number : +91 9985446866</p>
   </div> 
   </div>
   </div>


   ) }


export default Home;