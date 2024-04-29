import FeatureMap from "./FeatureMap";
import {
  BatteryCharging,
  BotMessageSquare,
  Fingerprint,
  GlobeLock,
  PlugZap,
  ShieldHalf,
} from "lucide-react";

const FeatureSection = () => {
  return (
    <div className="mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-800 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="mt-10 lg:mt-20 tracking-wide text-3xl sm:text-5xl lg:text-6xl">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-600 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-wrap mt-10 lg:mt-20">
        <FeatureMap
          icon={<BotMessageSquare />}
          text={"Drag-and-Drop Interface"}
          description={
            "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface."
          }
        />
        <FeatureMap
          icon={<Fingerprint />}
          text={"Multi-Platform Compatibility"}
          description={
            "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface."
          }
        />
        <FeatureMap
          icon={<GlobeLock />}
          text={"Analytics Dashboard"}
          description={
            "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard."
          }
        />
        <FeatureMap
          icon={<ShieldHalf />}
          text={"Built-in Templates"}
          description={
            "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments."
          }
        />
        <FeatureMap
          icon={<BatteryCharging />}
          text={"Real-Time Preview"}
          description={
            "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments."
          }
        />
        <FeatureMap
          icon={<PlugZap />}
          text={"Collaboration Tools"}
          description={
            "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing."
          }
        />
      </div>
    </div>
  );
};

export default FeatureSection;
