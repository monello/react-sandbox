import ConsumerComponent from "./ContextConsumerComponent";

const ContextParentComponent: React.FC = () => (
    <>
        <h3>The Context Parent Component</h3>
        <p>I don't use any Context Objects</p>
        <ConsumerComponent />
    </>
);

export default ContextParentComponent;
