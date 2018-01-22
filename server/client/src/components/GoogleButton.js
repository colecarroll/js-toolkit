import React from "react";

const GoogleButton = () => {
  return (
    <div className="button-google">
      <a href="/auth/google">
        <button type="button" class="button-google btn btn-info btn-lg">
          Sign in with Google
        </button>
      </a>
    </div>
  );
};

export default GoogleButton;
