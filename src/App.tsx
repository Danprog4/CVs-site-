import React from 'react'
import './App.css'
import AppRouter from './components/AppRouter'
import Header from './components/Header'


const App: React.FC = () => {
    return (
      <div className='flex justify-center m-10 flex-col items-center '>
        <Header />
        <AppRouter />
      </div>
    )
}

export default App
