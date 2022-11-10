import './Button.css'

const Button = ({
    content, 
    type = 'number', 
    shape = 'square',
    onClick = (content) => { console.log('se ha pulsado ' + content)}
}) => {
    return (<div 
        className={`${type} ${shape}`} 
        onClick={() => onClick({content})}>{content}
    </div>)
}

export default Button;