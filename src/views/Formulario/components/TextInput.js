import { useField } from 'formik'

const TextInput = ({ label, ...props}) => {
    const [field, meta] = useField(props)

    return(
        <div className="px-10 py-5 h-[90px] text-[20px] text-[#140B34]">
            <label>{label}</label>
            <input 
                className="text-input bg-[#E2F2FE] border-sky-800 mt-4"
                
                {...field} {...props}
            />
             {meta.touched && meta.error ? (
                    <div className="error text-red-500 text-[13px]">{meta.error}</div>
                ) : null}
        </div>
    )
}

export default TextInput