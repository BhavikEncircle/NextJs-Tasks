export default function Home() {
  return (
    <div>
      <div className="h-180 w-3/4 px-20 mt-10 mx-auto flex flex-col justify-center">
        <h1 className="text-3xl font-bold">Home page</h1>
        <br></br>
        <p className="text-xl">
          In this project we have learned about Introduction to Next.js & App
          Router (Basics).
        </p>
        <br></br>
        <h2 className="font-bold text-3xl">
          Topics we covered in this project :{" "}
        </h2>
        <br></br>
        <ul className="text-xl flex flex-col gap-1">
          <li>What is Next.js? Why use it over CRA/Vite?</li>
          <li>
            Understanding React Server Components (RSC) vs Client Components
          </li>
          <li>Folder structure in app/ directory</li>
          <li>Pages, Layouts, and Nested Layouts</li>
          <li>Global metadata & SEO basics</li>
          <li>Link vs traditional navigation</li>
        </ul>
      </div>
    </div>
  );
}
