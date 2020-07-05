import location from "../store/location";
import '../'
import  '../css/style.css'
location.init().then((res) => {
  console.log("res!", res);
  console.log(
    ' location.getCitiesByCountryCode("PE");',
    location.getCitiesByCountryCode("PE")
  );
});
