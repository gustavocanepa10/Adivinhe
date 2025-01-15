import styles from "./styles.module.css"

// Pega todas a props
type Props = React.ComponentProps<"input">


export function Input({...rest} : Props) {
    return <input type="text" className={styles.input} {...rest} />

}

