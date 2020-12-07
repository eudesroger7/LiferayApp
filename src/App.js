import { ClayIconSpriteContext } from '@clayui/icon';
import Main from './pages/Main';
const spritemapUrl = "/icons.svg";

function App() {
  return (
    <ClayIconSpriteContext.Provider value={spritemapUrl}>
      <Main />
    </ClayIconSpriteContext.Provider>
  );
}

export default App;
