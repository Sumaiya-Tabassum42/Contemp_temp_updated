import { useEffect, useState } from "react";
import Contemporary from "../templates/Contemporary";
import { downloadCard } from "../utils/downloadCard";


export default function Preview({ state }) {

  const [scale, setScale] = useState(0.62);


  useEffect(() => {

    function updateScale() {

      const availableWidth =
        window.innerWidth - 400;


      const cardWidth = 1080; // your template width

      const newScale =
        Math.min(
          availableWidth / cardWidth,
          0.62
        );


      setScale(
        Math.max(newScale, 0.25)
      );

    }


    updateScale();

    window.addEventListener(
      "resize",
      updateScale
    );


    return () =>
      window.removeEventListener(
        "resize",
        updateScale
      );


  }, []);



  return (

<div className="preview">

  <div
    id="export-card"
    className="preview-frame"
  >

    <Contemporary
      state={state}
    />

  </div>


<button
  className="download-btn"
  onClick={() =>
    downloadCard("export-card")
  }
>
  ⬇ Download PNG
</button>




    </div>

  );

}