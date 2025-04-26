import Learnlist from "../components/learnlist";
function LearnPage() {
  return (
    <div>
      <section style={{
        backgroundImage: `url('https://cdn.salaamgateway.com/posts/e49335a24e2955b4a9a7a4ef7f26a10a85b3d384.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className="bg-cover bg-center text-white text-center py-32">
        <div className="bg-black bg-opacity-60 p-10 rounded-md inline-block">
          <h2 className="text-5xl font-bold mb-4">
            Master the Art of Calligraphy
          </h2>
          <p className="text-xl mb-6">
            Online calligraphy courses for beginners and advanced learners.
          </p>
          <a
            href="#courses"
            class="text-WHITE px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Explore Courses
          </a>
        </div>
      </section>
      <section id="courses" className="max-w-6xl mx-auto py-20 px-4">
        <h3 className="text-4xl font-bold text-center mb-12">Our Courses</h3>
        <Learnlist></Learnlist>
      </section>
    </div>
  );
}
export default LearnPage;
