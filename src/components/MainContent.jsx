import ProjectsContainer from './ProjectsContainer'
import SkillsTabs from './SkillsTabs'
import CertificatesContainer from './CertificatesContainer'
import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id="main-content">
      <SkillsTabs />
      <hr />
      <ProjectsContainer />
      <hr />
      <CertificatesContainer />
    </main>
  )
}

export default MainContent