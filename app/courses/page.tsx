import CourseCard from "./CourseCard";
import AddCourseButton from "./AddCourseButton";
import Filters from "./Filters";
import RegHeader from "../../components/RegHeader";
export default function CoursesPage() {
  const courses = [
    {id: 1, code: "CS101", title: "Introduction to Programming", status: "Open", time: "Mon & Wed 10:00 - 11:30",doctor: "Dr. Smith"},
    {id: 2, code: "HIST250", title: "Modern World History", status: "Waitlist", time: "Tue & Thu 14:00 - 15:30", doctor: "Dr. Johnson"},
    { id: 3, code: "MATH150", title: "Calculus I", status: "Open", time: "Mon & Wed 09:00 - 10:30", doctor: "Dr. Lee" },
    { id: 4, code: "BIO110", title: "General Biology", status: "Closed", time: "Tue & Thu 11:00 - 12:30", doctor: "Dr. Kim" },
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-6">
      {
        //TODO add Header for courses page
      }
      <RegHeader />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* =========== Sidebar filters =========== */}
          <div className="w-full lg:w-72">
            <Filters />
          </div>
          <div className="max-w-7xl mx-auto">
            <header className="mb-6 flex sm:flex-row items-start sm:items-center justify-between gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Course Catalog
              </h1>
              <div className="flex items-center gap-3 shrink-0">
                <AddCourseButton />
              </div>
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
