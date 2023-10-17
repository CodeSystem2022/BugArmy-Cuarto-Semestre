export function Button({children}){
    return(
        <button className= "relative inline-flex items-cente px-3 py-1.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed">{children}</button>

    )
}
export default Button