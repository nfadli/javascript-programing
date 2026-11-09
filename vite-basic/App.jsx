import "./style.css"
import { createRoot } from "react-dom/client";
function Pop() {
	return <button> Helo world</button>

}
function App() {
	return <>
		<h1 className="text-4xl">Hello word</h1>
		<Pop />
	</>
}
const app = document.getElementById("app")
const root = createRoot(app)
root.render(<App />)
