
import { Header } from './components/Header'
import styles from "./app.module.css"
import { Tip } from './components/Tip'
import { Letter } from './components/Letter'




function App() {

  function handleOnRestart() {
    alert("Jogo Reiniciando...")
  }


  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} OnRestart={handleOnRestart} />
        
        
        
        <Tip  tip='Uma das linguagens de programação mais populares'/>
        
        <Letter value='R'/>
        <Letter value='E'/>
        <Letter value='A'/>
        <Letter value='C'/>
        <Letter value='T'/>
        
        
        
        </main>
      
      
      
    </div>
  )
}

export default App
