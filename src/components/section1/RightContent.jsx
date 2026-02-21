import React from "react";
import Card from "./Card";

const datas = [
  {
    id: 1,
    photoName:
      "https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    btnText: "Satisfied",
  },
  {
    id: 2,
    photoName:
      "https://images.unsplash.com/photo-1702726001096-096efcf640b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMGRhcmtpc2h8ZW58MHx8MHx8fDA%3D",
    btnText: "Darkness",
  },
  {
    id: 3,
    photoName:
      "https://images.unsplash.com/photo-1758405155772-ef0f0077375c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMGRhcmtpc2h8ZW58MHx8MHx8fDA%3D",
    btnText: "alone",
  },
];

function RightContent() {
  return (
    <div className="h-full w-[75%] flex gap-2.5">
      {datas.map((data, index) => {
        return (
          <Card
            photoName={data.photoName}
            id={data.id}
            btnText={data.btnText}
          />
        );
      })}
    </div>
  );
}

export default RightContent;
