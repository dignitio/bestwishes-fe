import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "routes/path";
import React, { useState } from "react";
import CustomInput from "components/CustomFormInputs/CustomInput";
import { Formik } from "formik";
import user from "assets/icons/edit-profile.svg";
import exportIcon from "assets/icons/Export.svg";
import Profile from "pages/Profile";

function Settings() {
  
  return (
    <div>
      <Profile/>
    </div>
  );
}

export default Settings;
