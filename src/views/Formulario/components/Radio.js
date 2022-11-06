import { useField } from "formik";

const Radio = ({ label, ...props }) => {
    const [field] = useField({ ...props, type: 'radio'})
    return(
        <div>
            <label className="ml-24">
                <input type='radio' className="bg-gray-300 mt-4 mr-4 w-4 h-4" {...field} {...props} />
                {label}
            </label>
        </div>
    )
}

export default Radio