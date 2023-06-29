import TextField from "../Common/TextField"
import DropDown from "../Common/DropDown"

const Venue = () => {
  const centerDiv = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  }

  return (
    <div style={centerDiv}>
      <h1>Venue</h1>
      <TextField
        name="name-input"
        label="Name"
        type="text"
        placeholder="Enter name"
        inputStyle={{ width: "20rem"}}
      />

      <DropDown
        name="venue-type"
        label="Select Venue"
        options={[
          { name: "M1 Audi", value: "m1-audi" },
          { name: "M2 Audi", value: "m2-audi" },
          { name: "Chavra Square", value: "chavra-square" },
        ]}
      />
    </div>
  )
}

export default Venue
