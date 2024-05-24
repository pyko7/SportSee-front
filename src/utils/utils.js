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

const translateKindValue = (value) => {
  let translatedKindValue = value;
  switch (value) {
    case "energy":
      translatedKindValue = "energie";
      break;
    case "strength":
      translatedKindValue = "force";
      break;
    case "speed":
      translatedKindValue = "vitesse";
      break;
    case "intensity":
      translatedKindValue = "intensité";
      break;

    default:
      translatedKindValue = value;
      break;
  }
  return translatedKindValue;
};

export const formatPerformanceData = (performance) => {
  performance.data.forEach((item) => {
    const kindValue = performance.kind[item.kind];
    if (kindValue) {
      item.kind = translateKindValue(kindValue);
    }
  });

  return performance;
};
