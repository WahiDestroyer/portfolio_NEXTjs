// Other.jsx - Updated with responsive classes
import React from 'react'
import eng from "../../../public/images/about/other/eng.png"
import spain from "../../../public/images/about/other/spain.png"
import cplus from "../../../public/images/about/other/c++.png"
import c from "../../../public/images/about/other/c.png"
import Lang from './Lang'

const Other = () => {
  return (
    <div className='flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 mt-12 sm:mt-18'>
        <div className='w-full'>
            <h3 className='font-mont text-xl sm:text-2xl md:text-3xl font-bold text-black tracking-wider pb-12 sm:pb-19 uppercase text-center'>OTHER SKILLS:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-15">
          <Lang sobi={eng} title="ANGIELSKI"/>
          <Lang sobi={spain} title="HISZPAŃSKI"/>
          <Lang sobi={cplus} title="C++"/>
          <Lang sobi={c} title="C"/>
        </div>
        </div>
    </div>
  )
}

export default Other