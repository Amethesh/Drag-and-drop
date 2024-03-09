
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-screen">
      <div className="flex place-items-center before:absolute before:h-[800px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[300px] after:w-full sm:after:w-[300px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        
        <h1 className="text-2xl font-bold pb-6">
          Drag and Drop test
          </h1>
      </div>
    <section className="flex flex-col items-center w-[400px] h-[500px] border rounded-lg p-2">
      <div className="w-full m-2 h-max text-center backdrop-blur-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-emerald-600 ">Shopping List</h1>
      </div>
      <span className="border border-white/20 w-full mb-8"></span>
      <div className="bg-white/25 w-full mb-4 p-2 h-max text-center backdrop-blur-lg rounded-lg">
        <h1 className="text-xl font-light text-white">Cold coffee</h1>
      </div>
      <div className="bg-white/25 w-full mb-4 p-2 h-max text-center backdrop-blur-lg rounded-lg">
        <h1 className="text-xl font-light text-white">Paper Boat</h1>
      </div>
      <div className="bg-white/25 w-full mb-4 p-2 h-max text-center backdrop-blur-lg rounded-lg">
        <h1 className="text-xl font-light text-white">Bathing Soap</h1>
      </div>
      <div className="bg-white/25 w-full mb-4 p-2 h-max text-center backdrop-blur-lg rounded-lg">
        <h1 className="text-xl font-light text-white">Paste</h1>
      </div>
    </section>


        
    </main>
  );
}
