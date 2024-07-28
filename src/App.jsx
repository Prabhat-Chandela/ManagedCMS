import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Header,Footer,Loader} from './Components/index';


function App() {


  return (
    <div className="max-w-[100vw] min-h-screen flex flex-col overflow-hidden">
     <Header/>
     <main className='w-full  flex-1'>
      <Suspense fallback={<div className='w-screen h-screen'><Loader/></div>}>
      <Outlet/>
      </Suspense>
     </main>
     <Footer/>
    </div>
  )
}

export default App;
