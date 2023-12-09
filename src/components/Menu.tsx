
const Menu = () => {
  return (
    <div className='flex flex-col pb-16'>

      <div className='w-full bg-white border-b-4 border-pink-500'>
        <div className='flex flex-row justify-evenly p-4 text-center'>
          <h1 className='border-2 rounded-full text-3xl px-6 py-4 bg-slate-800 font-bold text-white'>#</h1>
          <h1 className='text-5xl pt-2 font-bold bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text'>HueGram</h1>
          <input type='search' placeholder='Search Hue...' className='border-4 text-slate-800 border-slate-800 rounded-full px-20 py-4'></input>
        </div>
      </div>

    </div>
  )
}

export default Menu