import "./chip.css";
const Chip=({category})=>{
return(
<div className="chip_1" style={{
paddingLeft:"16px",
paddingRight:"16px",
paddingTop:"12px",
paddingBottom:"12px",
borderRadius:"33px",
}}>
{category}
</div>
)
}
export default Chip;