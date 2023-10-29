import Comment from './Comment'
import styles from './Comments.module.css'
import Img from './Img'
import MyInput from './MyInput'

function Comments() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                نظرات به این محصول
            </div>
            <div className={styles.comments}>
                <Comment />
                <Comment />
            </div>
            <div className={styles.form}>
                <div className={styles.form_title}>
                    <span>نظر شما</span>
                    <Img name='comment-us.svg' alt="(<_>)" />
                </div>
                <div className={styles.inputs}>
                    <div className={styles.inputs_left}>
                        <textarea className={styles.textarea} />
                    </div>
                    <div className={styles.inputs_right}>
                        <MyInput title='' placeholder='نام شما...' />
                        <MyInput title='' placeholder='ایمیل خود را وارد کنید...' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
