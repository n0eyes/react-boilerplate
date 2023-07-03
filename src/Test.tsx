import React, { useState } from "react";

const Test = () => {
  const [first, setfirst] = useState(0);
  return (
    <div>
      {first}
      <button onClick={() => setfirst((p) => p + 1)}>+</button>
    </div>
  );
};

export default Test;
