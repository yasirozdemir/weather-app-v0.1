import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useSelector, useDispatch } from "react-redux";

const CountrySelector = () => {
  const dispatch = useDispatch();

  const country = useSelector((state) => state.location.country);
  const city = useSelector((state) => state.location.city);

  return (
    <div>
      <CountryDropdown
        value={country}
        onChange={(val) =>
          dispatch({
            type: "SET_COUNTRY",
            payload: val,
          })
        }
      />
      <RegionDropdown
        country={city}
        value={city}
        onChange={(val) =>
          dispatch({
            type: "SET_CITY",
            payload: val,
          })
        }
      />
    </div>
  );
};

export default CountrySelector;
