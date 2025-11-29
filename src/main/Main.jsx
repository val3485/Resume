import { Link, Outlet } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Briefcase, BookCopy, MessageCircleHeart, House } from "lucide-react"


function Main() {
  return (
    <>
      <div className="z-10 sticky top-0">
        <DropdownMenu >
          <DropdownMenuTrigger className="bg-white rounded-r-2xl p-2">Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>About </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex">
                <House className="self-center mt-1"/>
                <div className="ml-2">
                  <Link to="/">
                     Home  
                  </Link>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
               <div className="flex">
                <Briefcase className="self-center mmt-1"/>
                <div className="ml-2">
                  <Link to="/Experience">
                     Experience  
                  </Link>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="z-0 -mt-5">
        <Outlet />  
      </div>
    </>
  )
}

export default Main