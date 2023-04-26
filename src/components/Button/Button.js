import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
    
    return (
        <button className="CommonButton">{ props.text }</button>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;