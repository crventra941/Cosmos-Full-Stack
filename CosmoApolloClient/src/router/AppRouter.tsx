import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/dashboard"
import { ImagesPage } from "../pages/images"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<DashboardPage />}/>
        <Route path="/images" element={<ImagesPage />}/>
    </Routes>
  )
}
