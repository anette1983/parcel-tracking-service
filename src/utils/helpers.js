// export const handleDate = (date) => {
//   return formatDistanceToNow(new Date(date), { addSuffix: true });
// };

// export const handleDateFormat = (date) => {
//   return format(new Date(date), "Pp");
// };

// export const handleDate = (date) => {
//   return intlFormat(new Date(date), {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     locale: uk,
//   });
// };

// export const formatDate = () => {
//   const result = new Intl.DateTimeFormat("uk").format("25-02-2023 12:13:22");
//   return result;
// };

// export const formatDate = () => {
//   const date = new Date("25-02-2023 12:13:22");

//   const formattedDate = new Intl.DateTimeFormat("uk").format(date);
//   return formattedDate;
// };

import moment from "moment";
import "moment/locale/uk"; //

moment.locale("uk");

export const formatDate = (date) => {
  const date1 = moment(date, "DD-MM-YYYY HH:mm:ss");
  const date2 = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  //   const formattedDate = new Intl.DateTimeFormat("uk-UA").format(date1);
  //   const formattedDate = date.format("ddd, D MMM YYYY [р.], HH:mm");
  const formattedDate = date2.toLocaleString("uk-UA", options);
  return formattedDate;
};
