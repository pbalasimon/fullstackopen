const Total = ({ parts }) => {

    let total = 0;
    for (let part of parts) {
        total += part.exercise;
    }

    return <p>Number of exercises {total}</p>
}

export default Total;