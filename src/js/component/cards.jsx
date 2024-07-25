import React from "react";

const Cards = () => {
  const cardData = [
  { 
    title: "Card title", 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "https://picsum.photos/id/1018/500/325"
  },
  { 
    title: "Card title", 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "https://picsum.photos/id/1015/500/325"
  },
  { 
    title: "Card title", 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "https://picsum.photos/id/1019/500/325"
  },
  { 
    title: "Card title", 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "https://picsum.photos/id/1016/500/325"
  }
];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div key={index} className="col-md-3 mb-4">
          <div className="card">
          <img src={card.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;