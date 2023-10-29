import styles from './Product.module.css'
import { useEffect, useRef, useState } from 'react';
import Img from '../components/Img';
import SpeciaProductSimilarsList from '../components/SpeciaProductSimilarsList';
import Comments from '../components/Comments';

function Product({initialCount=1, offPercent=25, price=120000}) {

    const [selectedImage, setSelectedImage] = useState(1);
    const [count, setCount] = useState(initialCount);

    const totalPrice = (count * price)

    function handleIncCount(event) {
        setCount(cur => cur + 1);
    }

    function handleDecCount(event) {
        setCount(cur => cur > 1 ? cur - 1 : cur);
    }

    const productMainImage = useRef()
    useEffect(function () {
        productMainImage.current.classList.add(styles.animate_main_image);
        setTimeout(() => {
            productMainImage.current.classList.remove(styles.animate_main_image);
        }, 2000)
        // productMainImage.current.classList.toggle(styles.animate_main_image_2) 
    }, [selectedImage])

    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <div className={styles.product_info}>
                    <div className={styles.product_text}>
                    یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
                    </div>
                    <div className={styles.product_color}>
                        <span>مشکی</span>
                        <div className={styles.product_color_circle}></div>
                    </div>
                    <div className={styles.product_send_type}>
                        <span>ارسال با پست پیشتاز</span>
                        <Img name='truck.svg' />
                    </div>
                    <div className={styles.product_off}>
                        <span>25% تخفیف</span>
                        <Img name="special-product-off.svg" alt='%' />
                    </div>
                    <div className={styles.counter_container}>
                        <button className={styles.counter_container_btn}>ثبت سفارش</button>
                        <div className={styles.counter_container_right}>
                            <div className={styles.product_price}>
                                <div>تومان</div>
                                <div>{totalPrice.toLocaleString()}</div>
                            </div>
                            <div className={styles.counter}>
                                <div 
                                    className={styles.product_count_dec}
                                    onClick={handleDecCount}
                                    style={count <= 1 ? {pointerEvents: 'none', color: 'rgba(30,30,30,0.3'} : {}}
                                >-</div>
                                <div className={styles.product_count}>{count}</div>
                                <div 
                                    className={styles.product_count_inc}
                                    onClick={handleIncCount}
                                >+</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.product_images}>
                    <img src={`/images/product-image-${selectedImage}.png`} alt="Product-image" className={`${styles.product_main_image} ${styles.animate_main_image}`} ref={productMainImage} />
                    <div className={styles.product_minor_images}>
                        {
                            [1,2,3,4].map(num => <Img name={`product-image-${num}.png`} cls={`${styles.product_minor_image} ${selectedImage === num ? styles.selected_image : ''}`} onClick={event => setSelectedImage(num)} key={`pim${num}x`} />)
                        }
                    </div>
                </div>
            </div>

            <SpeciaProductSimilarsList cls={styles.similars} />
            <Comments />
        </div>
    )
}

export default Product
