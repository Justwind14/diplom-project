// Хук usePagination предназначен для управления пагинацией списка элементов.
export default function usePagination(items, itemsPerPage, currentPage, setCurrentPage) {
    // Вычисляем общее количество страниц на основе длины массива элементов и количества элементов на страницу
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Вычисляем индексы последнего и первого элемента текущей страницы
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Получаем элементы для текущей страницы, используя вычисленные индексы
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Функция для переключения на указанную страницу
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Функция для переключения на следующую страницу с учетом, чтобы не превысить общее количество страниц
    const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

    // Функция для переключения на предыдущую страницу с учетом, чтобы не выйти за пределы первой страницы
    const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

    // Возвращаем необходимые значения и функции из хука
    return { currentItems, currentPage, totalPages, paginate, nextPage, prevPage };
}