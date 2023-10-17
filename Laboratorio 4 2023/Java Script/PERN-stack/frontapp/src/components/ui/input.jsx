import { forwardRef } from "react";

export const Input= forwardRef((props, ref) =>{
    return(
        <input type="text" className="bg-violet-200 px-3 py-2 block my-2 w-full"
        {...props} ref={ref}/>
    )
});
