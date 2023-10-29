import styles from './BigButton.module.css'

function BigButton({text='تایید', fontSize='2rem', onClick}) {
    return (
        <button className={styles.finish_btn} style={{fontSize: fontSize}} onClick={onClick}>{text}</button>
    )
}

export default BigButton
