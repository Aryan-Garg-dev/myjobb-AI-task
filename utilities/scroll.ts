export const scrollToSection = (sectionId: string) => {
  if (!sectionId) return;
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};
