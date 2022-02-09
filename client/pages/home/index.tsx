import { NextPage } from "next";
import HomeMenu from "./components/HomeMenu";
import ContentSlideComponent from "./components/main/ContentSilde";
import ContentCreationComponent from "./components/main/ContentCreation";
import ContentComponent from "./components/main/Content";
import RankAndContract from "./components/RankAndContract";
const Home: NextPage = () => {
  return (
    <div className="home-body">
      <div className="slidebar">
        <HomeMenu />
      </div>
      <div className="content">
        <div className="transition">
          <ContentSlideComponent />
          <ContentSlideComponent />
          <ContentSlideComponent />
        </div>
        <div className="creation">
          <ContentCreationComponent />
        </div>
        <div className="main">
          <ContentComponent />
        </div>
      </div>
      <div className="rank-contract">
        <RankAndContract />
      </div>
    </div>
  )
}

export default Home
