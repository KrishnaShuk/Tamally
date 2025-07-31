import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          From a simple prompt to a flawless template.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/payments.png"
                className="hidden rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1207}
                height={929}
              />
              <Image
                src="/payments-light.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="payments illustration light"
                width={1207}
                height={929}
              />
            </div>
          </div>

          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Your Vision,{" "}
              <span className="text-accent-foreground font-bold">
                Instantly Realized 
              </span>{" "}
            </p>
            <p className="text-muted-foreground">
              You have the vision for the perfect email campaign, but turning that idea into responsive, compatible HTML is often a barrier. Tamally bridges that gap. 
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Our AI acts as your creative partner, interpreting your natural language prompts to produce pixel-perfect templates. Whether you're starting from scratch or modifying existing code, the result is always a polished, professional design. This frees you to focus on what truly matters: your message and your audience.
                </p>

                
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
