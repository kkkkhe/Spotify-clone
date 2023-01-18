import { useEffect, useState } from 'react';
import { getTrackBackground, Range } from 'react-range';
type RangeProps = {
	max:number
	progress:number
	setValue: any
	value: number[]
}
export const RangeInput = ({max, progress, setValue, value}:RangeProps) => {
	useEffect(() => {
		setValue([Math.floor(progress / 1000)])
	}, [progress, max])
	const sec = Math.floor((max % 60000) / 1000);
	const min = Math.floor(max / 60000);
	return (
		<div className='w-full flex items-center gap-2 text-[12px] text-gray'>
			<div>{Math.floor(value[0] / 60)}:{value[0] % 60 < 10 ?  "0" + value[0] % 60 : value[0] % 60}</div>
			<Range
			step={1}
			min={0}
			max={Math.floor(max/1000)}
			values={value}
			onChange={(values) => setValue(values)}
			renderTrack={({ props, children }) => (
			<div
				{...props}
				style={{
				...props.style,
				height: '3px',
				width: '100%',
				backgroundColor: '#ccc',
				background: getTrackBackground({
				values: value,
				colors: ["#ffffff", "#5e5e5e"],
				min: 0,
				max: Math.floor(max/1000)
				})
				}}
			>
				{children}
			  </div>
			)}
			renderThumb={({ props }) => (
			  <div
				{...props}
				className='w-[9px] h-[9px] bg-white rounded-full outline-none '
			  />
			)}
			/>
			<div>{min}:{sec < 10 ? "0" + sec  : sec}</div>
		</div>
    );
}