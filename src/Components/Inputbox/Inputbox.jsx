import "./Inputbox.css";
import Button from "../Button/Button";

export default function Inputbox({
  placeholder,
  materialDesign = false,
  style = {},
  withButton = true,
  btnText = "",
  action,
  click,
  buttonIcon
}) {
  const inputClass = materialDesign ? "material-design" : "regular";
  return (
    <div className="input-container">
      <input type="text" placeholder={placeholder} onChange={(e) => action(e.target.value)} className={inputClass} style={style} />
      {withButton && <Button text={btnText} icon={buttonIcon} action={click}/>}
      {/* <Button text={"ADD"} style={btnStyle}/> */}
    </div>
  );
}
