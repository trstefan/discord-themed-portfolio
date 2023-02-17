import React from "react";
import { useState } from "react";
import { BsHash } from "react-icons/bs";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";

export const Explorer = () => {
  const A = ["1", "2"];
  const B = ["1", "2", "3"];
  const C = ["1", "2"];
  return (
    <div className="w-60  bg-gray-200 dark:bg-gray-800">
      <ExplorerBlock />
      <div className="channels__container">
        <Dropdown header="A" sections={A} />
        <Dropdown header="B" sections={B} />
        <Dropdown header="C" sections={C} />
      </div>
    </div>
  );
};

const Dropdown = ({ header, sections }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className="dropdown__header" onClick={() => setExpanded(!expanded)}>
        <ChevronIcon expanded={expanded} />
        <h2>{header}</h2>
        <FaPlus
          size="12"
          className="text-accent text-opacity-80 my-auto ml-auto"
        />
      </div>
      {expanded &&
        sections &&
        sections.map((section) => <TopicSection section={section} />)}
    </div>
  );
};

const ExplorerBlock = () => (
  <div className="explorer__block">
    <h1 className="explorer__block__text">Explorer Block</h1>
  </div>
);

const TopicSection = ({ section }) => (
  <div className="dropdown__section">
    <BsHash size="24" className="text-gray-700 dark:text-gray-400" />
    <h5 className="dropdown__text">{section}</h5>
  </div>
);

const ChevronIcon = ({ expanded }) => {
  const chevClass = "text-accent text-opacity-80 my-auto mr-1";
  return expanded ? (
    <FaChevronDown size="14" className={chevClass} />
  ) : (
    <FaChevronRight size="14" className={chevClass} />
  );
};
