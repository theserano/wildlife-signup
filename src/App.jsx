import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Menubar from './components/menubar/Menubar';
import Form from './components/form/Form';

function App() {

  return (
    <>
      <Menubar />

      <div className="main container_fluid">
        <div className="picture">
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </>
  )
}

export default App
