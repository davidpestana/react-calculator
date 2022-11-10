import ButtonPanel from "../ButtonPanel/ButtonPanel";
import DisplayController from "../DisplayController/DisplayController";

const Calculator = () => {
   
  

    return (<div>
        <DisplayController></DisplayController>
        <ButtonPanel buttons={[1,2,3,4,5,6,7,8,9,0]} numbers></ButtonPanel>
        <ButtonPanel buttons={['+','-','/','*','=']} operations></ButtonPanel>
        <ButtonPanel buttons={['C','CE']} specials></ButtonPanel>

    </div> )
} 


export default Calculator;