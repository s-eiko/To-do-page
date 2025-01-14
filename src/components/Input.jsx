import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, type, ...props }, ref) {
    return (
        <div className="input-section">
            <label>{label}</label>
            {type === "textarea" ? (
                <textarea ref={ref} className="input" {...props} rows="1" cols="20"></textarea>
            ) : (
                <input type={type} ref={ref} className="input" {...props}></input>
            )}
        </div>
    );
});

export default Input;