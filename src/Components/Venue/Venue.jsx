import "./Venue.css"
import PageHeader from "../PageHeader/PageHeader"
import { BsBuildingFillAdd } from "react-icons/bs"
import PageControls from "../PageControls/PageControls"

const Venue = () => {
  return(
    <>
      <PageHeader title="Venue" icon={<BsBuildingFillAdd />} />
      <PageControls inputplaceholder="Search Venue" />
      <div className="venue-main">
        {/* add content here */}
      </div>
    </>
  )
}

export default Venue;