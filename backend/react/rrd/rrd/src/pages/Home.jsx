const Home = () => {

  const cardsData = [
    {
      id: 1,
      title: "React JS",
      description: "Learn components, props, state, hooks and build modern websites.",
      category: "Frontend",
      author: "John Peter",
      duration: "3 Months"
    },
    {
      id: 2,
      title: "JavaScript",
      description: "Master JavaScript basics, ES6 features, DOM and practical coding.",
      category: "Programming",
      author: "Sarah James",
      duration: "2 Months"
    },
    {
      id: 3,
      title: "Python",
      description: "Learn Python programming from fundamentals to real-world projects.",
      category: "Backend",
      author: "David Lee",
      duration: "4 Months"
    },
    {
      id: 4,
      title: "SQL Database",
      description: "Learn database concepts, queries, joins and data management.",
      category: "Database",
      author: "Emily Rose",
      duration: "2 Months"
    }
  ]

  return (
    <>

      <div className="min-h-screen bg-gray-100 py-12">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Popular Courses
          </h1>

          <p className="text-gray-500 mt-3">
            Learn new skills and build your career
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 px-8">

          {cardsData.map((e) => (

            <div
              key={e.id}
              className="w-80 bg-white rounded-2xl overflow-hidden shadow-lg"
            >

              <div className="p-6">

                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {e.category}
                </span>

                <h2 className="text-2xl font-bold text-gray-800 mt-4">
                  {e.title}
                </h2>

                <p className="text-gray-500 mt-3 text-sm leading-6">
                  {e.description}
                </p>

                <div className="flex justify-between mt-5 text-sm text-gray-600">
                  <p>{e.author}</p>
                  <p>{e.duration}</p>
                </div>

                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl">
                  View Course
                </button>

              </div>

            </div>

          ))}

        </div>
      </div>
    </>
  )
}

export default Home