import ServicesStore from "../../DataStore/ServicesStore"
import { observer } from "mobx-react"
const Service = (observer(({ id }) => {

  return (
    <>
      <div>
        {ServicesStore.servicesList[id].serviceName}
      </div>
      <div>
        {ServicesStore.servicesList[id].description}
      </div>
    </>
  )
}))

export default Service