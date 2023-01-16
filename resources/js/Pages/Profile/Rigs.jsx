import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Rigs ( { auth, rigs } ) {

  console.log(rigs);
  return <AuthenticatedLayout auth={ auth }>
    Ok
  </AuthenticatedLayout>
}