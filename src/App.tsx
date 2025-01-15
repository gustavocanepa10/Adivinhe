import { Header } from './components/Header';
import { Challenge, WORDS } from './utils/words';
import { useEffect , useState } from 'react';
import styles from "./app.module.css";
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';
import { Input } from "./components/Input";
import { Button } from './components/Button';
import {LettersUsed} from "./components/LettersUsed"

function App() {
  const [attempts, setAttempts] = useState(0)
  const [letter, setLetter] = useState("")
  const [challenge, setChallenge] = useState<Challenge | null> (null)


  function handleOnRestart() {
    alert("Jogo Reiniciando...");
  }

  function StartGame() {
    const index = Math.floor(Math.random() * WORDS.length)
    const randomWord = WORDS[index]
    setChallenge(randomWord)

    setAttempts(0)
    setLetter("")
  }

  useEffect(() => {
    StartGame()
  } , [])

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} OnRestart={handleOnRestart} />

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
