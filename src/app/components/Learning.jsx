// Learning.jsx - Updated with responsive classes
import React from 'react'
import Lang from './Lang'
import node from "../../../public/images/about/learning/node.png"
import sql from "../../../public/images/about/learning/sql.png"
import mongo from "../../../public/images/about/learning/mongo.png"
import ty from "../../../public/images/about/learning/type.png"

const Learning = () => {
  return (
    <div className='flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 mt-12 sm:mt-18'>
        <div className='w-full'>
            <h3 data-aos="fade-in" className='font-mont text-xl sm:text-2xl md:text-3xl font-bold text-black tracking-wider pb-12 sm:pb-19 uppercase text-center'>learning:</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          <Lang somoy={1000} sobi={node} title="NODEJS"/>
          <Lang somoy={1600} sobi={sql} title="MySQL"/>
          <Lang somoy={2200} sobi={mongo} title="MONGODB"/>
          <Lang somoy={3000} sobi={ty} title="TYPESCRIPT"/>
        </div>
        </div>
    </div>
  )
}

export default Learning