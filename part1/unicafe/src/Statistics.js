import Statistic from './Statistic.js';

const Statistics = ({ good, neutral, bad }) => {
    let total = good + neutral + bad;
    let average = (good + bad * (-1)) / total;
    let positive = (good / total) * 100;
    return (
        <>
            <h3>Statictis</h3>
            {(good + neutral + bad) === 0 ? 'No feedback given' :
                <>
                    <table>
                        <tbody>
                            <Statistic label="Good" value={good}></Statistic>
                            <Statistic label="Neutral" value={neutral}> </Statistic>
                            <Statistic label="Bad" value={bad}></Statistic>
                            <Statistic label="Total" value={total} />
                            <Statistic label="Average" value={average} />
                            <Statistic label="Positive" value={positive}>%</Statistic>
                        </tbody>
                    </table>
                </>
            }
        </>
    )
}

export default Statistics;