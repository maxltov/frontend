import Meta from '../components/meta'
import Footer from '../components/footer'
import Setting from '../components/setting'
export default ({ children }) => (
  <div>
    <Meta />
    { children }
    <Setting />
    <Footer />
  </div>
)