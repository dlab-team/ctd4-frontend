import { useField } from 'formik'

const SelectTest = ({label, ...props}) => {
    const [field] = useField(props)
    return(
        <div className="px-10 py-5 h-[90px] text-[20px] text-[#140B34] font-[400]">
            <label>{label}</label>
            <select className="text-input bg-[#E2F2FE] border-sky-800 mt-4" {...field} {...props} />
        </div>
    )
}

export default SelectTest