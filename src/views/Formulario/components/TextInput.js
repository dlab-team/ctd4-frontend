import { useField } from 'formik'

const TextInput = ({ label, ...props}) => {
    const [field, meta] = useField(props)

    return(
        <div className="w-[386px] h-[48px] mx-auto mt-8">
            <label>{label}</label>
            <input 
                className="text-input font-[Poppins] bg-[#E2F2FE] border-sky-800 mt-4"
                {...field} 
            />
             {meta.touched && meta.error ? (
                    <div className="error text-red-500 text-[13px] mt-0.5">{meta.error}</div>
                ) : null}
        </div>
    )
}

export default TextInput