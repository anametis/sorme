import SpacialOffer from "@/components/SpacialOffer";
import Header from "@/components/Header";
import SearchBar from "@/components/ui/searchbar";


export default function NotFound() {
  return (
    <>
      <SpacialOffer />
      <Header />
      <div
        className="bg-cover bg-center h-screen w-full relative flex justify-center"
        style={{ backgroundImage: "url('/images/404pic.png')" }}
      >
        <div className="mt-10 flex flex-col items-center gap-8">
          <h2 className="text-gray-100 font-bold text-9xl">404</h2>
          <h3 className="text-gray-100 font-semibold text-6xl">page not found</h3>
          <SearchBar placeholder="Search for products" className="scale-150" />
        </div>
      </div>
    </>
  );
}
