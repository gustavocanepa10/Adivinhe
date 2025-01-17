import Logo from "../../assets/logo.png"
import styles from "./style.module.css"
import Restart from "../../assets/restart.svg"


type Props = {
    current: number,
    max: number,
    OnRestart: () => void
}


export function Header({current,max,OnRestart} : Props) {
    return (
        <div className={styles.container} >
            <img src={Logo} alt="Logo"/>
            <header>
                <span>
                    <strong>{current}</strong> de {max} tentativas
                </span>
                <button type="button" onClick={OnRestart}>
                    <img src={Restart} alt="Icone de reiniciar" />
                </button>
            </header>
        </div>
    )

}

