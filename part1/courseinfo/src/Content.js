import Part from './Part.js';

const Content = ({ parts }) => {
    return (
        <>
            <Part
                name={parts[0].name}
                exercise={parts[0].exercise}
            />
            <Part
                name={parts[1].name}
                exercise={parts[1].exercise}
            />
            <Part
                name={parts[2].name}
                exercise={parts[2].exercise}
            />
        </>
    )
}

export default Content;