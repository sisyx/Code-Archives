import { createContext } from "react";

const initialproducts = [
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'رژ لب',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'عطر هات لاو',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'آردن',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'مرطوب کننده',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'کرم ضدآفتاب',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'تی شرت مردانه',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'کفش ورزشی',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'شلوار راختی',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'کت و شلوار مردنه',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'دامن رنگارنگ',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'ساعت ویولت',
        type: 'accessoires',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'گردنبند هفت رنگ',
        type: 'accessoires',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'عینک آفتابی مدل GANG',
        type: 'accessoires',
    },
    {
        description: 'کلاه زمستانه',
        name: 'دستبند مدل ست دوستی',
        type: 'accessoires',
    },
    {
        description: 'لباس بچه گانه',
        name: 'جا سوییچی خفن',
        type: 'accessoires',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'رژ لب',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'عطر هات لاو',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'آردن',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'مرطوب کننده',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'کرم ضدآفتاب',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'تی شرت مردانه',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'کفش ورزشی',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'شلوار راختی',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'کت و شلوار مردنه',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'دامن رنگارنگ',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'ساعت ویولت',
        type: 'accessoires',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'گردنبند هفت رنگ',
        type: 'accessoires',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'عینک آفتابی مدل GANG',
        type: 'accessoires',
    },
    {
        description: 'کلاه زمستانه',
        name: 'دستبند مدل ست دوستی',
        type: 'accessoires',
    },
    {
        description: 'لباس بچه گانه',
        name: 'جا سوییچی خفن',
        type: 'accessoires',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'رژ لب',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'عطر هات لاو',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'آردن',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'مرطوب کننده',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'کرم ضدآفتاب',
        type: 'beauty',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'تی شرت مردانه',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'کفش ورزشی',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'شلوار راختی',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'کت و شلوار مردنه',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'دامن رنگارنگ',
        type: 'clothes',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'ساعت ویولت',
        type: 'accessoires',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'گردنبند هفت رنگ',
        type: 'accessoires',
    },
    {
        description: 'لباس زنانه برای همه سنین',
        name: 'عینک آفتابی مدل GANG',
        type: 'accessoires',
    },
    {
        description: 'کلاه زمستانه',
        name: 'دستبند مدل ست دوستی',
        type: 'accessoires',
    },
    {
        description: 'لباس بچه گانه',
        name: 'جا سوییچی خفن',
        type: 'accessoires',
    },   
]

const colorsList = ['مشکی', 'قرمز', 'سفید', 'آبی', 'زرد'];
const countries = ['آمریکا', 'آلمان', 'فرانسه', 'انگلیس'];

initialproducts.forEach((product, index) => {
    product.id =  `product-${index}`;
    product.left = Math.floor(Math.random() * 12);
    product.stars = (Math.floor(Math.random() * 50)/10);
    product.offPercent = Math.floor(Math.random() * 60);
    product.image = 'offProductCard.png';
    product.price = Math.floor(Math.random() * (10000000 - 5000000 ) ) + 5000000;
    product.color = colorsList[Math.floor(Math.random() * colorsList.length)];
    product.sendDelay = Math.floor(Math.random() * 10) + 1;
    product.sells = Math.floor(Math.random() * 10) + 1;
    product.country = countries[Math.floor(Math.random() * countries.length)]
})

export const ProductsContext = createContext(initialproducts);