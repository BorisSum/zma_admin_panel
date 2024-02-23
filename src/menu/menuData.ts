import { 
    MdOutlineHomeWork, 
    MdOutlineImportContacts, 
    MdNewspaper, 
    MdOutlineAnalytics, 
    MdOutlinePersonOutline,
    MdOutlineLocationOn
} from "react-icons/md";


interface IMenuItem {
    id: number;
    icon: React.ElementType;
    title: string;    
}

const MENU: IMenuItem[] = [
    {
        id: 1,
        icon: MdOutlineImportContacts,
        title: 'Справочники'
    },
    {
        id: 2,
        icon: MdOutlineLocationOn,
        title: 'Населенный пункт'
    },
    {
        id: 3,
        icon: MdNewspaper,
        title: 'Новости'
    },
    {
        id: 4,
        icon: MdOutlineAnalytics,
        title: 'Аналитика'
    },
    {
        id: 5,
        icon: MdOutlineHomeWork,
        title: 'Объекты'
    },
    {
        id: 6,
        icon: MdOutlinePersonOutline,
        title: 'Пользователи'
    }
];

export default MENU;