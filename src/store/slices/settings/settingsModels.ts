interface IAppColors {
    appBgColor: string;
    menuBgColor: string;
    menuShadowColor: string;
    menuItemColor: string;
    menuActiveColor: string;
    menuSeparatorColor: string;
}

interface IAppSizes {
    menuWidth: number;
    menuExpandedWidth: number;
    menuItemHeight: number;
    menuGliphSize: number;
}

export interface IAppTheme {
    colors: IAppColors;
    sizes: IAppSizes;
}

//     --menu-header-bg-color: #25b6e5;