import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Navbar = () => {
  const user = undefined;
  const isAdmin = false;

 return <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
    <MaxWidthWrapper>
      <div className="flex h-4 items-center justify-between border-b border-zinc-200">
        <Link className="flex z-40 font-semibold" href="/">
          case<span className="text-green-600">cobra</span>
        </Link>

        <div className="h-full flex items-center space-x-4">
          {user ? (
            <>
              <Link className={buttonVariants({
                size: 'sm',
                variant: 'ghost'
              })} href="/api/auth/logout">
                Sign out
              </Link>

              {isAdmin ? (<Link className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost'
                })} href="/api/auth/logout">
                  Dashboard ✨
                </Link>) : null}

                <Link className={buttonVariants({
                  size: 'sm',
                  className: "hidden sm:flex items-center gap-1",
                })} href="/configure/upload">
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
            </>
          ) : (
            <>
              <Link className={buttonVariants({
                size: 'sm',
                variant: 'ghost'
              })} href="/api/auth/register">
                Sign up
              </Link>

              <Link className={buttonVariants({
                size: 'sm',
                variant: 'ghost'
              })} href="/api/auth/login">
                Login
                <ArrowRight className="ml-1.5 h-5 w-5" />
              </Link>
            </>
          )}
        </div>
      </div>
    </MaxWidthWrapper>
  </nav>
}

export default Navbar;