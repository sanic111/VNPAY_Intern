function ProfileEdit() {
  return (
    // container
    <div className="max-w-screen mx-auto flex min-h-screen flex-col bg-gray-100 p-4">
      {/* header */}
      <div className="flex items-center justify-between rounded bg-gray-300 p-4">
        <img src="https://placehold.co/250x70" className="h-16 w-64" alt="" />
        <div className="inline-flex justify-center gap-2.5 p-2.5">
          <div>home</div>
          <div>gift</div>
          <div>details</div>
          <div>order</div>
        </div>
      </div>
      {/* title */}
      <div className="flex-1 p-44">
        <div className="my-8 text-center text-2xl font-bold">
          Add That Final Touch...(Optional)
        </div>
        {/* descsription */}
        <div className="grid grid-cols-2 gap-2">
          {/* màn nhỏ chia 2 cột, màn trung 3 cột , màn to 4 cột */}
          <div className="">
            <div className="my-4 h-14 rounded-[32px] border border-black bg-white" />
            <div className="my-4 h-14 rounded-[32px] border border-black bg-white" />
            <div className="my-4 h-14 rounded-[32px] border border-black bg-white" />
            <div className="my-4 h-14 rounded-[32px] border border-black bg-white" />
            <div className="my-4 h-14 rounded-[32px] border border-black bg-white" />
          </div>
          <div className="bg-gray-400"></div>
        </div>
        <button className="mx-auto mt-8 block rounded-full bg-black px-8 py-4 text-white transition hover:bg-gray-800">
          Continue
        </button>

        {/* footer */}
        <div className="my-5 h-16 bg-gray-400"></div>
      </div>
    </div>
  );
}
export default ProfileEdit;
