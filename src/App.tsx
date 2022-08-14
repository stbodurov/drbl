import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

import styles from "./styles/App.module.scss";

const App = () => {
	return (
		<div className={styles.main}>
			<Sidebar />
			<Home />
		</div>
	)
}

export default App;