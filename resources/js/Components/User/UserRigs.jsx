import { useEffect, useState } from 'react'

export default function UserRigs ( { className, children, user } ) {
  const [ userRigs, setUserRigs ] = useState( [] )
  useEffect( () => {
    axios.get( '/api/user/rigs' ).then( r =>
      setUserRigs( r.data )
    )

  }, [] )
  return <>
    <table>
      <tbody>
      { userRigs.map( rig => <div>Rig</div> ) });
      </tbody>
    </table>
  </>
}