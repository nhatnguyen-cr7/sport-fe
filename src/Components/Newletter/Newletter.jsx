import './Newletter.css'
const Newletter = () => {
  return (
    <div className='newletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subcribe to our newletter and stay updated</p>
      <div>
        <input type="email" placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newletter
