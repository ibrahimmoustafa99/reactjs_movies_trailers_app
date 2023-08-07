
import {AiOutlineCheck} from 'react-icons/ai'
import '../styles/Pricing.css'



function Pricing() {
  return (
    <div className='card-container'>
      <div  className='option'>
        <div className='card-head'>
        <h3>Basic</h3>
        <h5>7.99$ <span>Monthly</span> </h5>
        </div>
        <div id='op1' className='card-text'>
          <span><AiOutlineCheck style={{color:'green'}} /> Ulimited films and tv programes </span>
          <span><AiOutlineCheck style={{color:'green'}} /> Watch on mobile phones and tablets </span>
          <span><AiOutlineCheck style={{color:'green'}} /> Cancel at anytime </span>
        </div>
        <div className='btn'>
          <button>
            BUY NOW
          </button>

        </div>



      </div>
      <div className='option'>
        <div className='card-head'>
        <h3>Standard</h3>
        <h5>12.99$ <span>Monthly</span> </h5>
        </div>
        <div id='op2' className='card-text'>
          <span><AiOutlineCheck style={{color:'green'}} /> Ulimited films and tv programes </span>
          <span><AiOutlineCheck style={{color:'green'}} /> Watch on mobile phones and tablets </span>
          <span><AiOutlineCheck style={{color:'green'}} /> Cancel at anytime </span>
          <span><AiOutlineCheck style={{color:'green'}} /> First month completely free </span>
          <span><AiOutlineCheck style={{color:'green'}} /> HD available </span>
          <br></br>
        </div>
        <div className='btn'>
          <button>
            BUY NOW
          </button>

        </div>



      </div>
      <div className='option'>
        <div className='card-head'>
        <h3>Premium</h3>
        <h5>17.99$ <span>Monthly</span> </h5>
        </div>
        <div className='card-text'>
          <span><AiOutlineCheck style={{color:'green'}} /> Ulimited films and tv programes </span>
          <span><AiOutlineCheck style={{color:'green'}} /> Watch on mobile phones and tablets </span>
          <span><AiOutlineCheck style={{color:'green'}} /> Cancel at anytime </span>
          <span><AiOutlineCheck style={{color:'green'}} /> First month completely free </span>
          <span><AiOutlineCheck style={{color:'green'}} /> HD available </span>
          <span><AiOutlineCheck style={{color:'green'}} /> Ultra HD </span>
        </div>
        <div className='btn'>
          <button>
            BUY NOW
          </button>

        </div>



      </div>
    </div>
  );
}

export default Pricing
