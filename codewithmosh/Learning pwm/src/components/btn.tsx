
interface Props{
    btntxt: string,
    color?: "primary" | "secondary" | "danger", //optional property
    onClick: ()=>void
}

function Btn({btntxt, color, onClick}: Props){
    return <button className={"btn btn-"+color} onClick={onClick}>{btntxt}</button>
}

export default Btn