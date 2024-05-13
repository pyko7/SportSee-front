export const formatDate = (dateString) => {
  const parts = dateString.split("-");
  const date = new Date(parts[0], parts[1] - 1, parts[2]);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  const year = date.getFullYear();

  // Add leading zeros to days and months if needed
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  return day + "-" + month + "-" + year;
};

export const getWeekDay = (day) => {
  let dday = "";
  switch (day) {
    case 1:
      dday = "L";
      break;
    case 2:
      dday = "M";
      break;
    case 3:
      dday = "M";
      break;
    case 4:
      dday = "J";
      break;
    case 5:
      dday = "V";
      break;
    case 6:
      dday = "S";
      break;
    case 7:
      dday = "S";
      break;

    default:
      console.log("Wrong day format");
      break;
  }
  return dday;
};

export const formatPerformanceData = (performance) => {
  performance.data.forEach((item) => {
    const kindValue = performance.kind[item.kind];
    if (kindValue) {
      item.kind = kindValue;
    }
  });
  return performance;
};
