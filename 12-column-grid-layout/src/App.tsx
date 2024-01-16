import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>Hello Silvia</h1>
      <div className='container grid grid-cols-12'>
          <li className='col-span-4'>1</li>
          <li className='col-span-4'>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
      </div> */}

      <div className="text-white container grid grid-cols-4 gap-1 m-auto md:grid-cols-12">
        <header className="col-span-full bg-slate-600 p-4">Header</header>
        <aside className="col-span-4 bg-slate-600 p-4">aside</aside>
        <main className="col-span-4 md:col-span-8 bg-slate-600 p-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-1'>
            <div className='text-center p-4 bg-slate-800'>One</div>
            <div className='text-center p-4 bg-slate-800'>Two</div>
            <div className='text-center p-4 bg-slate-800'>Three</div>
            <div className='text-center p-4 bg-slate-800'>Four</div>
            <div className='text-center p-4 bg-slate-800'>Five</div>
            <div className='text-center p-4 bg-slate-800'>Six</div>
            <div className='text-center p-4 bg-slate-800'>Seven</div>
            <div className='text-center p-4 bg-slate-800'>Eight</div>
          </div>
        </main>
        <footer className="col-span-full bg-slate-600 p-4">Footer</footer>
      </div>
    </>
  )
}

export default App
