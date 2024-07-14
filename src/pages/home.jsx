import * as cpnets from '../components'
import { _deleverData, _smsuz, _gz, _iman } from '../utils/constants'

const Home = () => {
  return (
    <>
      <cpnets.Nav />
      <cpnets.Hero />
      <cpnets.Team />
      <cpnets.MobileApp />
      <cpnets.ErpSystem />
      <cpnets.UxUi />
      <cpnets.Optimization />
      <cpnets.ItConsulting />
      <cpnets.Tools />
      <cpnets.OurClients />
      <cpnets.Portfolio sectionData={_deleverData} />
      <cpnets.Portfolio sectionData={_smsuz} reverse={true} />
      <cpnets.Portfolio sectionData={_gz} />
      <cpnets.Portfolio sectionData={_iman} reverse={true} />
      <cpnets.HowWeWork />
      <cpnets.ContactUs />
      <cpnets.Footer />
    </>
  )
}

export default Home