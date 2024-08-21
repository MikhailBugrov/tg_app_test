import { useState } from "react";

export const HomeTest = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ backgroundColor: "Cornsilk" }}>
      <div>Тест div</div>
      <button style={{ width: "100%" }} onClick={() => setOpen(!open)}>
        Click
      </button>

      {open && (
        <div style={{ color: "green" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      )}
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "Green",
            margin: "20px",
            height: "200px",
            width: "100%",
          }}
        >
          карточка1
        </div>
        <div
          style={{
            backgroundColor: "Green",
            margin: "20px",
            height: "200px",
            width: "100%",
          }}
        >
          карточка2
        </div>
      </div>
    </div>
  );
};

export default HomeTest;
