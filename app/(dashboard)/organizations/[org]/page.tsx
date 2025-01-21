import React from 'react'


interface OrgParams {
    params: {
        org: string
    }
}
const Org = async (
    {params}: OrgParams
) => {
    const orgName = (await params).org
  return (
    <main className='max-w-[90%] '>

    <div className='text-black'>
      <h1 className='text-6xl font-semibold underline' >{decodeURIComponent(orgName)}</h1>
    </div>
    </main>
  )
}

export default Org