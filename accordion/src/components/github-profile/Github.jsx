import React, { useEffect, useState } from "react";
import User from "./User";

function Github() {
  const [userName, setUserName] = useState("siamso");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState(null);

  const fetchGithubData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      console.log(data);

      if (data) {
        setIsLoading(false);
        setUserData(data);
      }
    } catch (e) {
      setIsLoading(false);
      setErrMessage(e.message);
    }
  };
  const handleSubmit = () => {
    fetchGithubData();
    setUserName("");
  };
  useEffect(() => {
    fetchGithubData();
  }, []);

  if (isLoading) {
    return <p>Loading ! please wait</p>;
  }

  if (errMessage) {
    return <p>{errMessage}</p>;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <User users={userData} />
      </div>
    </div>
  );
}

export default Github;
