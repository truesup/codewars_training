function driver(data) {
  const [forename, middleName, surname, dob, gender] = data;
  
  const months = {
    JAN: "01", FEB: "02", MAR: "03", APR: "04",
    MAY: "05", JUN: "06", JUL: "07", AUG: "08",
    SEP: "09", OCT: "10", NOV: "11", DEC: "12"
  };
  
  const sur = (surname.toUpperCase() + "99999").slice(0, 5);
  
  const [dayRaw, monthRaw, yearRaw] = dob.split("-");
  const day = dayRaw.padStart(2, "0");
  const year = yearRaw;
  
  const monthKey = monthRaw.slice(0, 3).toUpperCase();
  let month = months[monthKey];
  
  if (gender === "F") {
    month = String(parseInt(month) + 50);
  }
  
  const decade = year[2];
  const yearDigit = year[3];
  
  const firstInitial = forename[0].toUpperCase();
  const middleInitial = middleName ? middleName[0].toUpperCase() : "9";
  
  return (
    sur +
    decade +
    month +
    day +
    yearDigit +
    firstInitial +
    middleInitial +
    "9AA"
  );
}