import axios from "axios";
import React, { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";

import { UserContext } from "./Home";

function test() {
  const [count, setCount] = useState({ firstName: "" });

  return (
    <div>
      <form>
        <input type="text" value={count.firstName} />
      </form>
    </div>
  );
}

export default test;
