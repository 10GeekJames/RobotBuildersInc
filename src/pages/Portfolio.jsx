import ProjectCarousel from "../components/projects/ProjectCarousel";
import GradientTitle from "../components/shared/GradientTitle";
import SectionBadge from "../components/shared/SectionBadge";
import SectionWrapper from "../components/shared/SectionWrapper"

const PortFolio = () => {
  return(
    <SectionWrapper>
      <SectionBadge title="Portfolio" />
      <GradientTitle title="We have built some of our ideas, let us build some of yours" />
      <ProjectCarousel />
    </SectionWrapper>
  )
}

export default PortFolio;