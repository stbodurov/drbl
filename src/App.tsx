import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

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