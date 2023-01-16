import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/inertia-react'
import MiningPoolsList from '@/Pages/Blocks/mining-pools-list'

export default function Dashboard ( props ) {
  return (
    <AuthenticatedLayout
      auth={ props.auth }
      errors={ props.errors }
      header={ <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2> }
    >
      <Head title="Dashboard"/>
      <MiningPoolsList/>

    </AuthenticatedLayout>
  )
}
