import React from 'react'
import AllEvents from '../All Events/AllEvents'

function TodayEvents() {
  return (
    <AllEvents currentEventsOnly={true}/>
  )
}

export default TodayEvents