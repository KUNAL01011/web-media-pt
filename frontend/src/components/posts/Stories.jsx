function Stories() {
  const stories = [
    {
      id: 1,
      name: "kim",
      img: "https://www.hindustantimes.com/ht-img/img/2023/07/15/550x309/jennie_1689410686831_1689410687014.jpg",
    },
    {
      id: 2,
      name: "nancy",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABwysdnMRsfbH919Z_8kFJ4GgRlX69le2qmEHXf62sPfcJ8wavmA9OfW3sX5MCzEI2RM&usqp=CAU",
    },
    {
      id: 3,
      name: "lisa",
      img: "https://i.pinimg.com/originals/8d/c1/fe/8dc1feec78f6334efd9831b78654fad7.jpg",
    },
    {
      id: 4,
      name: "jennie",
      img: "https://i.zoomtventertainment.com/story/Jennie_8.png",
    },
  ];
  return (
    <div className="stories flex gap-3 h-[250px] mb-[30px] ">
      <div className="story flex-1 rounded-[10px] overflow-hidden relative">
        <img className="w-full h-full object-cover" src="https://www.hindustantimes.com/ht-img/img/2023/07/15/550x309/jennie_1689410686831_1689410687014.jpg" alt="" />
        <span className="absolute bottom-3 left-3 text-white font-[500]">Kunal Kumar</span>
        <button className="absolute bottom-10 left-4 text-white bg-[#5272ff] border-none rounded-full w-[30px] h-[30px] cursor-pointer text-[30px] flex items-center justify-center">+</button>
      </div>
      {stories.map((story,index) => (
        <div className="story flex-1 rounded-[10px] overflow-hidden relative" key={index}>
          <img className="w-full h-full object-cover" src={story.img} alt="" />
          <span className="absolute bottom-3 left-3 text-white font-[500]">{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
