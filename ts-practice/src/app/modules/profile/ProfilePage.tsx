function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between bg-gray-200 px-24 py-5">
        <div className="text-lg font-bold">Logo</div>
        <nav className="mx-12 hidden gap-2.5 sm:flex">
          <a href="#">home</a>
          <a href="#">home</a>
          <a href="#">home</a>
          <a href="#">home</a>
        </nav>
        <div className="justify-start text-center font-['DM_Sans'] text-base font-normal leading-none text-neutral-500">
          Search for...
        </div>
      </header>

      <main className="mx-auto w-1/2 flex-1 p-4">
        <div className="border-back grid grid-cols-2 border-4 p-4">
          <div className="flex justify-end bg-gray-100 pr-4">
            <img
              className="border-5 h-40 w-40 rounded-full border border-black"
              src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/497680776_1092841046216827_1908466393147082324_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=voVfyAith5gQ7kNvwEYK6K6&_nc_oc=Adm3XYVgJFLwD0QuUbHgTXmnjICt5yImOJbbEwC6FNGka4dPKC_s-YkVsG1opxWaAeo&_nc_zt=23&_nc_ht=scontent.fhan4-1.fna&_nc_gid=wnvyVnKTHyoaTa5KDac8lQ&oh=00_AfKhoS4Uq8Odxb7m25dRt7FpcQmKfLa8qTISuCSskhFZDA&oe=683387E9"
              alt=""
            />
          </div>
          <div className="space-y-3 bg-gray-100 leading-relaxed">
            <h1 className="text-5xl font-bold">David Grant</h1>
            <p>3D Artist</p>
            <p>4.7 Rating</p>
            <p>4.447 Reviews</p>
            <p>478 Students</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              omnis minus repudiandae cupiditate quia qui, magni maiores
              eligendi rem sed nostrum reiciendis officia suscipit, voluptatibus
              minima laboriosam iusto alias ad!
            </p>
            <p>Show more</p>
          </div>
        </div>
      </main>

      <footer className="flex h-16 items-center justify-center bg-gray-300 text-center"></footer>
    </div>
  );
}
export default ProfilePage;
