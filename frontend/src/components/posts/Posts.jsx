import Post from "../Post";

function Posts() {
  const posts = [
    {
      id: 1,
      name: "Nancy",
      userId: 1,
      profilePic:
        "https://tnhrce.org/wp-content/uploads/2022/09/nancy_jewel_mcdonie_1_17_09_2022.jpg",
      desc: "lorem ipsum dolor sit amet cnsectetur adispisicing edit",
      img: "https://bharatflux.com/wp-content/uploads/2020/04/IMG-20200404-WA0003.jpg",
    },
    {
      id: 2,
      name: "Nancy",
      userId: 1,
      profilePic:
        "https://tnhrce.org/wp-content/uploads/2022/09/nancy_jewel_mcdonie_1_17_09_2022.jpg",
      desc: "lorem ipsum dolor sit amet cnsectetur adispisicing edit",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABwysdnMRsfbH919Z_8kFJ4GgRlX69le2qmEHXf62sPfcJ8wavmA9OfW3sX5MCzEI2RM&usqp=CAU",
    },
  ];
  return (
    <div className="posts flex flex-col gap-14 mt-4">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

export default Posts;
