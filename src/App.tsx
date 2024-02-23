import { Menu } from "./menu/Menu";
import { useAppSelector } from "./store/hooks";


function App() {
  const { appBgColor } = useAppSelector( state => state.appSettings.theme.colors );

  const mainContainerStyles: React.CSSProperties = {
    backgroundColor: appBgColor,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }

  return (
    <div style={mainContainerStyles}>
      <Menu />
    </div>
  );
}

export default App;
