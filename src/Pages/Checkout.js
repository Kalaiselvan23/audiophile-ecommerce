import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Checkout() {
  return (
    <div>
      <Navbar />
      <section>
      <div className="w-[60%] my-10 mx-10"> 
        <h1 className='text-2xl my-5'>CHECKOUT</h1>
        <div className="flex flex-row flex-wrap">
            <h1 className="text-orange-500 text-md">BILLING DETAILS</h1>
            <div className="billing-input flex flex-wrap">
                <label for="name"><p>Name</p><input id="name" type="text" required className="inputs"/></label>
                <label for="email"><p>Email</p><input id="email" type="text" required className="inputs" /></label>
                <label for="phn"><p>Phone Number</p><input id="phn" type="text" required className="inputs" /></label>
            </div>
        </div>
        <div className="flex flex-row flex-wrap">
            <h1 className="text-orange-500 text-md">SHIPPING INFO</h1>
            <div className="shipping-input flex flex-wrap">
                <label for='address' className=""><p>Your Address</p><input type="text" id="address"/></label>
                <label for='zip'><p>Zip</p><input type="text" id="zip" /></label>
                <label for='city'><p>City</p><input type="text" id="city" /></label>
                <label for='country'><p>Country</p><input type="text" id='country' /></label>
            </div>
        </div>
        <div className="flex flex-col payment">
          <h1 className="text-md">PAYMENT INFO</h1>
          <label for="e-money border-2">E-money<input type="radio" name="pay"/></label><label>Cash on delivery<input type="radio" name="pay" /></label>
        </div>
      </div>
      <div>
        <div></div>
      </div>
      </section>
      <Footer />
    </div>
  );
}
