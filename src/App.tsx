import { Header } from './components/Header';
import styles from "./app.module.css";
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';
import { Input } from "./components/Input";
import { Button } from './components/Button';
import {LettersUsed} from "./components/LettersUsed"

function App() {
  function handleOnRestart() {
    alert("Jogo Reiniciando...");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} OnRestart={handleOnRestart} />

        <Tip tip="Uma das linguagens de programação mais populares" />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter />
          <Letter />
          <Letter />
          <Letter />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guest}>
          <Input autoFocus maxLength={1} placeholder='?' />
          <Button title='Confirmar'/>
        </div>
        <LettersUsed/>
      </main>
    </div>
  );
}

export default App;
