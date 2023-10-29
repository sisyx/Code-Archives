import styles from './Comment.module.css'

function Comment() {
    return (
        <div className={styles.container}>
                    <div className={styles.comment}>
                        <div className={styles.comment_sender}>
                            <span>نظر: </span>
                            <span>
                                سید محمد جواد مرتضویان
                            </span>
                        </div>
                        <div className={styles.comment_text}>
                        سلام دوسته عزیزاگر کاری با دیتابیس نکرده باشید که خود به خود این مشکل پیش نمیاد شما اگر یوست رو دارین غیر فعالش کنید یوست برای دیدگاه ها گاهی اوقات مشکل پیش میاره یا جدیدا چه تغییراتی رو در قالب و یا افزونه هاتون ایجاد کردید؟ اگر دوست داشتید لینک سایتتون رو بزارید ببینیم دقیقا چه خطایی میده
                        </div>
                    </div>
                    <div className={styles.replies}>
                        <div className={styles.reply}>
                            <div className={styles.reply_sender}>
                            <span>پاسخ:</span>
                            <span>
                                سجاد پوست کلفت
                            </span>
                            </div>
                            <div className={styles.reply_text}>

                            سلام دوسته عزیزاگر کاری با دیتابیس نکرده باشید که خود به خود این مشکل پیش نمیاد شما اگر یوست رو دارین غیر فعالش کنید یوست برای دیدگاه ها گاهی اوقات مشکل پیش میاره یا جدیدا چه تغییراتی رو در قالب و یا افزونه هاتون ایجاد کردید؟ اگر دوست داشتید لینک سایتتون رو بزارید ببینیم دقیقا چه خطایی میده
                            </div>
                        </div>
                        <div className={styles.reply}>
                            <div className={styles.reply_sender}>
                            <span>پاسخ:</span>
                            <span>
                                سجاد پوست کلفت
                            </span>
                            </div>
                            <div className={styles.reply_text}>
                            سلام دوسته عزیزاگر کاری با دیتابیس نکرده باشید که خود به خود این مشکل پیش نمیاد شما اگر یوست رو دارین غیر فعالش کنید یوست برای دیدگاه ها گاهی اوقات مشکل پیش میاره یا جدیدا چه تغییراتی رو در قالب و یا افزونه هاتون ایجاد کردید؟ اگر دوست داشتید لینک سایتتون رو بزارید ببینیم دقیقا چه خطایی میده
                            </div>
                        </div>
                        
                    </div>
                </div>
    )
}

export default Comment
