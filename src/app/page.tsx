import Image from "next/image";
import { Button } from "./_components/button";

export default function Home() {
  return (
    <>
      <section className="bg-hero-pattern bg-no-repeat bg-center mt-5 xl:mt-20 xl:bg-left">
        <div className="items-center flex flex-col-reverse xl:flex-row container">
          <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right ">
            <h3 className="text-xl dark:text-info xl:text-2xl">خوش اومدی به</h3>
            <h1 className="text-3xl font-black gradient lg:text-3xl xl:text-5xl">
              مسیر صعود به قله های برنامه نویسی
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              quam iure molestias rem aspernatur ut!
            </p>
            <div className="mt-5 flex gap-4">
              <Button variant="primary" size="large">
                دوره های ری اکت و نکست
              </Button>
              <Button variant="neutral" size="large">
                مشاوره برنامه نویسی
              </Button>
            </div>
            <Image
              src="/images/frameworks.png"
              className="mt-4 opacity-70 grayscale m-auto xl:m-0"
              width={412}
              height={39}
              alt=""
            />
          </div>
          <Image
            src="/images/programmer-landing.svg"
            alt="classbon"
            width={702}
            height={521}
          />
        </div>
      </section>
    </>
  );
}
