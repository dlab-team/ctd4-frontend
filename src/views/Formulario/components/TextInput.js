import { useField } from 'formik'

const TextInput = ({ label, ...props}) => {
    const [field, meta] = useField(props)

    //console.log({field,meta})
    return(
        <div className="px-10 py-5">
            <label>{label}</label>
            <input 
                className="text-input bg-[#E2F2FE] border-sky-800"
                {...field} 
            />
        </div>
    )
}

export default TextInput