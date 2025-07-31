import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Import the Input component

export default function CallToAction() {
  return (
    <section className="py-64 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            The Future of Email is Coming.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Be the first to get access. We'll notify you the moment Tamally
            launches and send you an exclusive offer.
          </p>

          {/* This div is replaced with a single, focused form */}
          <div className="mt-12 flex justify-center">
            <form
              // You can connect this to a service like Mailchimp or a serverless function
              action=""
              className="flex w-full max-w-md items-center space-x-2"
            >
              <Input
                className="h-12 flex-1 text-base"
                type="email"
                placeholder="your.email@example.com"
                required
              />
              <Button type="submit" size="lg">
                <span>Request Early Access</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}