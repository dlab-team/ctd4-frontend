import { useField } from "formik";

const TextArea = ({label, ...props}) => {
    const [field] = useField(props);
    return(
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <textarea className="text-area bg-[#E2F2FE] border-sky-800 text-input" {...field} {...props} />
    </>
    )
}

export default TextArea