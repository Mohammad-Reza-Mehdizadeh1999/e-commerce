import { useState } from "react";
import UserShoppingStep1 from "../components/UserShoppingStep1";
import UserShoppingStep2 from "../components/UserShoppingStep2";
import { useCartContext } from "../context/useCartContext";
const UserShoppingProgress = () => {
  const [step, setStep] = useState(1);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");

  const handleAddressChange = (e) => {
    const newvalue = e.target.value;
    setAddress(newvalue);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handlePostcodeChange = (e) => {
    setPostcode(e.target.value);
  };
  
  return (
    <>
      {step === 1 && (
        <UserShoppingStep1
          handleAddressChange={handleAddressChange}
          handleCityChange={handleCityChange}
          handleCountryChange={handleCountryChange}
          handlePostcodeChange={handlePostcodeChange}
          step={step}
          setStep={setStep}
          address={address}
          city={city}
          country={country}
          postcode={postcode}
        />
      )}
      {step === 2 && <UserShoppingStep2 address={address} city={city} country={country} postcode={postcode} />}
    </>
  );
};
export default UserShoppingProgress;
