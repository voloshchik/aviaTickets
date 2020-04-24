import location from "../store/location";

location.init().then((res) => {
  console.log("res", res);
  console.log(
    ' location.getCitiesByCountryCode("PE");',
    location.getCitiesByCountryCode("PE")
  );
});
