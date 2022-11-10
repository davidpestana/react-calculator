import { useState } from "react";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import DisplayController from "../DisplayController/DisplayController";

const Calculator = () => {
   
    const [state, setState] = useState({
        total: null,
        next: null,
        operation: null,
    });


    const actionHandler = (action) => {};
 
    // const [total, setTotal] = useState(null);
    // const [next, setNext] = useState(null);
    // const [operation, setOperation] = useState(null);

    return (<div>
        <DisplayController></DisplayController>
        <ButtonPanel buttons={[1,2,3,4,5,6,7,8,9,0]} numbers action={actionHandler}></ButtonPanel>
        <ButtonPanel buttons={['+','-','/','*','=']} operations action={actionHandler}></ButtonPanel>
        <ButtonPanel buttons={['C','CE']} specials action={actionHandler}></ButtonPanel>
    </div> )
} 


export default Calculator;