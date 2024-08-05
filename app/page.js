"use client"
import React, {useState} from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)

  }
  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)

  }
  let renderTask= <h2>No Task Available</h2>
  if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
    return <li key={i} className='flex items-center justify-between mb-8' id='liv'>
      <div className='flex justify-between mb-5 w-2/3' id='kk'>
      <h5 className='text-2xl font-semibold' id='pp'>{t.title}</h5>
      <h6 className='text-lg font-medium' id='oo'>{t.desc}</h6>
    </div>
    <button onClick={()=>{
      deleteHandler(i)
    }} className='bg-red-600 text-white px-4 py-2 rounded font-bold' id='aa'>Delete</button>
    </li>

  })
}
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl ont-bold text-center ' id='ii' >Pratham's To Do List </h1>
    <form onSubmit={submitHandler}>
    <input
  type="text"
  className="border-black border-4 text-2xl m-8 py-3 px-4 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
  id='ll' placeholder="Enter Title"
  value={title}
  onChange={(e)=>{
    settitle(e.target.value)
  }}
  />
<input
  type="text"
  className="border-black border-4 text-2xl m-8 py-3 px-4 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
  placeholder="Enter Description" id='ee'
  value={desc}
  onChange={(e)=>{
    setdesc(e.target.value)
  }}
  />
  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 text-2xl font-bold rounded-lg shadow-md" id='uu'>
  Add Task
</button>
</form>
<hr />
<div className='p-8 bg-slate-200' id='yy'>
  <ul>{renderTask}</ul>
</div>

    </>
  )
}

export default page