import Container from './Container';

const Testimonials = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300" id="reviews">
      <Container>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We have some fans.
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {[
            {
              name: 'Daniella Doe',
              role: 'Mobile dev',
              image: './images/avatars/avatar.webp',
              testimonial:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
            },
            {
              name: 'Jane doe',
              role: 'Marketing',
              image: './images/avatars/avatar-1.webp',
              testimonial:
                'Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
            },
            {
              name: 'Yanick Doe',
              role: 'Developer',
              image: './images/avatars/avatar-2.webp',
              testimonial:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
            },
            {
              name: 'Jane Doe',
              role: 'Mobile dev',
              image: './images/avatars/avatar-3.webp',
              testimonial:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
            },
            {
              name: 'Andy Doe',
              role: 'Manager',
              image: './images/avatars/avatar-4.webp',
              testimonial:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
            },
            {
              name: 'Yanndy Doe',
              role: 'Mobile dev',
              image: './images/avatars/avatar-2.webp',
              testimonial:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.',
            },
          ].map(({ name, role, image, testimonial }, index) => (
            <div
              key={index}
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
            >
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={image}
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">{name}</h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{role}</p>
                </div>
              </div>
              <p className="mt-8">{testimonial}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
