import Button from "../Button/Button";


const ButtonPanel = ({
    buttons = [1,2,3,4,5,6,7,8,9,0],
    operations = false,
    numbers = false,
    specials = false
}) => {

    const handler = (dataDelButton) => {
        console.log(dataDelButton);
    }

    const getType = () => {
        if(numbers) return 'number';
        if(operations) return 'operation';
        if(specials) return 'special';
    }

    return (
    <div>
        { buttons.map(button =>  
            <Button content={button} 
                    clickHandler={handler} 
                    type={getType()}
                />) }
    </div>);

}

export default ButtonPanel;