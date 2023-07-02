import PageHeader from "../PageHeader/PageHeader"
import { BsFillPersonFill } from "react-icons/bs"
import PageControls from "../PageControls/PageControls"
import "./Faculty.css"

const FacultyPage = () => {

  return (
    <>
      <PageHeader title="Faculty" icon={<BsFillPersonFill />} />
      <PageControls inputplaceholder="Search Faculty" />
      <div className="faculty-main">
        {/* add content here */}
      </div>
    </>
  )
}

export default FacultyPage
