const Total = (props) => {

    let total = 0;
    for (let part of props.parts) {
        total += part.exercise;
    }

    return <p>Number of exercises {total}</p>
}

export default Total;