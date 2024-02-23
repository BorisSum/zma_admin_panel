import { useAppSelector } from "./store/hooks";


function App() {
  const { theme } = useAppSelector( state => state.appSettings );

  const mainContainerStyles: React.CSSProperties = {
    backgroundColor: theme.appBgColor,
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }

  return (
    <div style={mainContainerStyles}>
    </div>
  );
}

export default App;
