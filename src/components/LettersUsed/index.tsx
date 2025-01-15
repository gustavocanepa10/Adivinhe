import styles from "./styles.module.css"


import { Letter } from "../Letter"


export function LettersUsed() {
    return (
        <div className={styles.lettersUsed}>
            <h5>Letras Utilizadas</h5>

            <div>
                <Letter value="r"  size="small" color="correct"/>
                <Letter value="X"  size="small" color="wrong"/>
               

            </div>

        </div>
    )

}