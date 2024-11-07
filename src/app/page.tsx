import Link from "next/link";
import { db } from "../server/db/index";

const mockUrls = [
  "https://utfs.io/f/WbAUdlKvXWLdgjoL889WA76T45MYbJvdW9fgQHwXkRFUzDEO",
  "https://utfs.io/f/WbAUdlKvXWLdNIbcLi9SqiEIG3CJ1AeZYaK95U27LOTugzbr",
  "https://utfs.io/f/WbAUdlKvXWLdpaiehWdtI5BGdPJCeKUyWorLQ1ZObYqnfDlk",
  "https://utfs.io/f/WbAUdlKvXWLdhCFvtxNx4LysH2wGPYVc1Iz5CT7drqEpnB9W",
  "https://utfs.io/f/WbAUdlKvXWLdF8AKeWhELvSCnIOiJgXj4wWmfPxFebqscBG8",
  "https://utfs.io/f/WbAUdlKvXWLdPG6UdVBRyQVf4g3BMb1lK9xYFqRAjnS62iNZ",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
