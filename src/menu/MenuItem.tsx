import { FC, useState, CSSProperties } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { setActiveMenuItesID } from "../store/slices/menuSlice";

interface MenuItemProps {
    menuItemID: number;
    Icon: React.ElementType
}

export const MenuItem: FC<MenuItemProps> = ({ menuItemID, Icon }): JSX.Element => {
    const dispatch = useAppDispatch();
    const { menuBgColor, menuItemColor, menuActiveColor, menuSeparatorColor } = useAppSelector( state => state.appSettings.theme.colors );
    const { menuItemHeight, menuGliphSize } = useAppSelector( state => state.appSettings.theme.sizes );
    const { activeMenuItemID } = useAppSelector( state => state.menu );
    const [hovered, setHovered] = useState(false);
    const hoverHandler = (hover: boolean) => () => setHovered(hover);

    const handleClick = () => {
        dispatch(setActiveMenuItesID(menuItemID));
    }

    const menuItemContainerStyles: CSSProperties = {
        height: menuItemHeight,
        display: 'flex',
        justifyContent: 'flex-end'
    }

    const menuItemStyles: CSSProperties = {
        color: menuItemColor,
        borderBottom: `1px solid ${menuSeparatorColor}`,
        flexGrow: '1',
        marginLeft: 10,
        marginRight: 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }

    const activeMarkerStyles: CSSProperties = {
        backgroundColor: (activeMenuItemID === menuItemID || hovered) ? menuActiveColor : menuBgColor,
        width: 3,
        height: menuItemHeight
    }

    return (
        <div 
            style={ menuItemContainerStyles }
            onMouseEnter={ hoverHandler(true) }
            onMouseLeave={ hoverHandler(false) }
        >
            <div
                style={menuItemStyles}
                onClick={handleClick}
            >
                <Icon size={hovered ? menuGliphSize * 1.1 : menuGliphSize} color={hovered ? menuActiveColor : menuItemColor}/>
            </div>
            <div style={activeMarkerStyles}>
            </div>
        </div>
    )
}