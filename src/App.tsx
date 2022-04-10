import React, { useState, useEffect } from "react";
import "./App.css";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/todos")
        //     .then((response) => response.json())
        //     .then((res) => setTodos(res));

        (async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos"
            );
            const data = await response.json();
            console.log("TODO: ", data[0].userId);
            setTodos(data);
        })();
    }, []);

    const [isAlive, setIsAlive] = useState(false);
    const [age, setAge] = useState(0);
    const [lifeStage, setLifeState] = useState("Newborn");

    const birth = () => {
        setIsAlive(true);
        console.clear();
        console.log("%c👶 The component is born", "font-size: 20px");
    };

    const keepLiving = () => {
        setIsAlive(true);
        console.log("%c💃 The component is still alive", "font-size: 20px");
        if (age <= 3) {
            setLifeState("👶 Infancy");
        } else if (age <= 6) {
            setLifeState("👱 Early Childhood");
        } else if (age <= 8) {
            setLifeState("🦸‍♀️ Middle Childhood");
        } else if (age <= 11) {
            setLifeState("🧒Late Childhood");
        } else if (age <= 20) {
            setLifeState("👧 Adolescence");
        } else if (age <= 35) {
            setLifeState("👩‍🎓 Early Adulthood");
        } else if (age <= 50) {
            setLifeState("👩‍💼 Midlife");
        } else if (age <= 80) {
            setLifeState("🧓 Mature Adulthood");
        } else {
            setLifeState("👴 Late Adulthood");
        }
    };

    // RUN ONLY ONCE
    // Passing and empty dependencies array as the 2nd argument to useEffect() enures thr birth() method runs
    //  only once during the LifeCycle this component
    // Replaced componentDidMount() class-based Lifecycle method
    useEffect(birth, []);

    // RUN EVERY RENDER/RE-RENDER
    useEffect(keepLiving);

    // RUN ONLY WHEN A DEPENDENCY CHANGES
    useEffect(() => {
        console.log(
            "%c🔄Entered a new Life Stage",
            "color: lightblue; font-size: 20px"
        );
        // Example clean-up function
        return () => {
            console.log(
                "%c🧹Do some life cleanup",
                "color: green; font-size: 20px"
            );
        };
    }, [lifeStage]);

    const handleIncreaseAge = () => {
        // The correct way to update state based on the exising/current/previous state is to use the callback function method
        // If you just want to override the ste regardless of the previous (most current) value then you can just set it directly like it's done
        //  for setIsAlive() and setLifeState() - we don't care what the previous state is, because our new state is not dependent on that value
        // For age however, we WANT the latest value so we can add 1 to it, so we need to be 100% sure we use the lastest (most updated) value
        // Using the callback method as below, is a way that React promises that we will get access to that value, though an argument that React
        //  will pass to that function for us. you can just accept it in the function and name it whatever works for you. Here I named it 'prevAge'
        setAge((prevAge) => prevAge + 1);
    };

    let apiData = todos.length ? (
        <div>User ID: {todos[0].userId}</div>
    ) : (
        <>Loading...</>
    );

    return (
        <div className="App">
            <header className="App-header">
                <h2>{isAlive ? "Alive" : "Dead"} </h2>
                <h2>Current Age: {age}</h2>
                <h2>Life Stage: {lifeStage}</h2>
                <button onClick={handleIncreaseAge}>Increase Age</button>
                <h2>API Data</h2>
                {apiData}
            </header>
        </div>
    );
}

export default App;
