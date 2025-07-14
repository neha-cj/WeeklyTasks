import {useState, useRef, useEffect} from 'react'


function App() {
  const [timeleft,setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const timeRef= useRef(null);

  const startTimer = () => {
    if(!isRunning){
      setIsRunning(true);
      timeRef.current = setInterval(()=>{
        setTimeLeft((prev =>{
          if(prev>0){
            return prev-1;
          }else{
            clearInterval(timeRef.current);
            setIsRunning(false);
            return 0;
          }
        }))
      },1000);
    }
  }
  const stopTimer = () => {
    clearInterval(timeRef.current)
    setIsRunning(false);
  }
  const resetTimer = () =>{
    clearInterval(timeRef.current);
    setIsRunning(false);s
    setTimeLeft(60);
  }

  useEffect(() =>{
    return() => clearInterval(timeRef.current)
  },[])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
      <h1 className='text-4xl font-bold mb-4'>Countdown Timer</h1>
      <div className='text-6xl font-mono mb-8'>{timeleft}s</div>
      <div className='flex gap-4'>
        <button onClick={startTimer} className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600' disabled={isRunning ||timeleft===0}>Start</button>
        <button onClick={stopTimer} className='px-4 py-2 bg-red-400 text-white rounded hover:bg-red-700' disabled={!isRunning} >Stop</button>
        <button onClick={resetTimer} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>Reset</button>
      </div>
  
    </div>
  )
}

export default App
