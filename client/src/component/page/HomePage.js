import Layout from '../Layout'
import MySkills from '../MySkills'
import MyWorks from '../MyWorks'
import Footer from '../Footer'
import Banner from '../Banner'

export default function HomePage() {

    return (
        <Layout>
            <Banner />
            <MySkills />
            <MyWorks />
            <Footer />
        </Layout>
    )
}