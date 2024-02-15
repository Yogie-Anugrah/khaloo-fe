const dataTnC = [
  {
    title: "Lorem Ipsum Dolor Amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
  {
    title: "Lorem Ipsum Dolor Amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
  {
    title: "Lorem Ipsum Dolor Amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
  {
    title: "Lorem Ipsum Dolor Amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
]


export default function TnCPage() {
  return (
    <main className='flex text-black min-h-screen flex-col gap-5 px-8 py-8 md:px-20 lg:py-10 xl:px-32 xl:py-14 2xl:py-20'>
      <h1 className="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center">Terms & Condition</h1>
      <ol className="flex flex-col mt-8 lg:mt-11 gap-8 lg:gap-9 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        {dataTnC.map((data, index) => {
          return (
            <li key={data.title} className="flex flex-col gap-3 lg:gap-4">
              <h2 className="font-semibold"><span>{index + 1}. </span>{data.title}</h2>
              <p className="leading-7 lg:leading-9 xl:leading-[44px]">{data.desc}</p>
            </li>
          )
        })}
      </ol>
    </main>
  )
}
