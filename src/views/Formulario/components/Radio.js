import { useField } from "formik";

const Radio = ({ label, ...props }) => {
    const [field] = useField({ ...props, type: 'radio'})
    return(
        <div>
            <label className="text-[16px] text-[#232323]">
                <input type='radio' className="bg-gray-300 mr-4 mb-3.5" {...field} {...props} />
                {label}
            </label>
        </div>
    )
}

export default Radio