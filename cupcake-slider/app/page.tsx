import CupcakeSlider from './components/CupcakeSlider';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-12 px-4">
      <main className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            🧁 Cupcake Collection
          </h1>
          <p className="text-xl text-gray-600">
            Discover our delicious selection of handcrafted cupcakes
          </p>
        </div>
        <CupcakeSlider />
      </main>
    </div>
  );
}
