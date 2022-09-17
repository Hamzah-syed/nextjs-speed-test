import React from 'react'
import { FaBeer, Fa500Px, FaAccessibleIcon, FaAccusoft, FaAcquisitionsIncorporated, FaAd } from 'react-icons/fa';
import { BeakerIcon, AcademicCapIcon, AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline'

const icons = () => {
    return (
        <>
            <FaBeer className='w-10 h-10' />
            <Fa500Px className='w-10 h-10' />
            <FaAccessibleIcon className='w-10 h-10' />
            <FaAcquisitionsIncorporated className='w-10 h-10' />
            <FaAd className='w-10 h-10' />
            <FaAccusoft className='w-10 h-10' />
            <BeakerIcon className='w-10 h-10' />
            <AcademicCapIcon className='w-10 h-10' />
            <AdjustmentsHorizontalIcon className='w-10 h-10' />
            <AdjustmentsVerticalIcon className='w-10 h-10' />
            <ArchiveBoxArrowDownIcon className='w-10 h-10' />
        </>
    )
}

export default icons