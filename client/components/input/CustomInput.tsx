import React from 'react';

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;


const CustomInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref): any => {
    return (<input ref={ref} {...props} />);
})
CustomInput.displayName = "CustomInput";

export default CustomInput;