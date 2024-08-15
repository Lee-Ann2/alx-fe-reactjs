import { userState } from 'react';

function Counter() {
    const [count, setCount] = userState(0);

    return (
        <div>
            <P>Current Count: {count}</P>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;