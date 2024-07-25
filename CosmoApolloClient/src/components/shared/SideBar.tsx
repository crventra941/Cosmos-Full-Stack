import { CiBookmarkCheck, CiImageOn} from 'react-icons/ci';
import { Link, useLocation } from 'react-router-dom';

export const SideBar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
      <div className="-mx-6 px-6 py-4">
        <Link to="/" title="home" className='t-4 text-3xl font-semibold text-gray-700 flex items-center'>
        <CiImageOn size={40} /> 
          Cosmos
        </Link>
      </div>

      <div className="mt-8 text-center">
        <img src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"/>
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
      </div>

      <ul className="space-y-2 tracking-wide mt-8">
        {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
        <li>
          <Link to="/" className={`${location.pathname === '/' ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''} relative px-4 py-3 flex items-center space-x-4 rounded-xl`}>
            <CiBookmarkCheck size={30} />
            <span className="-mr-1 font-medium">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/images" className={`${location.pathname === '/images' ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''} relative px-4 py-3 flex items-center space-x-4 rounded-xl`}>
            <CiImageOn size={30} />
            <span className="group-hover:text-gray-700">Cosmo Images</span>
          </Link>
        </li>
      </ul>
    </div>
  </aside>
  )
}
