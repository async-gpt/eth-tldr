import HeaderLayout from "@/layouts/HeaderLayout";

export default function Home() {
  return (
    <HeaderLayout title="Homepage">
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 mb-8 w-full">
        <div className="max-w-3xl">
          <div className="text-center space-y-8 py-20 md:py-36">
            <h1 className="font-semibold text-2xl sm:text-4xl md:text-6xl leading-110%">
              Home Page <br />
            </h1>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}
