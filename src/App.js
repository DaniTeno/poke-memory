import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Options } from "./components/Options";
import { PlayScreen } from "./components/PlayScreen";

const initialSettings = {
  trys: 5,
  difficulty: 8
}

function App() {
  const [settings, setSettings] = useState(initialSettings)
  const handlerSettings = (obj) => setSettings({
    trys: obj.tryValue,
    difficulty: parseInt(obj.difficultyValue)
  });
  return (
    <main>
      <HashRouter>
      <Header settings={settings} />
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/play" element={<PlayScreen settings={settings} />} />
          <Route exact path="/options" element={<Options handlerSettings={handlerSettings} settings={settings}/>} />
        </Routes>
      </HashRouter>
    </main>
  );
}

export default App;
