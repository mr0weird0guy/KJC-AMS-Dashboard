import "./VenueDeptFacl.css";
import { MdLocationPin, MdPeople, MdPersonAddAlt1 } from "react-icons/md";
import Inputbox from "../Inputbox/Inputbox";
import Button from "../Button/Button";
import { readDocuments, createDocument } from '../../Controllers'
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function VenueDeptFacl() {
  const [Venues, setVenues] = useState([])
  const [department, setdepartment] = useState([])
  const [faculty, setfaculty] = useState({})
  const [venueText, setvenueText] = useState(null)
  const [departmentText, setdepartmentText] = useState(null)
  // Using map here to demonstrate the practical usage of populating the venues.

  useEffect(() => {
    fetchData('Venue', setVenues)
    fetchData('Department', setdepartment)
  }, [])

  const fetchData = async (name, setState) => {
    try {
      const data = await readDocuments(name)
      setState(data)
    } catch (err) {
      toast.error('error occured while fetching')
    }
  }

  const createData = async (name, payload, setState, state) => {
    try {
      await createDocument(name, payload)
      setState([payload, ...state])
    } catch (err) {
      toast.error('error occured')
    }
  }

  const createVenue = () => {
    createData('Venue', { venue_name: venueText }, setVenues, Venues)
  }

  const createDepartment = () => {
    createData('Department', { department_name: departmentText }, setdepartment, department)
  }

  const createFaculty = async () => {
    try {
      await createDocument('Faculty', faculty)
      setfaculty({})
      toast.success('Faculty added')
    } catch (err) {
      toast.error('error occured')
    }
  }

  const venuesMap = Venues.map((data) => <Label key={data.id} text={data.venue_name} />);

  return (
    <div id="container">
      {/* ================================ Add Venue Section ================================ */}
      <section className="venue">
        <h1>
          <MdLocationPin /> &nbsp; Add Venue
        </h1>
        <hr />
        <Inputbox placeholder={"Venue Name"} btnText={"ADD"} action={(string) => setvenueText(string)} click={createVenue} />
        <div className="scrollable-content">{venuesMap}</div>
      </section>

      {/* ================================ Add Organizer Section ================================ */}
      <section className="organizer">
        <span className="section-heading">
          <h1>
            <MdPeople /> &nbsp; Add Department / Organizer
          </h1>
        </span>
        <hr />

        <Inputbox placeholder={"Department Name"} btnText="ADD" action={(string) => setdepartmentText(string)} click={createDepartment} />
        {/* Dummy data */}
        <div className="scrollable-content">
          {department.map((data) => <Label key={data.id} text={data.department_name} />)}
        </div>
      </section>

      {/* ================================ Add Faculty Section ================================ */}
      <section className="faculty">
        <h1>
          <MdPersonAddAlt1 /> &nbsp; Add Faculty
        </h1>
        <hr />
        <div className="content">
          <div>
            <Inputbox
              placeholder={"Name"}
              withButton={false}
              action={(string) => faculty.name = string}
              materialDesign={true}
              style={{ width: "35vw" }}
            />

            <Inputbox
              placeholder={"Department"}
              withButton={false}
              action={(string) => faculty.department = string}
              materialDesign={true}
              style={{ width: "35vw" }}
            />
          </div>
          <Inputbox
            placeholder={"Email"}
            withButton={false}
            action={(string) => faculty.email = string}
            materialDesign={true}
            style={{ width: "35vw" }}
          />
        </div>
        <Button className="submit-btn" text={"Finish"} action={createFaculty} />
      </section>
    </div>
  );
}

function Label({ text }) {
  return (
    <div className="label">
      <p>{text}</p>
    </div>
  );
}
