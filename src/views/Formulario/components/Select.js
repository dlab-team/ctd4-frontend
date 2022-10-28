import { useField } from 'formik'

const Select = ({label, ...props}) => {
    const [field] = useField(props)
    return(
        <div className="px-10 py-5">
            <label>{label}</label>
            <select className="text-input bg-[#E2F2FE] border-sky-800" {...field} {...props} />
        </div>
    )
}

export default Select