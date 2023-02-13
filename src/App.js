import './App.css';
import Grid from './components/Grid'
import Header from './components/Header'
import React from 'react'
import { useState } from 'react'
import Loader from './spinner.gif'

function App() {
  const [data, setData] = useState([])
  const [isClicked, setIsClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function handleClick(actualData) {
    setIsClicked(true)
    setIsLoading(true)
    await sleep(500);
    setData([...actualData.data])
    setIsLoading(false)
  }
  return (
    <div className="App">
      <Header handleClick={handleClick} />
      <div className='box'>
        {!isClicked && <p className='welcome'>Click Get User to fetch users</p>}
        {isClicked && isLoading && <img className='logo' src={Loader} alt="loading..." />}
        {
          data.map((user) => (
            // console.log(user)
            < Grid user={user} key={user.id} />
          ))}
      </div>
    </div>
  );
}

export default App;
