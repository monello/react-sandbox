import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
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
        setAge(age + 1);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>{isAlive ? "Alive" : "Dead"} </h2>
                <h2>Current Age: {age}</h2>
                <h2>Life Stage: {lifeStage}</h2>
                <button onClick={handleIncreaseAge}>Increase Age</button>
            </header>
        </div>
    );
}

export default App;
