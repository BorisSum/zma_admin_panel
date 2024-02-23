import { useAppSelector } from "../store/hooks"
import { MenuItem } from "./MenuItem";
import { MenuLogo } from "./MenuLogo";
import MENU from './menuData';


export const Menu = (): JSX.Element => {
    const { menuBgColor, menuShadowColor } = useAppSelector( state => state.appSettings.theme.colors );
    const { menuWidth } = useAppSelector( state => state.appSettings.theme.sizes );

    const menuContainerStyles: React.CSSProperties = {
        backgroundColor: menuBgColor,
        boxShadow: `4px 3px 10px 2px ${menuShadowColor}`,
        width: menuWidth,
        height: '100%'
    }

    return (
        <div style={menuContainerStyles}>
            <MenuLogo />
            {
                MENU &&
                MENU.map( m => <MenuItem key={m.id} menuItemID={m.id} Icon={m.icon}/>)
            }
        </div>
    )
}