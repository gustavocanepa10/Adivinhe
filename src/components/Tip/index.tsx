import TipLogo from "../../assets/tip.svg"
import styles from "./styles.module.css"


type Props = {
    tip: string
}

export function Tip({tip} : Props) {
    return (
        <div className={styles.tip}>
            <img src={TipLogo} alt="Icone de Dica" />


            <div>
                <h3>Dica</h3>
                <p>{tip}</p>
            </div>

        </div>
    )

}