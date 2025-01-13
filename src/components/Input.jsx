export default function Input({ label, ref, type, ...props }) {
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
};