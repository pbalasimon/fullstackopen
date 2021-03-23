import { useState } from 'react';
const Counter = ({ value }) => {
    return (
        <h3>{value}</h3>
    )
}

const Buttons = () => {

    const [count, setCount] = useState(0);

    const handleClick = (operation) => {
        console.log(`Count Value previous click: ${count}`);
        if (operation === '+') {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    return (
        <>
            <button onClick={() => handleClick('+')}>Increase</button>
            <button onClick={() => handleClick('-')}>Decrease</button>
            <Counter value={count} />
        </>
    )
}

export default Buttons;