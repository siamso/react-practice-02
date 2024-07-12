import { createContext, useState, useEffect } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

function FeatureFlagGlobalContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  const fetchFeatureFlag = async () => {
    try {
      setLoading(true);
      const response = await featureFlagDataServiceCall();
      if (response) {
        setEnableFlags(response);
        setLoading(false);
      }
    } catch (e) {
      console.log(e.message);
      setLoading(false);
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchFeatureFlag();
  }, []);

  return (
    <FeatureFlagContext.Provider value={{ loading, enableFlags }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export default FeatureFlagGlobalContext;
