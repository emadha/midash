import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { useEffect, useState } from 'react'

export default function Wallet ( { className, children, auth, ...props } ) {
  const [ wallets, setWallets ] = useState( [] )
  useEffect( () => {
    axios.get( '/api/wallets' ).then(
      r => setWallets( r.data.wallets )
    )
  }, [] )

  return <AuthenticatedLayout auth={ auth }>
    <table>
      <thead>
      <tr>
        <th>Wallet</th>
      </tr>
      </thead>
      <tbody>

      </tbody>

    </table>
  </AuthenticatedLayout>
}