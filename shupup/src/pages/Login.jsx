import { Link, useNavigate } from 'react-router-dom'
import BigButton from '../components/BigButton'
import Captcha from '../components/Captcha'
import MyInput from '../components/MyInput'
import styles from './Login.module.css'

function Login() {

    const navigat = useNavigate()

    function handleEnter(event) {
        event.preventDefault();
        const inputs = document.querySelectorAll('input');

        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                alert('You Must Fill All Inputs')
                return
            }
        }
        navigat('/')
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.title}>ورود به حساب</div>
                <MyInput icon='person.svg' title='نام کاربری یا شماره همراه' placeholder='نام کاربری را وارد کنید' active={true} />
                <MyInput icon='lock.svg' title='رمز عبور' placeholder='رمز عبور را وارد کنید' />
                <Captcha />
                <div className={styles.smalls}>
                    <Link className={styles.small_left} to='/forgot-pass'>رمز عبور خود را فراموش کرده اید؟</Link>
                    <Link className={styles.small_right} to='/sign-up'>
                        <span>حساب جدید بسازید</span>
                        {/* <input type="checkbox" /> */}
                    </Link>
                </div>
                <BigButton text='ورود' onClick={handleEnter} />

                <div className={styles.externals}>
                    <div className={styles.externals_title}>
                        ...ثبت نام کنید...
                    </div>
                    <div className={styles.external_images}>
                        <img src="/images/facebook.svg" alt="facebook" />
                        <img src="/images/google.svg" alt="google" />
                        <img src="/images/twitter.svg" alt="twitter" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
