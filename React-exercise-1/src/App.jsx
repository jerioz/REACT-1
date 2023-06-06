import './App.css'
import PersonF from '../components/PersonF/PersonF'
import PersonC from '../components/PersonC/PersonC'


function App() {
  return (
    <div>
      <PersonF name='Kobe' surname='Bryant' age='25' />
      <PersonF name='Kareem' surname='Jabbar' age='60' />
      <PersonF name='Magic' surname='Johnson' age='48' />
      <PersonC name='Nikola' surname='Jokic' age='41'/>
      <PersonC name='Stephen' surname='Curry' age='45'/>
      <PersonC name='John' surname='Denver' age='55'/>
    
    </div>
    
  )
}

export default App
