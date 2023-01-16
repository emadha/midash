import { useState } from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo'
import Dropdown from '@/Components/Dropdown'
import NavLink from '@/Components/NavLink'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'
import { Link } from '@inertiajs/inertia-react'
import MiningPoolsList from '@/Pages/Blocks/mining-pools-list'
import SidebarItem from '@/Layouts/Sidebar/SidebarItem'

export default function Authenticated ( { auth, header, children } ) {
  const [ showingNavigationDropdown, setShowingNavigationDropdown ] = useState( false )

  return (
    <div className="min-h-screen">

      { header && (
        <header className="bg-white">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{ header }</div>
        </header>
      ) }


      <div className={ 'flex h-full' }>

        <div className={ 'w-3/12 bg-white h-screen fixed' }>
          <ul>
            <SidebarItem url={'/home'}>
              Home
            </SidebarItem>
            <SidebarItem>My Rigs</SidebarItem>
            <SidebarItem href={'/wallets'}>Wallets</SidebarItem>
          </ul>
        </div>

        <div className={ 'w-9/12 ml-[325px] shadow-lg bg-indigo-50 h-screen fixed' }>
          <main>{ children }</main>
        </div>
      </div>
    </div>
  )
}
