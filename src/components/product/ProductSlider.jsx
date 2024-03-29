import React, {forwardRef} from 'react';
import Buttons from "../UI/Buttons";

const ProductSlider = forwardRef((props, ref) => {
    // деструктурируем пропс. при передачу всех переменных напрямую как объекты - forwardRef не работает
    const { goods, changeSlide, currentSlideIndex } = props;
    const nextSlide = () => {
        changeSlide((currentSlideIndex + 1) % goods.length);
    };

    const prevSlide = () => {
        changeSlide((currentSlideIndex - 1 + goods.length) % goods.length);
    };

    const currentGoodsItem = goods[currentSlideIndex];

    return (
        <div className="slider" ref={ref}>
            <div className="slider__wrapper">
                {/*вызываем метод перелистывания слайда к предыдущему от текущего*/}
                <Buttons className="slider__arrow slider__arrow--left" onClick={prevSlide}>
                    <svg className="slider__icon" width="31" height="31" viewBox="0 0 31 31" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6998 7.7499L13.9498 15.4999L21.6998 23.2499L20.1498 26.3499L9.2998 15.4999L20.1498 4.6499L21.6998 7.7499Z"
                              fill="black"/>
                    </svg>
                </Buttons>
                <div className="slider__img">
                    <img alt={currentGoodsItem.alt} src={require(`../../img/${currentGoodsItem.imgName}`)}/>
                </div>
                {/*вызываем метод перелистывания слайда к последующему от текущего*/}
                <Buttons className="slider__arrow slider__arrow--right" onClick={nextSlide}>
                    <svg className="slider__icon" width="31" height="31" viewBox="0 0 31 31" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.2998 23.2499L17.0498 15.4999L9.2998 7.7499L10.8498 4.6499L21.6998 15.4999L10.8498 26.3499L9.2998 23.2499Z"
                              fill="black"/>
                    </svg>
                </Buttons>
            </div>
        </div>
    );
});

export default ProductSlider;