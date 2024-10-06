import { useRef, useState } from 'react'
import './TestCounter.css'
export default function TestCounter ({amount, min, max}) {

  const [count, setCount] = useState (amount);

  const clicks = useRef(0)

  const handleClickSuma = ()=> {
    if(count < max) {
    setCount (count + 1);
  }
    clicks.current++;
    console.log ('El usario interactuó '+clicks.current+' veces');
  }
  const handleClickResta = ()=> {
    if(count > min) {
      setCount (count - 1);
    }
    clicks.current++;
    console.log ('El usario interactuó '+clicks.current+' veces');
  }

    return (
      <>
      <p>{count}</p>
      <section className='d-flex justify-content-center'>
      <button className='button' onClick={handleClickResta}>-</button>
      <button className='button' onClick={handleClickSuma}>+</button>
      </section>
      </>
    )
  }