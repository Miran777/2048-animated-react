import React from "react";
import ReactDOM from "react-dom/client";
import './main.scss'
import './styles.scss'
import BoardView from "./components/BoardView";


const App = () => {
    return <BoardView />
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)