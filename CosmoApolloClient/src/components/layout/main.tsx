import { ReactNode } from "react"
import { SideBar, TopMenu } from ".."

export const MainLayout = ({ children }: { children: ReactNode}) => {
  return (
    <>
    <SideBar /> 
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        {children}
    </div>
    </>
  )
}
