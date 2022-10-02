import { ButtonV2 } from "@meshkorea/vroong-design-system-web";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import { useCore } from "core";

const HomePage = () => {
  const core = useCore();

  const handleAlertOpen = useCallback(() => {
    core.dialog.openAlert({
      title: "Alert!",
      message: "Alert은 이렇게 나옵니다.",
    });
  }, [core.dialog]);

  const handleSpinnerOpen = useCallback(() => {
    core.dialog.openSpinner();
    setTimeout(() => {
      core.dialog.closeSpinner();
    }, 3000);
  }, [core.dialog]);

  return (
    <div>
      <div>
        <h1>Home</h1>
        <ButtonV2 onClick={handleAlertOpen}>Open alert</ButtonV2>
        <ButtonV2 onClick={handleSpinnerOpen}>Open spinner</ButtonV2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
