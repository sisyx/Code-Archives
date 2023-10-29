import BigButton from '../components/BigButton';
import ForgotPassInput from '../components/MyInput';
import styles from './ForgotPass.module.css';

function ForgotPass() {

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.title}>فراموشی رمز</div>
                <ForgotPassInput icon='person.svg' title='شماره همراه' placeholder='شماره تلفن را وارد کنید' active={true} />
                <div className={styles.auth_code}>
                    <button className={styles.auth_code_btn}>ارسال کد</button>
                    <ForgotPassInput icon='call.svg' title='کدتایید' placeholder='کد تایید را وارد کنید' cls={styles.auth_code_input} />
                </div>
                <ForgotPassInput icon='lock.svg' title='رمز عبور جدید' placeholder='رمز عبور جدید را وارد کنید' />
                <ForgotPassInput icon='lock.svg' title='تکرار رمز عبور جدید' placeholder='تکرار رمز عبور جدید را وارد کنید' />
                <BigButton />
            </form>
        </div>
    )
}

export default ForgotPass
