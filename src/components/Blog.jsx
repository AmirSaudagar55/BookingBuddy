import React from "react";

const articles = [
  {
    title: "De fuga fugiat lorem ispum laboriosam expedita.",
    description: "Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...",
    imgSrc: "https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    link: "#",
  },
  {
    title: "De fuga fugiat lorem ispum laboriosam expedita.",
    description: "Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...",
    imgSrc: "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    link: "#",
  },
  {
    title: "De fuga fugiat lorem ispum laboriosam expedita.",
    description: "Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...",
    imgSrc: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=2832&q=80",
    link: "#",
  },
];

const Blog = () => {
  return (
    <div id="blog" className="container mx-auto px-4">
      <div className="mb-12 space-y-2 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
          Latest Articles
        </h2>
        <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
          Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia
          aliquid explicabo? Excepturi, voluptate?
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <div key={index} className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={article.imgSrc}
                alt="art cover"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {article.title}
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                {article.description}
              </p>
              <a className="inline-block" href={article.link}>
                <span className="text-info dark:text-blue-300">Read more</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
