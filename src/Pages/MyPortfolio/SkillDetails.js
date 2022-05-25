import React from "react";

const SkillDetails = ({ skill }) => {
  return (
    <div
      tabindex="0"
      class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5"
    >
      <div class="collapse-title text-xl font-medium">{skill.name}</div>
      <div class="collapse-content">
        <p>{skill.details}</p>
      </div>
    </div>
  );
};

export default SkillDetails;
