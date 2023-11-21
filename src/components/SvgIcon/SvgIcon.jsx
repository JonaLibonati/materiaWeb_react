import React from 'react';
import { forwardRef } from 'react';

export const SvgIcon = forwardRef (( { xmlns, width, height, fill, viewBox, className, paths } , ref) => {

    return (
        <>
            <svg xmlns={xmlns} width={width} height={height} fill={fill} className={className} viewBox={viewBox} ref={ref} >
                {paths.map( ({ fillRule, d }, index) => <path key={index} fillRule={fillRule} d={d} /> )}
            </svg>
        </>
    )
})
