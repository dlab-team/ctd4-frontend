import { useField } from "formik";

const Checkbox = ({ children, ...props })  => {
    const [field] = useField({ ...props, type: 'chekbox' })
    return(
        <div className="mx-auto mt-4 ml-24">
            <label className="text-[16px] font-regular text-[#232323]">
                <input type="checkbox" className="mr-4 w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1" 
                {...field} {...props} />
                {children}
                {/* {meta.touched && meta.error ? (
                    <div className="error text-red-500">{meta.error}</div>
                ) : null} */}
            </label>
        </div>
    )
}

export default Checkbox