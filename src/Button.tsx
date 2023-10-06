import React from 'react';

type ButtonPropsType = {
    title: string
    isDisabled: boolean
    actionFunction: () => void
}

const Button: React.FC<ButtonPropsType> = ({title, actionFunction, isDisabled}) => {

    return (
        <div className={isDisabled ? "isActive": ""}>
            <button onClick={actionFunction} disabled={isDisabled}>{title}</button>
        </div>
    );
};

export default Button;