import Part from './Part.js';

const Content = (props) => {
    return (
        <>
            <Part
                name={props.parts[0].name}
                exercise={props.parts[0].exercise}
            />
            <Part
                name={props.parts[1].name}
                exercise={props.parts[1].exercise}
            />
            <Part
                name={props.parts[2].name}
                exercise={props.parts[2].exercise}
            />
        </>
    )
}

export default Content;