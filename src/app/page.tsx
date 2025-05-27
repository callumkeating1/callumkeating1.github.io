import { SpeedInsights } from "@vercel/speed-insights/next"
import { Projects } from "../../components/projects"

export default function Home() {
  return (
    <div>
      <h1 className="title">Welcome to callums page</h1>
      <div className="menu" id="menu">
        <a href="" className="menuText">websites</a>
        <a href="" className="menuText">links</a>
      </div>
      <br />
      <br />
      <div className="projects">
        <Projects />
      </div>
      <SpeedInsights/>
    </div>
  );
}
