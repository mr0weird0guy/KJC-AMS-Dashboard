import "./InputBox.css"

export default function InputBox({ placeholder, inputStyle = {}, Button = null }) {
    return (
      <div className="inputbox" style={inputStyle}>
        <input type="text" placeholder={placeholder} className={"regular"} />
        {Button !== null && Button !== undefined && <Button />}
      </div>
    )
  }