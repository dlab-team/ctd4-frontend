import { useField } from 'formik'

const Select = ({label, ...props}) => {
    const [field] = useField(props)
    return(
        <div className="">
            <label>{label}</label>
            <select className="text-input bg-[#E2F2FE] border-sky-800 mt-4" {...field} {...props} />
        </div>
    )
}

export default Select