import { useState } from 'react';

const NoClicks = () => {
    return (
        <h3>No clicks yet!</h3>
    );
}

const ButtonsClicked = () => {
    return (
        <h3s>Buttons already Clickeds!</h3s>
    );
}

const ComplexState = () => {
    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
    });

    const handleClickLeft = () => {
        setCounters({
            ...counters,
            left: counters.left + 1,
        });
    }

    const handleClickRight = () => {
        setCounters({
            ...counters,
            right: counters.right + 1,
        });
    }

    const handleClickReset = () => {
        setCounters({
            ...counters,
            right: 0,
            left: 0
        });
    }

    return (
        <>
            {counters.left}
            <button onClick={handleClickLeft}>Left</button>
            <button onClick={handleClickRight}>Rigth</button>
            {counters.right}
            <button onClick={handleClickReset}>Reset</button>
            <p> Total clicks : {counters.left + counters.right}</p>
            {(counters.left + counters.right) === 0 ?
                <NoClicks /> :
                <ButtonsClicked />}
        </>
    )
}

export default ComplexState;