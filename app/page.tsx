import { Heart , Medal , Globe2 , Users2 } from "lucide-react";
import Header from "../components/Header";

export default function Home() {



  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
            <Header />
            <main>
              <section className="py-10">
                <div className="@container">
                  <div className="@[480px]:p-4">
                    <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwsy7-zKwz3osQnGKDuVMW5KV6dar4BSGpj06Wq294qMvoLYd9ecHr5hAOfivzgqAKtcg3NB4jrGIvnGHYSv1AFUznWhpyYr8CpzIfCc6PMZw8_M_gc5lSi1zsKgiTEt6Q9d7O2XzlIgzLVJvysJgz6NZEaI-QNXX9sP0PnQy-OnnpPuz-sQOEg0H0Zn3I4AMKKl2HG8zS9z591ZFSl41HnGPYlsaMfMuG1ZKsMmLgxwihiGhgoy3cxLlZAeV-TUQylxYwfZGmo9I")'}}>
                      <div className="flex flex-col gap-2">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">Innovate Your Future</h1>
                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-xl">Discover a place where excellence in education and groundbreaking research create leaders for tomorrow.</h2>
                      </div>
                      <div className="flex-wrap gap-3 flex justify-center">
                        <button className="flex min-w-[84px] bg-[#4cadc0] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-[#102023] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:opacity-90">
                          <span className="truncate">Explore Programs</span>
                        </button>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-background-dark/70 dark:bg-[#224249]/80 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] border border-white/20 hover:bg-[#4cadc0]">
                          <span className="truncate">Schedule a Visit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="py-10">
  <div className="flex flex-col gap-10 px-4 @container">
    <div className="flex flex-col gap-4 text-center items-center">
      <h2 className="text-gray-900 dark:text-white tracking-light text-[32px] font-bold leading-tight">
        Why Choose Our University?
      </h2>
      <p className="text-gray-600 dark:text-[#90c1cb] text-base font-normal leading-normal max-w-[720px]">
        We are committed to providing a transformative educational experience that prepares students for success in a global society.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-[#315f68] bg-white dark:bg-[#182f34] p-4 flex-col">
        <div className="text-primary">
          <Medal />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Quality Education</h3>
          <p className="text-gray-500 dark:text-[#90c1cb] text-sm font-normal leading-normal">
            Explore over 100+ degree programs led by world-class faculty.
          </p>
        </div>
      </div>

      <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-[#315f68] bg-white dark:bg-[#182f34] p-4 flex-col">
        <div className="text-primary">
          <Users2 />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Vibrant Campus Life</h3>
          <p className="text-gray-500 dark:text-[#90c1cb] text-sm font-normal leading-normal">
            Join a diverse and dynamic community with hundreds of clubs and activities.
          </p>
        </div>
      </div>

      <div className="flex flex-1 gap-3 rounded-xl border border-gray-200 dark:border-[#315f68] bg-white dark:bg-[#182f34] p-4 flex-col">
        <div className="text-primary">
          <Globe2 />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Global Research</h3>
          <p className="text-gray-500 dark:text-[#90c1cb] text-sm font-normal leading-normal">
            Engage in cutting-edge research that makes a real-world impact.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

              <section className="py-10">
                <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">News &amp; Events</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-4">
                  <div className="flex flex-col gap-3 pb-3 group">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASuJD7OUvr_GFQ1vbiLv9A9nEdPrwkk0QyC9OgRUqm5mKivgbwF0Kn7S1g17niErx0ZdG2-Kc3BK99IsDTBAz7zN6_6Y5PPqGyyZP34e3dW7EixbkYCJWlOqKl9G2NCuqzUnwEXUFTdb0U9RTA_wj2tp62yR8djb7SRqA1b2LuGEqC6FjmPgnHQpTpKdM6wFNW4a2DoyvtVzcXGDWI6WhC-S0uW1Jgpj6UB_Clrc86tOWeUlJIHr7h9UzpT7DbDLEHPyrYosPj2Jc")'}}></div>
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Engineering Team Wins National Robotics Competition</p>
                      <p className="text-gray-500 dark:text-[#90c1cb] text-sm font-normal leading-normal">Read about their innovative design and journey to the top.</p>
                      <a className="text-primary text-sm font-medium leading-normal mt-1 inline-block" href="#">Read More</a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pb-3 group">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsINP6RDv2183IW6BXb9sCqt22_273i-6c1JILbx7b_gbvM5b3w9_vz_JLsD5WO4PhhVGuO3jNAUonMZKdkeCwSnUoDqgFEpxuKuwg7gHKUeKfbmcxmSOzsNEgsninEIqMW48P5Z2qnsj21hCKEkzkE13t6PaIfnkzFq5gSXUO5vvM3-m32_jkUlaxSEwegI7acq7QZQnNg-V_OvXMAknPDaH6IlfkAhvE6YYsVvTcxSbTNRRbFrulJtpUXfaBmkUW2rApmfJNJyg")'}}></div>
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Upcoming Event: Annual Arts &amp; Culture Festival</p>
                      <p className="text-gray-500 dark:text-[#90c1cb] text-sm font-normal leading-normal">Join us for a week of music, art, and performances from around the world.</p>
                      <a className="text-primary text-sm font-medium leading-normal mt-1 inline-block" href="#">Learn More</a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pb-3 group">
                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOSwn4EvOYctcdnjbRwnatVp5EocxvYx-GNFT1b051Trglm05TPkY9_B2azFz7IXi71p1JLSbgeBbHkQziJ54f2-86rAZvsX8cHp1nCw65n2aG085mrF6WoZDf4cTlGRCMSrYaGF3tKT9v0q8Jg0KfFZchQmp1y8MweGMIV6Nm5j4w2n-MrkLpe6IlMEnOqlDFHswTYTd68zbsJFRKBm49E_wO6XguAscWCijk9B2kSf319KeIhz6n7P6qcFYR6LbYw9Q0YTLMzFY")'}}></div>
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white text-base font-medium leading-normal">Alumni Spotlight: A Journey to Silicon Valley</p>
                      <p className="text-gray-500 dark:text-[#90c1cb] text-sm font-normal leading-normal">Learn how our graduate is making waves in the tech industry.</p>
                      <a className="text-primary text-sm font-medium leading-normal mt-1 inline-block" href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <footer className="mt-20 border-t border-gray-200 dark:border-[#224249] pt-10 pb-8 px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                  <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">University</h2>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-[#90c1cb]">Fostering innovation and knowledge for a better future.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-gray-900 dark:text-white">Quick Links</h4>
                  <a className="text-sm text-gray-500 dark:text-[#90c1cb] hover:text-primary" href="#">About Us</a>
                  <a className="text-sm text-gray-500 dark:text-[#90c1cb] hover:text-primary" href="#">Contact Us</a>
                  <a className="text-sm text-gray-500 dark:text-[#90c1cb] hover:text-primary" href="#">Careers</a>
                  <a className="text-sm text-gray-500 dark:text-[#90c1cb] hover:text-primary" href="#">Directory</a>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-gray-900 dark:text-white">Resources</h4>
                  <a className="text-sm text-gray-500 dark:text-[#90c1cb] hover:text-primary" href="#">Library</a>
                  <a className="text-sm text-gray-500 dark:text-[#90c1cb] hover:text-primary" href="#">For Students</a>
                  <a className="text-sm text-gray-500 dark:text-[#90c1cb] hover:text-primary" href="#">For Faculty</a>
                  <a className="text-sm text-gray-500 dark:text-[#90c1cb] hover:text-primary" href="#">Alumni</a>
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="font-bold text-gray-900 dark:text-white">Contact</h4>
                  <p className="text-sm text-gray-500 dark:text-[#90c1cb]">123 University Ave,<br/>Innovation City, 10101 (3nwan :)  </p>
                  <p className="text-sm text-gray-500 dark:text-[#90c1cb]">(123) 456-7890</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-[#224249] flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500 dark:text-[#90c1cb]">© 2025 University. All Rights Reserved to Assem , shout out to all team members <Heart size={12} className="text-red-500 inline " /> </p>
                
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}