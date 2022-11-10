import Button from "../Button/Button";


const ButtonPanel = ({
    buttons = [1,2,3,4,5,6,7,8,9,0],
}) => {

    const handler = (data) => {
        console.log(data);
    }

    return (
    <div>
        { buttons.map(button =>  
            <Button content={button} 
                    onClick={handler} />) }
    </div>);

}

export default ButtonPanel;