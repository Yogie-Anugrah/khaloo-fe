import Input from "@/app/(auth)/text-field";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPartnerPage() {
  return (
    <main className="min-h-screen bg-white flex text-black font-poppins text-base xl:text-lg font-medium">
      <div className="flex flex-col w-[3/5] flex-1 justify-center h-auto gap-14 px-8 sm:px-12 md:px-14 xl:gap-16 xl:px-20">
        {/* Title */}
        <h1 className="max-md:text-center text-5xl xl:text-7xl font-extrabold">
          Sign Up
        </h1>

        <form className="flex flex-col gap-7">
          {/* email */}
          <Input placeholder="Email / No.Hp" type="text" variant="username" />
          {/* Partner Category */}
          <Input type="text" placeholder="Partner Category" />
          <div className="flex flex-col gap-2 pl-4">
            <div className="flex gap-2 lg:gap-4 items-center">
              <input
                type="radio"
                id="businesss"
                name="category"
                value="businesss"
                className="border-[1px] border-[#323232] accent-[#898989] w-4 lg:w-7 aspect-square"
              />
              <label htmlFor="businesss">Business Partner</label>
            </div>
            <div className="flex gap-2 lg:gap-4 items-center">
              <input
                type="radio"
                id="reseller"
                name="category"
                value="reseller"
                className="border-[1px] border-[#323232] accent-[#898989] w-4 lg:w-7 aspect-square"
              />
              <label htmlFor="reseller">Reseller</label>
            </div>
            <div className="flex gap-2 lg:gap-4 items-center">
              <input
                type="radio"
                id="businesss"
                name="category"
                value="businesss"
                className="border-[1px] border-[#323232] accent-[#898989] w-4 lg:w-7 aspect-square"
              />
              <label htmlFor="businesss">Affiliate</label>
            </div>
          </div>
          <Input type="text" placeholder="XXXXXXXXXX" />
          <Input type="text" placeholder="XXXXXXXXXX" />
          {/* Password */}
          <Input type="password" placeholder="Password" />
          {/* Confirm Pass */}
          <Input type="password" placeholder="Confirm Password" />
          <button className="w-full font-bold rounded-lg bg-[#B2B2B2] text-white px-4 py-3 xl:px-4 xl:py-[18px]">
            Submit
          </button>
        </form>
        <p className="mx-auto h-fit">
          Already have an account?{" "}
          <span className="text-[#888]">
            <Link
              href="/partner/login"
              className="hover:underline hover:underline-offset-4"
            >
              Login
            </Link>
          </span>
        </p>
      </div>
      <Image
        className="max-md:hidden md:w-[40vw] h-auto object-cover object-center grayscale-[85%]"
        src="/assets/images/login.jpeg"
        alt="Login Image"
        width={790}
        height={1080}
      />
    </main>
  );
}
