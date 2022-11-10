import Button from "../Button/Button";


const ButtonPanel = ({
    buttons = [1,2,3,4,5,6,7,8,9,0],
    action = ({button}) => {},
    operations = false,
    numbers = false,
    specials = false
}) => {

    // const handler = (button) => {
    //     action(button)
    // }

    const getType = () => {
        if(numbers) return 'number';
        if(operations) return 'operation';
        if(specials) return 'special';
    }

    return (
    <div>
        { buttons.map((button, index) =>  
            <Button key={index}
                    content={button} 
                    clickHandler={action} 
                    type={getType()}
                />) }
    </div>);

}

export default ButtonPanel;