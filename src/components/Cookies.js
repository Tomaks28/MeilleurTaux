import Cookies from "js-cookie";

const AppCookies = (name, type) => {
  type = type.toLowerCase();
  const cookie = Cookies.get(name);
  //Check if cookie exist
  if (cookie) {
    //Check if need to parse data before returning
    if (type === "objet") return JSON.parse(cookie);
    else {
      return cookie;
    }
  }
  //If not exists
  else {
    if (type === "number") {
      Cookies.set(name, "0");
      return 0;
    } else if (type === "objet") {
      Cookies.set(name, JSON.stringify({}));
      return {};
    } else {
      Cookies.set(name, "");
      return "";
    }
  }
};
export default AppCookies;
