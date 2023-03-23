import React from "react";
import { useState } from "react";
import TabNav from "./TabNav";
import TabContent from "./TanContent";
import "./Skills.css";

function Skills() {
  const [activeTab, setActiveTab] = useState("Languages");
  var data = require("./SkillsData");
  return (
      <section className="skills" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="tab-container">
            <ul className="tab-nav">
              {
                data.map((cate) => {
                  return (
                    <TabNav title={cate.type} id={cate.type} activeTab={activeTab} setActiveTab={setActiveTab} key={cate.type} />
                  );
                })
              }
            </ul>
            {
              data.map((cate) => {
                return (
                  <TabContent id={cate.type} activeTab={activeTab} key={cate.type}>
                    {
                      cate.list.map((skill) => {
                        return (
                          <div className="skill-card" key={skill.name}>
                            <img src={skill.icon} alt={skill.name} className="icon" id={skill.name}/>
                            <label className="skill-name" htmlFor={skill.name}>{skill.name}</label>
                          </div>
                        );
                      })
                    }
                  </TabContent>
                );
              })
            }
          </div>
      </section>
  );
}

export default Skills;