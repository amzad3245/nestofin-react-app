import React from 'react';
import srp from './Borrowing.png';
import './App.css';

function App() {
  return (
   <div>
        <div className="nav">
            <h1>NESTO/Fin.</h1>
            <ul > //comment
                <li className="others"><a href="#">Investing</a></li>
                <li className="others"><a href="#">Borrowing</a></li>
                <li className="others"><a href="#">Planning</a></li>
                <li className="others"><a href="#">Learn More</a></li>
                <li className="log"><a href="#">Login</a></li>
                <li className="gets"><a href='getstarted.html'>Get Started</a></li>
                <div className="cross" onclick={ ()=>{
                    document.querySelector('.home-page-nav ul') .style = 'display: none'; posituon : unset; transform : translateX(0VW); 
                    document.querySelector('.home-page-nav .cross') .style = 'color: royalblue'; 
                }}></div> 
            </ul>
             <div className="hamburger"onclick={ ()=>{
                     document.querySelector('.home-page-nav ul') .style = 'display: flex'; posituon : fixed; transform : translateX(-100VW; 
                     document.querySelector('.home-page-nav .cross') .style = 'color: white'; 
                     document.querySelector('.home-page-nav .cross') .innerHTML= 'X'; 
                      } } >  
                <div className="bun"></div>
                <div className="bun"></div>
                <div className="bun"></div>
            </div>
        </div>
	    <div className="home-page">
                <div className="cantenar">
                    <div className="content">
                        <h1>Borrowing!</h1>
                        <br/>
                        <h3>  What is Lorem Ipsum? </h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className="images">
                        <img  src=  {srp } alt=""/>
                    </div>
                </div>
                <div>
	    			<img src="./assets/images/undraw_Security_on_ff2u.png" alt="" className="win4-img1"/>
	    			<div className="win4-head2">
	    				<h1>Security and Privacy</h1>
	    			</div>
	    			<div className="win4-para2">
	    				Nestofin uses bank level security to protect your sensitive information and prevent unauthorized use.
	    			</div>
	    		</div>
	    </div>
            <div className="window5">
                <div className="last-nav">
                    <ul>
                        <li className="others"><a href="#">Investing</a></li>
                        <li className="others"><a href="#">Borrowing</a></li>
                        <li className="others"><a href="#">Planning</a></li>
                        <li className="others"><a href="#">Learn More</a></li>
                        <li><a href="#top">Back to Top</a></li>
                    </ul>
                </div>
                <div className="terms-conditions">
                    We work with our partner Green Dot Bank, Member FDIC, to deliver checking features for the Cash Account.
                    <br/>
                    <br/>
                    Checking features are subject to Green Dot Bank’s application and approval. Debit Card is optional and must be requested. Wealthfront Cash Account Visa®️ Debit Card is issued by Green Dot Bank, Member FDIC, pursuant to a license from Visa U.S.A. Inc. Visa is a registered trademark of Visa International Service Association. Green Dot Bank operates under the following registered trade names: GoBank, Green Dot Bank and Bonneville Bank. All of these registered trade names are used by, and refer to, a single FDIC-insured bank, Green Dot Bank. Deposits under any of these trade names are deposits with Green Dot Bank and are aggregated for deposit insurance coverage. Wealthfront products and services are not provided by Green Dot Bank. Green Dot is a registered trademark of Green Dot Corporation. ©️2020 Green Dot Corporation. All rights reserved.
                    <br/>
                    <br/>
                    Early availability depends on timing of payor’s payment instructions and fraud prevention restrictions may apply. As such, the availability or timing of early direct deposit may vary from pay period to pay period. Interest does not begin accruing until funds arrive at the program banks, which may take up to one business day.
                    <br/>
                    <br/>
                </div>
            </div>
	    </div>
  );
}

export default App;