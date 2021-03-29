const Statistics = ({ good, neutral, bad }) => {
    return (
        <>
            <h3>Statictis</h3>
            {(good + neutral + bad) === 0 ? 'No feedback given' :
                <>
                    <div>Good: {good}</div>
                    <div>Neutral: {neutral}</div>
                    <div>Bad: {bad}</div>
                </>
            }
        </>
    )
}

export default Statistics;