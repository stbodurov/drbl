import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

import styles from "./styles/App.module.scss";

const App = () => {
	return (
    <div className={styles.main}>
      <Sidebar />
        <Routes>
         <Route path="/" element={ <Home />} />
        </Routes>
    </div>
  );
}

export default App;