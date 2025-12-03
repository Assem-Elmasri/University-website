import CourseCard from "./CourseCard";
import AddCourseButton from "./AddCourseButton";
import Filters from "./Filters";

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      code: "CS101",
      title: "Introduction to Programming",
      status: "Open",
    },
    {
      id: 2,
      code: "HIST250",
      title: "Modern World History",
      status: "Waitlist",
    },
    { id: 3, code: "MATH150", title: "Calculus I", status: "Open" },
    { id: 4, code: "BIO110", title: "General Biology", status: "Closed" },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-6">
      {
        //TODO add Header for courses page
      }

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* =========== Sidebar filters =========== */}
          <div className="w-full lg:w-72">
            <Filters />
          </div>
          <div className="max-w-7xl mx-auto">
            <header className="mb-6 flex items-center justify-between">
              <h1 className="text-3xl font-bold">Course Catalog</h1>
              <AddCourseButton />
            </header>

            {/* =========== Courses grid ============= */}
            <section className="grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
