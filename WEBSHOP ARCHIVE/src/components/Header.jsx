import { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import Img from './Img';
function Header({cartCount}) {

    const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
    
    function handleToggleMenu(event) {
        // console.log('toggle click');
        setIsHeaderMenuOpen(cur => !cur)
    }

    return (
        <div className={styles.header}>
            <div className={styles.mobile_left} onClick={handleToggleMenu}>
                {
                !isHeaderMenuOpen ? 
                <svg width="32" height="17" viewBox="0 0 32 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="3" fill="#272727"/>
                    <rect y="7" width="32" height="3" fill="#272727"/>
                    <rect y="14" width="32" height="3" fill="#272727"/>
                </svg> :
                <svg width="32" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="21" width="32" height="3" transform="rotate(-40 0 21)" fill="#272727"/>
                    <rect x="2" width="32" height="3" transform="rotate(40 2 0)" fill="#272727"/>
                </svg>
                }
            </div>
            <Link className={styles.left} to='/'>
                <Img src="/images/header-logo.svg" alt="ICON" cls={styles.icon} />
            </Link>
            <div className={`${styles.center} ${isHeaderMenuOpen ? styles.active : ''}`}>
                <div className={styles.disocvery}>
                    <div className={styles.discovery_text}>
                        <p>Discovery</p>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.939954 2.81554C0.980594 2.7748 1.02887 2.74248 1.08202 2.72042C1.13518 2.69836 1.19216 2.68701 1.2497 2.68701C1.30725 2.68701 1.36423 2.69836 1.41738 2.72042C1.47051 2.74246 1.51876 2.77477 1.55939 2.81548L1.55935 2.81544L1.47096 2.90381L1.55945 2.81554L0.939954 2.81554ZM0.939954 2.81554L1.02845 2.90382L0.939954 2.81554ZM5.11948 7.16427L5.16738 7.27972C5.11423 7.30177 5.05725 7.31313 4.9997 7.31313C4.94216 7.31313 4.88518 7.30177 4.83202 7.27972C4.77892 7.25768 4.73068 7.2254 4.69007 7.18471C4.69003 7.18467 4.68999 7.18463 4.68995 7.1846L0.940178 3.43482C0.940153 3.4348 0.940128 3.43477 0.940103 3.43475L5.11948 7.16427ZM5.11948 7.16427L5.16738 7.27972C5.22049 7.25768 5.26873 7.2254 5.30934 7.18471L5.11948 7.16427ZM8.44006 2.81544L4.9997 6.2564L5.30945 7.1846L9.05934 3.43471C9.1 3.39405 9.13226 3.34577 9.15427 3.29264C9.17627 3.23952 9.1876 3.18257 9.1876 3.12507C9.1876 3.06757 9.17627 3.01062 9.15427 2.9575C9.13226 2.90437 9.1 2.85609 9.05934 2.81543C9.01868 2.77477 8.97041 2.74251 8.91728 2.72051C8.86415 2.6985 8.80721 2.68718 8.7497 2.68718C8.6922 2.68718 8.63526 2.6985 8.58213 2.72051L8.62996 2.83599L8.58213 2.72051C8.529 2.74251 8.48073 2.77477 8.44007 2.81543L8.44006 2.81544Z" fill="#272727" stroke="#272727" stroke-width="0.25"/>
                        </svg>                            
                    </div>
                    <div className={styles.options}>
                        <div className={styles.option}>option1</div>
                        <div className={styles.option}>option2</div>
                        <div className={styles.option}>option3</div>
                        <div className={styles.option}>option4</div>
                    </div>
                </div>
                <a href='#'>About</a>
                <a href='#'>Contact us</a>
            </div>
            <div className={styles.right}>
                <a href="https://github.com/seyed3zar" target='_blank'>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.625 29.75C27.625 29.75 29.75 29.75 29.75 27.625C29.75 25.5 27.625 19.125 17 19.125C6.375 19.125 4.25 25.5 4.25 27.625C4.25 29.75 6.375 29.75 6.375 29.75H27.625ZM6.38563 27.744V27.7397V27.744ZM6.42175 27.625H27.5782C27.5882 27.6238 27.5981 27.6224 27.608 27.6208L27.625 27.6165C27.6229 27.0938 27.2978 25.5212 25.857 24.0805C24.4715 22.695 21.8641 21.25 17 21.25C12.1337 21.25 9.5285 22.695 8.143 24.0805C6.70225 25.5212 6.37925 27.0938 6.375 27.6165C6.39055 27.6195 6.40614 27.6223 6.42175 27.625ZM27.6165 27.744V27.7397V27.744ZM17 14.875C18.1272 14.875 19.2082 14.4272 20.0052 13.6302C20.8022 12.8332 21.25 11.7522 21.25 10.625C21.25 9.49783 20.8022 8.41683 20.0052 7.6198C19.2082 6.82277 18.1272 6.375 17 6.375C15.8728 6.375 14.7918 6.82277 13.9948 7.6198C13.1978 8.41683 12.75 9.49783 12.75 10.625C12.75 11.7522 13.1978 12.8332 13.9948 13.6302C14.7918 14.4272 15.8728 14.875 17 14.875ZM23.375 10.625C23.375 12.3158 22.7034 13.9373 21.5078 15.1328C20.3123 16.3284 18.6908 17 17 17C15.3092 17 13.6877 16.3284 12.4922 15.1328C11.2966 13.9373 10.625 12.3158 10.625 10.625C10.625 8.93425 11.2966 7.31274 12.4922 6.11719C13.6877 4.92165 15.3092 4.25 17 4.25C18.6908 4.25 20.3123 4.92165 21.5078 6.11719C22.7034 7.31274 23.375 8.93425 23.375 10.625Z" fill="#272727"/>
                    </svg>
                </a>
                <Link className={styles.cart_icon} to='/cart' >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.4375C0 2.22201 0.0856024 2.01535 0.237976 1.86298C0.390349 1.7106 0.597012 1.625 0.8125 1.625H3.25C3.43124 1.62505 3.60726 1.68569 3.75006 1.79729C3.89287 1.90889 3.99427 2.06502 4.03813 2.24087L4.69625 4.875H23.5625C23.6827 4.87507 23.8013 4.9018 23.9099 4.95325C24.0185 5.0047 24.1143 5.07959 24.1905 5.17254C24.2666 5.26548 24.3212 5.37416 24.3503 5.49075C24.3794 5.60733 24.3823 5.72892 24.3587 5.84675L22.7337 13.9717C22.6982 14.1489 22.6046 14.3092 22.4677 14.4272C22.3309 14.5452 22.1586 14.6143 21.9781 14.6234L6.708 15.3904L7.17438 17.875H21.125C21.3405 17.875 21.5472 17.9606 21.6995 18.113C21.8519 18.2653 21.9375 18.472 21.9375 18.6875C21.9375 18.903 21.8519 19.1097 21.6995 19.262C21.5472 19.4144 21.3405 19.5 21.125 19.5H6.5C6.31058 19.4998 6.12717 19.4335 5.98148 19.3124C5.83579 19.1913 5.73698 19.0232 5.70213 18.837L3.26625 5.86138L2.61625 3.25H0.8125C0.597012 3.25 0.390349 3.1644 0.237976 3.01202C0.0856024 2.85965 0 2.65299 0 2.4375ZM5.04075 6.5L6.40575 13.7784L21.2648 13.0325L22.5713 6.5H5.04075ZM8.125 19.5C7.26305 19.5 6.4364 19.8424 5.8269 20.4519C5.21741 21.0614 4.875 21.888 4.875 22.75C4.875 23.612 5.21741 24.4386 5.8269 25.0481C6.4364 25.6576 7.26305 26 8.125 26C8.98695 26 9.8136 25.6576 10.4231 25.0481C11.0326 24.4386 11.375 23.612 11.375 22.75C11.375 21.888 11.0326 21.0614 10.4231 20.4519C9.8136 19.8424 8.98695 19.5 8.125 19.5ZM19.5 19.5C18.638 19.5 17.8114 19.8424 17.2019 20.4519C16.5924 21.0614 16.25 21.888 16.25 22.75C16.25 23.612 16.5924 24.4386 17.2019 25.0481C17.8114 25.6576 18.638 26 19.5 26C20.362 26 21.1886 25.6576 21.7981 25.0481C22.4076 24.4386 22.75 23.612 22.75 22.75C22.75 21.888 22.4076 21.0614 21.7981 20.4519C21.1886 19.8424 20.362 19.5 19.5 19.5ZM8.125 21.125C7.69402 21.125 7.2807 21.2962 6.97595 21.601C6.67121 21.9057 6.5 22.319 6.5 22.75C6.5 23.181 6.67121 23.5943 6.97595 23.899C7.2807 24.2038 7.69402 24.375 8.125 24.375C8.55598 24.375 8.9693 24.2038 9.27405 23.899C9.57879 23.5943 9.75 23.181 9.75 22.75C9.75 22.319 9.57879 21.9057 9.27405 21.601C8.9693 21.2962 8.55598 21.125 8.125 21.125ZM19.5 21.125C19.069 21.125 18.6557 21.2962 18.351 21.601C18.0462 21.9057 17.875 22.319 17.875 22.75C17.875 23.181 18.0462 23.5943 18.351 23.899C18.6557 24.2038 19.069 24.375 19.5 24.375C19.931 24.375 20.3443 24.2038 20.649 23.899C20.9538 23.5943 21.125 23.181 21.125 22.75C21.125 22.319 20.9538 21.9057 20.649 21.601C20.3443 21.2962 19.931 21.125 19.5 21.125Z" fill="#272727"/>
                    </svg>
                    {
                        cartCount ?
                        <div className={styles.cart_notif}>{cartCount}</div> 
                        : null
                    }
                </Link>
            </div>
        </div>
    )
}

export default Header
