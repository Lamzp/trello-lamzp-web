import './App.scss';
function App() {
    return (
        <div className="wrapper">
            <nav className="navbar app">navbar app</nav>
            <nav className="navbar board">board bar</nav>
            <div className="board-cols">
                <header>Brainstorm</header>
                <ul>
                    <li>todo item</li>
                </ul>
                <footer>footer</footer>
            </div>
        </div>
    );
}

export default App;
