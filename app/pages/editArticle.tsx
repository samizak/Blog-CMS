export default async function EditArticle() {
  return (
    <main className="flex flex-col w-full h-screen pt-16 pl-8 pr-8 bg-slate-200">
      <h1 className="text-4xl h-50">Editing Article</h1>

      <div className="flex-1 p-4 mt-4 bg-white f">
        <div>
          <div className="flex flex-row gap-1">
            <span className="text-gray-500">Title</span>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            className="block w-full px-4 py-3 text-sm transition-colors border-2 border-gray-200 rounded-md outline-none appearance-none focus:border-blue-500"
          />
        </div>

        <div className="mt-8">
          <div className="flex flex-row gap-1">
            <span className="text-gray-500">Creation Date</span>
            <span className="text-red-500">*</span>
          </div>
          <input
            type="text"
            className="block w-full px-4 py-3 text-sm transition-colors border-2 border-gray-200 rounded-md outline-none appearance-none focus:border-blue-500"
          />
        </div>

        <div className="mt-8">
          <div className="flex flex-row gap-1">
            <span className="text-gray-500">Content</span>
            <span className="text-red-500">*</span>
          </div>
          <textarea className="block w-full px-4 py-3 text-sm transition-colors border-2 border-gray-200 rounded-md outline-none appearance-none focus:border-blue-500 min-h-[100px] max-h-[400px]" />
        </div>

        <div className="flex justify-center w-full mt-8">
          <div className="w-auto px-4 py-2 mr-4 font-bold text-white transition-colors bg-green-600 rounded cursor-pointer hover:bg-green-800 ">
            Save
          </div>
        </div>
      </div>
    </main>
  );
}
