import React from "react";

const Context = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return <div>User Context {user}</div>;
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default Context;
