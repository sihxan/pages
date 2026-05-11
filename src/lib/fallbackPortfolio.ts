import {
  ACHIEVEMENTS,
  EDUCATION,
  EXPERIENCE,
  PERSON,
  RESEARCH_INTERESTS,
  SKILLS_GROUPS,
  WORKS,
} from "./data";

const fallbackDate = new Date(0);

export const fallbackPerson = {
  id: 0,
  ...PERSON,
  updatedAt: fallbackDate,
};

export const fallbackWorks = WORKS.map((work, index) => ({
  ...work,
  id: index + 1,
  displayId: work.id,
  tagBorder: work.tagBorder ?? null,
  collab: work.collab ?? null,
  sortOrder: index + 1,
  createdAt: fallbackDate,
  updatedAt: fallbackDate,
}));

export const fallbackSkillGroups = SKILLS_GROUPS.map((group, groupIndex) => {
  const groupId = groupIndex + 1;

  return {
    id: groupId,
    label: group.label,
    sortOrder: groupId,
    items: group.items.map((skill, skillIndex) => ({
      ...skill,
      id: groupId * 100 + skillIndex + 1,
      groupId,
      border: skill.border ?? null,
      sortOrder: skillIndex + 1,
    })),
  };
});

export const fallbackResearchInterests = RESEARCH_INTERESTS.map(
  (name, index) => ({
    id: index + 1,
    name,
    sortOrder: index + 1,
  })
);

export const fallbackExperience = EXPERIENCE.map((item, index) => ({
  id: index + 1,
  ...item,
  sortOrder: index + 1,
}));

export const fallbackEducation = EDUCATION.map((item, index) => ({
  id: index + 1,
  ...item,
  sortOrder: index + 1,
}));

export const fallbackAchievements = ACHIEVEMENTS.map((item, index) => ({
  id: index + 1,
  ...item,
  sortOrder: index + 1,
}));
