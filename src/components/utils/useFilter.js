import {useState, useCallback, useMemo} from 'react';

// Функция применение фильтров к списку товаров
function filterGoods(goods, filters) {
    const { selectedSizes, selectedColors, selectedPriceRange } = filters;
    return goods.filter(good => {
        const isAnyColorSelected = Object.values(selectedColors).some(value => value);
        const isAnySizeSelected = Object.values(selectedSizes).some(value => value);

        const sizeCondition = !isAnySizeSelected || selectedSizes[good.size.toLowerCase()];
        const colorCondition = !isAnyColorSelected || selectedColors[good.color.toLowerCase()];
        const priceCondition = good.price >= selectedPriceRange[0] && good.price <= selectedPriceRange[1];

        return colorCondition && sizeCondition && priceCondition;
    });
}

export function useFilter(initialGoods) {
    // Инициализация состояний
    const [selectedSizes, setSelectedSizes] = useState({});
    const [selectedColors, setSelectedColors] = useState({});
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, Infinity]);

    // Функции для обновления состояний фильтров
    const handleSizeChange = useCallback((size) => {
        const sizeLowerCase = size.toLowerCase(); // Приводим к нижнему регистру
        setSelectedSizes(prev => ({ ...prev, [sizeLowerCase]: !prev[sizeLowerCase] }));
    }, []);

    const handleColorChange = useCallback((color) => {
        const colorLowerCase = color.toLowerCase(); // Приводим к нижнему регистру
        setSelectedColors(prev => ({ ...prev, [colorLowerCase]: !prev[colorLowerCase] }));
    }, []);

    const handlePriceRangeChange = useCallback((range) => {
        setSelectedPriceRange(range);
    }, []);

    // Мемоизированная фильтрация товаров
    const filteredGoods = useMemo(() => filterGoods(initialGoods, {
        selectedSizes, selectedColors, selectedPriceRange
    }), [initialGoods, selectedSizes, selectedColors, selectedPriceRange]);

    // Возвращение состояний и функций для их обновления из хука
    return {
        selectedSizes,
        handleSizeChange,
        selectedColors,
        handleColorChange,
        selectedPriceRange,
        handlePriceRangeChange,
        filteredGoods
    };
}
