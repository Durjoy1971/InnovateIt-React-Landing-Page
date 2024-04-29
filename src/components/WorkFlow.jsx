import codeImage from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
import WorkFlowMap from "./WorkFlowMap";

function WorkFlow() {
  return (
    <div className="mt-24">
      <h1 className="text-center text-3xl sm:text-5xl lg:text-6xl mb-10 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImage} alt="codeImage" />
        </div>
        <div className="pt-12 w-full lg:w-1/2 px-2">
          <div className="flex flex-col gap-7 p-2 w-full lg:w-[70%]">
            <WorkFlowMap
              icon={<CheckCircle2 />}
              text={"Code merge mode easy"}
              description={
                "Streamline your code merge process with our intuitive tools, ensuring seamless collaboration and efficient workflows."
              }
            />
            <WorkFlowMap
              icon={<CheckCircle2 />}
              text={"Share work in minutes"}
              description={
                "Conduct code reviews with confidence, leveraging our advanced features to identify issues and improve code quality."
              }
            />
            <WorkFlowMap
              icon={<CheckCircle2 />}
              text={"AI Assistance to reduce time"}
              description={
                "Utilize AI-powered assistance to optimize your development process, reducing time spent on repetitive tasks and enhancing productivity."
              }
            />
            <WorkFlowMap
              icon={<CheckCircle2 />}
              text={"Review code without worry"}
              description={
                "Effortlessly share your work with team members and stakeholders in minutes, facilitating collaboration and feedback exchange for better project outcomes."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
