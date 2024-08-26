import React from 'react'
import NavigationButton from './NavigationButton';

export default function HeaderCenter() {
  const [buttons, setButtons] = React.useState([
    "Products",
    "Docs",
    "Customer",
    "Pricing",
    "Blog"
  ]);
  return (
    <div className='w-auto flex-grow flex flex-row flex-nowrap items-center justify-center gap-2'>
      {buttons.map((value, index, arr) => {
        return <NavigationButton key={String(index) + "__navigation_btn"} text={value} />
      })}
    </div>
  )
}
