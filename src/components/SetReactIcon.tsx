import { CgWebsite } from "react-icons/cg";
import { GrHostMaintenance, GrOptimize } from "react-icons/gr";
import { MdOutlineDeveloperMode } from "react-icons/md";

type IProp = {
  iconName: string;
  color: string;
};

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "MdOutlineDeveloperMode":
      return <MdOutlineDeveloperMode />;
    case "CgWebsite":
      return <CgWebsite />;
    case "GrOptimize":
      return <GrOptimize />;
    case "GrHostMaintenance":
      return <GrHostMaintenance />;
  }
};

const SetReactIcon = ({ iconName, color }: IProp) => {
  return (
    <div style={{ color: color }} className="text-6xl">
      {getIcon(iconName)}
    </div>
  );
};

export default SetReactIcon;
