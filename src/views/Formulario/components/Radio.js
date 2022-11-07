import { useField } from "formik";

const Radio = ({ label, ...props }) => {
    const [field] = useField({ ...props, type: 'radio'})
    return(
        <div>
            <label className="text-[16px] text-[#232323]">
                <input type='radio' className="bg-gray-300 bg-[#E2F2FE] mr-4 mb-3.5 w-4 h-4" {...field} {...props} />
                {label}
            </label>
        </div>
    )
}

export default Radio