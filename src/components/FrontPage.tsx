export default function FrontPage({ logo }: { logo: any }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-6 bg-blue-200 text-black min-h-[70vh] dark:bg-blue-900">
      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img
          src={logo}
          className="h-36 w-36 rounded-full border-4 border-teal-600"
          alt="A image of Xander"
        />
        <div>
          <div className="text-xl font-medium text-black dark:text-gray-500">
            Xander Kortekaas's Portfolio
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            dit is gewoon een place holder image
          </p>
        </div>
      </div>
    </section>
  );
}
