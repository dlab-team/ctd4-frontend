import { useField } from "formik";

const Checkbox = ({ children, ...props })  => {
    const [field] = useField({ ...props, type: 'chekbox' })
    return(
        <div className="">
            <label className="ml-6 text-[16px] font-regular text-[#232323]">
                <input type="checkbox" 
                className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1" 
                {...field} {...props} />
                {children}
            </label>
        </div>
    )
}

export default Checkbox