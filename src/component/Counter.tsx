import { forwardRef, useImperativeHandle, useState } from "react"

const Counter = forwardRef((_props, ref) => {
    const [count, setCount] = useState(0);
    useImperativeHandle(ref, () => ({
        increment: () => {
            setCount((prevCount) => prevCount + 1);
        },
        decrement: () => {
            setCount((prevCount) => prevCount - 1);
        },
    }));
    return (
        <div>
            <h1> Counter: {count}</h1>
        </div>
    );
});

export default Counter;