import React from 'react'


export default function checkout() {
  return (
    <div className='checkout'>
      <h1 className='main_header'>Checkout</h1>
      <hr className='top_line'></hr>
      <div className='main_ctr'>
            <div className='left_ctr'>
                <h2 className='type'>
                    Card Type
                </h2>
                <div className='card_opts'>
                    <div className='credit'>
                        Credit Card
                        <div className='cc'>
                            <input type="radio" className='check_credit'/>
                        </div>
                    </div>
                    <div className='debit'>
                        Debit Card
                        <div className='dc'>
                            <input type="radio" className='check_debit'/>
                        </div>
                    </div>
                </div>
                <h2 className='detail'>Card Details</h2>
                <form className='customer_info'>
                    <input type="text" className='name' placeholder='Name on Card'/>
                    <br></br>
                    <input type="text" className='number' placeholder='Card Number'/>
                    <br></br>
                    <label for="validity">Valid On</label>
                    <br></br>
                    <div className='security'>
                        <input type="month" className='validity'/>
                        <input type="text" className='cvv' placeholder='CVV'/>
                    </div>
                    <label className='label'>
                        <input type="checkbox" className='check'/>Securely save this card for a faster checkout next time
                    </label>
                    <button className='free_btn'>Free</button>
                </form>
            </div>
            <div className='right_ctr'>
                <div className='change_ship'>
                    <p className='shipping'>Shipping To</p>
                    <p className='change' onClick={''}>Change</p>
                </div>
                <p className='ship_name'>Name</p>
                <p className='email'>Email</p>
                <hr className='top_line2'></hr>
                <div className='event_desc'>
                    <img className='event_pic'src="winery.jpg"></img>
                    <div className='title_add'>
                        <p className='event_title'>Event Title</p>
                        <p className='event_add'>Event Address</p>
                    </div>
                    
                </div>
                <div className='count'>
                    <label for="tickt_cnt">Number of Tickets</label>
                    <input type="number" className='ticket_cnt' placeholder='Count'/>
                    <p className='price'>$0.00</p>
                </div>
                <hr className='top_line3'></hr>
                <div className='subtotal'>
                    <p className='item_total'>Item Total</p>
                    <p className='sub_price'>$0.00</p>
                </div>
                <div className='discount'>
                    <p>Discount</p>
                    <p className='coupon' onClick={''}>Apply Coupon</p>
                </div>
                <hr className='top_line4'></hr>
                <div className='bill_total'>
                    <p className='bill'>BILL TOTAL</p>
                    <p className='amt'>$0.00</p>
                </div>
            </div>
      </div>
    </div>
  )
}
