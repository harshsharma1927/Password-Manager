
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Manager from './components/manager.jsx';


function App() {

  return (
   <>
        <Navbar /> 
        <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

       <Manager/> 
        </div>
       <Footer/>
    </>
  )
}

export default App
