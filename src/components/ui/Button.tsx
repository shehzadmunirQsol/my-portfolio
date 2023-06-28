import React from 'react';

export function Button(props: any) {
  return (
    <button
      {...props}
      className={`bg-ac-2 p-2 border-2 text-white group relative flex justify-center rounded-md font-semibold text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${props.className}`}
    >
      {props?.children}
    </button>
  );
}
