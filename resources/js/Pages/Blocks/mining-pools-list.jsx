import { useEffect, useState } from 'react'
import axios from 'axios'

export default function MiningPoolsList ( { className, children } ) {
  const [ miningPools, setMiningPools ] = useState( [] )

  useEffect( () => {
    let miningPoolsApiLink = '/api/pools/list'
    let axiosRequest       = axios.get( miningPoolsApiLink ).then( r => {
      setMiningPools( r.data.list )
    } )
  }, [] )
  return <>

    <table className={'table-fixed bg-white shadow-sm m-5 rounded-lg text-neutral-800 table-striped text-xs'}>

      <thead className={'border-b'}>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>URL</th>
        <th>Website</th>
        <th>Type</th>
        <th>Founded</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      {
        miningPools.map( i =>
          <tr className={'odd:bg-neutral-100 hover:bg-indigo-500 hover:text-white cursor-pointer duration-75'}>
            <td className={'px-6 py-4 whitespace-nowrap'}> { i.id }</td>
            <td> { i.name }</td>
            <td> { i.url }</td>
            <td> { i.website }</td>
            <td> { i.type }</td>
            <td> { i.founded }</td>
            <td> { i.description }</td>
          </tr>
        )
      }
      </tbody>

    </table>
  </>
}