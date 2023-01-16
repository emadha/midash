import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeLg } from '@fortawesome/free-solid-svg-icons'

export default function SidebarItem ( { className, href, children, as = 'a' } ) {
  return <li>
    <Link className={ 'py-2 px-5 block hover:bg-indigo-600 hover:text-white transition-all w-full'
                      + ( className ? ' ' + className : '' ) }
          as={ 'a' } href={ href }>
      <FontAwesomeIcon className={ 'mr-2 text-xs' } icon={ faHomeLg }/>
      { children }
    </Link>
  </li>
}