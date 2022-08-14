import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

import "./styles/App.scss";

const App = () => {
	return (
		<div className="main">
			<Sidebar />
			<Home />
		</div>
	)
}

export default App;