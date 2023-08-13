import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

const Tech = (props) => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {props?.data?.map((technology) => (
        <div className='w-28 h-28' key={technology.node.name}>
          <BallCanvas icon={technology.node.image.url} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
