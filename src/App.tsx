import UseStateComponent from "./components/UseStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponent from "./components/UseContextComponent";

function App() {
    return (
        <div>
            <h1>useState</h1>
            <UseStateComponent />

            <h1>useEffect</h1>
            <UseEffectComponent />

            <h1>useContext</h1>
            <UseContextComponent />
        </div>
    );
}

export default App;
