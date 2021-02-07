import { useCallback, useEffect, useState } from "react";
import "./blinking-cursor.scss";

const BlinkingCursor = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const toggleVisible = useCallback(() => setVisible((prev) => !prev), []);
  useEffect(() => {
    let reference = window.setInterval(toggleVisible, 600);
    return () => window.clearInterval(reference);
  });
  return (
    <span className={`blinking-cursor ${visible ? "" : "hidden"}`}>_</span>
  );
};

export default BlinkingCursor;
