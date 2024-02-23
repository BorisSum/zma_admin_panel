import { useAppSelector } from "../store/hooks"
import { LOGO } from "./logo";


export const MenuLogo = (): JSX.Element => {
    const { menuWidth, menuItemHeight } = useAppSelector( state => state.appSettings.theme.sizes );

    const logoContainerStyles: React.CSSProperties = {
        width: menuWidth,
        height: menuWidth,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={logoContainerStyles}>
            <img 
                src={`data:image/png;base64, ${LOGO}`}
                alt="logo"
                style={{
                    width: menuItemHeight,
                    height: menuItemHeight
                }}
            />
        </div>
    )
}