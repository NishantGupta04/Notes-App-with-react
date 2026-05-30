import { useState } from 'react'

const App = () => {

const [title, setTitle] = useState('') 
const [details, setDetails] = useState('') 

const [task, setTask] = useState([])

const submitHandler = (e)=>{
  e.preventDefault()
 
const copyTask = [...task];

copyTask.push({title, details})

setTask(copyTask)

  setTitle('')
  setDetails('')
  }

const deleteNode = (idx)=>{
  const copyTask = [...task];
  
  copyTask.splice(idx,1)

  setTask(copyTask)  
}
  

  return (
    <div className='h-screen lg:flex  bg-black text-white'>
   

      <form onSubmit={(e)=> {
        submitHandler(e)
        }}
        className='flex  gap-4 lg:w-1/2 items-start flex-col p-10'>

        <h1 className='font-bold text-4xl'>Your Notes</h1>
          
          {/* PEHLA VALA INPUT FOR HEADING */}
         <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 w-full py-2 font-medium border-2 rounded outline-none'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
        
        {/* DETAILED VALA INPUT */}
        <textarea
        type="text"
         placeholder='Write Details here'
         className='px-5 w-full h-32 font-medium py-2 border-2 rounded outline-none'
         value={details}
         onChange={(e)=>{
         setDetails(e.target.value)
         }}
        />

        <button className='px-5 w-full py-2 font-medium bg-white active:scale-95 text-black rounded outline-none'>
          Add Notes
        </button>
    
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='font-bold text-4xl'>Recent Notes</h1>

    <div className='flex flex-wrap items-start justify-start gap-5 m-5 h-[90%] overflow-auto'>
    
    {task.map(function(elem, idx){
      return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 pt-9 pb-4 px-4 text-black rounded-xl bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
        <div> 
        <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
        <p className='mt-2 leading-tight text-sxs font-semibold text-gray-600'>{elem.details}</p>
        </div>
        <button onClick={() => {
          deleteNode(idx)
        }} className='w-full bg-red-500 cursor-pointer active:scale-95  py-1 test-xs rounded font-bold text-white'>Delete</button>
      </div>;
    })}
    </div>
    
    </div>
    </div>
  )
}

export default App 