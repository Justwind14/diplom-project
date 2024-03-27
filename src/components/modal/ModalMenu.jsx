import LiLinkList from "../LiLinkList";

const ModalMenu = ({active, setActive}) => {
    const menuList = [
        {id: 1, title: 'MENU', linkPath: '/catalog', itemTitle: 'Accessories'},
        {id: 2, title: 'MENU', linkPath: '/catalog', itemTitle: 'Bags'},
        {id: 3, title: 'MENU', linkPath: '/catalog', itemTitle: 'Denim'},
        {id: 4, title: 'MENU', linkPath: '/catalog', itemTitle: 'T-Shirts'},
        {id: 5, title: 'WOMAN', linkPath: '/catalog', itemTitle: 'Accessories'},
        {id: 6, title: 'WOMAN', linkPath: '/catalog', itemTitle: 'Jackets & Coats'},
        {id: 7, title: 'WOMAN', linkPath: '/catalog', itemTitle: 'Polos'},
        {id: 8, title: 'WOMAN', linkPath: '/catalog', itemTitle: 'T-Shirts'},
        {id: 9, title: 'WOMAN', linkPath: '/catalog', itemTitle: 'Shirts'},
        {id: 10, title: 'KIDS', linkPath: '/catalog', itemTitle: 'Accessories'},
        {id: 11, title: 'KIDS', linkPath: '/catalog', itemTitle: 'Jackets & Coats'},
        {id: 12, title: 'KIDS', linkPath: '/catalog', itemTitle: 'Polos'},
        {id: 13, title: 'KIDS', linkPath: '/catalog', itemTitle: 'T-Shirts'},
        {id: 14, title: 'KIDS', linkPath: '/catalog', itemTitle: 'Shirts'},
    ];
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <LiLinkList items={menuList} title='MENU' className='burger-menu__title' />
                <LiLinkList items={menuList} title='WOMAN' className='burger-menu__heading' />
                <LiLinkList items={menuList} title='KIDS' className='burger-menu__heading' />
            </div>
        </div>
    );
};

export default ModalMenu;