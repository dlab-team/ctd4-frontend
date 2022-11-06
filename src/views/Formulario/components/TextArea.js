import { useField } from "formik";

const TextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <>
        <label className="" htmlFor={props.id || props.name}>{label}</label>
        <textarea className="text-area text-[16px] bg-[#E2F2FE] border-sky-800 text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
                    <div className="error text-red-500">{meta.error}</div>
                ) : null}
    </>
    )
}

export default TextArea