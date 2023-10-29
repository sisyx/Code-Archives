import MyInput from '../components/MyInput'
import Captcha from '../components/Captcha'
import BigButton from '../components/BigButton'
import styles from './Signup.module.css'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.title}>ثبت نام</div>
                <div className={styles.inputs}>
                    <MyInput icon='person.svg' title='نام کاربری یا شماره همراه' placeholder='نام کاربری را وارد کنید' fontSize='0.8rem' active={true} />
                    <MyInput icon='call.svg' title='کد تایید' placeholder='کد تایید را وارد کنید' fontSize='0.8rem' />
                    <MyInput icon='lock.svg' title='رمز عبور' placeholder='رمز عبور را وارد کنید' fontSize='0.8rem' />
                    <MyInput icon='lock.svg' title='تکرار رمز عبور' placeholder='نکرار رمز عبور را وارد کنید' fontSize='0.8rem' />
                    <Captcha cls={styles.captcha} fontSize='0.8rem' />
                    <div className={styles.images}>
                        <img src='/images/google.svg' alt='google' />
                        <img src='/images/facebook.svg' alt='google' />
                        <img src='/images/twitter.svg' alt='google' />
                    </div>
                </div>
                <BigButton text='ثبت نام' fontSize='1.5rem' />
                <a className={styles.small} href='/login'>از قبل حساب دارید؟</a>
            </form>
        </div>
    )
}

export default Signup
