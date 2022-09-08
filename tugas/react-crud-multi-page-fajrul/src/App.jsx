import { Link, Outlet } from 'react-router-dom'

function App() {

  return <>
    <div className='app'>
      <nav>
        <Link to="/songs">
          Song List
        </Link>
        &nbsp; &nbsp; || &nbsp; &nbsp;
        <Link to="/genres">
          Genre List
        </Link>
      </nav>

      <Outlet/>
    </div>
  </>
}

export default App
