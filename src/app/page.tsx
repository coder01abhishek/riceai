import HeroSection from "./components/HeroSection";
import DePINProtocol from "./components/DePINProtocol";
import MinibotSection from "./components/MinibotSection";
import AGIChallenges from "./components/AGIChallenges";
import AIFoundry from "./components/AIFoundry";
import RobotBrain from "./components/RobotBrain";
import KeyFeatures from "./components/KeyFeatures";
import RiceRoboticsSection from "./components/RiceRoboticsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DePINProtocol />
      <MinibotSection/>
      <AGIChallenges/>
      <HeroSection />
      <AIFoundry/>
      <RobotBrain/>
      <HeroSection />
      <KeyFeatures/>
      <RiceRoboticsSection/>
      <HeroSection />
      <HeroSection />
      <HeroSection />
    </>
  );
}
