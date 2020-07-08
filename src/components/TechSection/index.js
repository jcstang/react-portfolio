import React from "react";
import TechCard from "../TechCard";

export default function TechSection(props) {
  return (
    <div className="container is-fluid">
      <div className="columns">
        {props.techList.map((tech, index) => (
          <TechCard
            title={tech.title}
            key={index}
            iconCode={tech.iconCode}
            sizeCode={tech.sizeCode}
          />
        ))}
      </div>
    </div>
  );
}
