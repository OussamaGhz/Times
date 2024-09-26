export const transformData = (fetchedData: any): any => {
  const transformedData = fetchedData.map((academicYear: any) => {
    const specialities = academicYear.specialite.map((speciality: any) => {
      const sections = speciality.sections.map((section: any) => {
        return {
          name: section.name,
          schedule: section.schedule,
        };
      });

      return {
        name: speciality.name,
        sections: sections,
      };
    });

    return {
      year: academicYear.year,
      specialities: specialities,
    };
  });

  return transformedData;
};