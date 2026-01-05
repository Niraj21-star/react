import {useState} from 'react';
function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className='w-full  h-screen duration-200' style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("red")} className="outline-none text-white px-4 py-1 rounded-full"style={{backgroundColor:"red",color:"white"}} >Red</button>
          <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"green",color:"white"}} >Green</button>
          <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"blue",color:"white"}} >Blue</button>
          <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"yellow",color:"black"}} >Yellow</button>
          <button onClick={()=>setColor("olive")} className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"olive",color:"white"}} >Olive</button>
          <button onClick={()=>setColor("black")} className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"black",color:"white"}} >Black</button>
          <button onClick={()=>setColor("white")} className="outline-black  px-4 py-1 rounded-full"style={{backgroundColor:"white",color:"black"}} >White</button>
          <button onClick={()=>setColor("purple")} className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"purple",color:"white"}} >Purple</button>
          <button onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"orange",color:"white"}} >Orange</button>
          <button onClick={()=>setColor("brown")} className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"brown",color:"white"}} >Brown</button>

        </div>
      </div></div>
    
  ) 
}

export default App
 