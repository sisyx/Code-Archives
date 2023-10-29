import styles from './OffProductCard.module.css'
import Img from './Img';
import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../Contexts/Context';
import { useSearchParams } from 'react-router-dom';

function OffProductCard({product, bg='white'}) {

    const [searchParams, setSearchParams] = useSearchParams()

    const id = searchParams.get('id');

    const selectedProduct = id ? useContext(ProductsContext) : product;

    useEffect(function () {
        console.log(selectedProduct);
    }, [])

    const {name, price, offPercent, stars, image, left} = selectedProduct;

    const offPrice = price * ((100 - offPercent) / 100);

    function handleHover(event) {
        const cards = document.querySelectorAll(`.${styles.card}`);

        cards.forEach(card => {
            card != event.target ? card.classList.add(styles.blur) : null
        })
    }

    function handleHoverOut(event) {
        const cards = document.querySelectorAll(`.${styles.card}`);

        cards.forEach(card => {
            card.classList.remove(styles.blur);
        })
    }

    return (
        <Link to={`/product?id=${selectedProduct.id}`} className={`${styles.card} ${left == 0 ? styles.inActive : styles.activeProduct}`} style={{background: bg}} onMouseOver={event => left !== 0 ? handleHover(event) : null} onMouseOut={handleHoverOut}>
            <Img name={image} alt="producr icon" />
            <div className={styles.description}>
                {name}
            </div>
            <div className={styles.details}>
                <div className={styles.stars}>
                    <img src="/images/offProductStar.svg" alt="*" />
                    <span className={styles.rate}>{stars}</span>
                </div>
                {
                    (left < 10 && left > 0) ?
                    <div className={styles.detail_text}>تنها {left} عدد باقی مانده</div>
                    : left === 0 ? <div className={styles.detail_text}>در انبار موجود نیست</div>
                    : null
                }
            </div>
            <div className={styles.off}>
                <div className={styles.price}>
                    <div className={styles.price_dead}>
                        <span>{price.toLocaleString()} هزارتومان</span>
                        <div className={styles.red_line}></div>
                    </div>
                    <div className={styles.price_active}>{offPrice.toLocaleString()} تومان</div>
                </div>
                <div className={styles.percent}>{offPercent}%OFF</div>
            </div>
        </Link>
    )
}

export default OffProductCard
