import React, { useState, useTransition } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <pre className="bg-gray-900 p-4 rounded-md overflow-auto">
        <code className="text-purple-400">{`
function displaySkills() {
  console.log("Web Development");
  console.log("Data Structures & Algorithm");
}

displaySkills();
        `}</code>
      </pre>
    ),
  },
  {
    title: "Community",
    id: "community",
    content: (
      <pre className="bg-gray-900 p-4 rounded-md overflow-auto">
        <code className="text-purple-400">{`
function displayCommunity() {
  console.log("CP Community");
}

displayCommunity();
        `}</code>
      </pre>
    ),
  },
  {
    title: "Companies",
    id: "companies",
    content: (
      <pre className="bg-gray-900 p-4 rounded-md overflow-auto">
        <code className="text-purple-400">{`
function displayCompanies() {
  console.log("Worked with Internshala as a ISP Parterner.");
}

displayCompanies();
        `}</code>
      </pre>
    ),
  },
];

const TabButton = ({ selectTab, active, children }) => {
  const buttonClasses = active
    ? "text-violet-300 border-b border-violet-500"
    : "text-violet-200 hover:text-violet-300";

  return (
    <button onClick={selectTab} className={`mr-3 font-semibold ${buttonClasses}`}>
      {children}
    </button>
  );
};

const About = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold mb-4">A Little About Me...</h2>
            <p className="text-base lg:text-lg">
            I am a dedicated technology professional with a strong interest in AI, machine learning, and open-source innovation. My focus is on leveraging technology to tackle complex challenges and drive positive change. I am committed to continuous learning and growth, using my skills to turn opportunities into impactful solutions.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex space-x-4 mb-4">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                I use to do...
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("community")}
                active={tab === "community"}
              >
                My Communities
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("companies")}
                active={tab === "companies"}
              >
                I've worked with...
              </TabButton>
            </div>
            <div className="border border-violet-500 bg-[#1e1e1e] rounded-md p-4">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
