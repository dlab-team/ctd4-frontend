import { useField } from 'formik'

const TextInput = ({ label, ...props}) => {
    const [field, meta] = useField(props)

    return(
        <div className="px-10 py-5">
            <label>{label}</label>
            <input 
                className="text-input bg-[#E2F2FE] border-sky-800"
                {...field} 
            />
             {meta.touched && meta.error ? (
                    <div className="error text-red-500">{meta.error}</div>
                ) : null}
        </div>
    )
}

export default TextInput