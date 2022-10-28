import { useField } from "formik";

const Radio = ({ label, ...props }) => {
    const [field] = useField({ ...props, type: 'radio'})
    return(
        <div>
            <label>
                <input type='radio' className="bg-gray-300" {...field} {...props} />
                {label}
            </label>
        </div>
    )
}

export default Radio