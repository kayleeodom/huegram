// import kaylee from '/kaylee.jpg'

const Profile = () => {
  return (
    <div className='flex flex-col w-2/5 justify-around border-l-4 p-8 items-center text-white'>

        <div className='text-center'>
          <div className='border-2 p-14'>My Hues</div>
          <h1 className='text-2xl pt-2'>@kodom</h1>
        </div>

        {/* <div className="flex w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
        </div> */}

        <div className='text-center'>
          <p className='text-6xl'>89</p>
          <h1 className='text-2xl'>♥ Likes</h1>
        </div>

        <div className='text-center'>
          <p className='text-6xl'>47</p>
          <h1 className='text-2xl'># Hues</h1>
        </div>

    </div>
  )
}

export default Profile