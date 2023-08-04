import React from 'react'

function Ventor() {
  return (
    <div className='flex flex-row flex-nowrap px-[12px] py-[4px] bg-surface-light border-[1px] border-carbon-alphaLight rounded-lg mb-spacing-1'>
        <div className='flex flex-1 flex-row flex-nowrap justify-between content-intial items-center py-[12px]'>
            <div className='flex flex-row flex-nowrap items-center'>
                <svg 
                    width="1.25rem" 
                    height="1.25rem" 
                    viewBox="0 0 20 20" 
                    fill="#FF38AC" 
                    xmlns="http://www.w3.org/2000/svg"
                    className='ml-spacing-2'>
                    <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M6.22208 2.0811C7.25604 1.17639 8.62397 0.833252 10 0.833252C11.376 0.833252 12.744 1.17639 13.7779 2.0811C14.7742 2.95289 15.3514 4.25004 15.4115 5.9513C16.2602 6.3957 16.6667 6.94781 16.6667 7.49992L15.3278 7.49992C15.1623 8.65756 14.7722 9.73999 14.2132 10.6511C15.0794 10.9899 15.7307 11.4367 16.2155 11.9028C17.4544 13.094 17.5 14.8769 17.5 16.147L17.5 18.3332C17.5 18.7935 17.1269 19.1666 16.6667 19.1666H14.1707L14.1667 19.1666L14.1626 19.1666L5.83736 19.1666L5.83333 19.1666L5.8293 19.1666H3.33333C3.11232 19.1666 2.90036 19.0788 2.74408 18.9225C2.5878 18.7662 2.5 18.5543 2.5 18.3332V16.147C2.5 14.8769 2.54557 13.094 3.7845 11.9028C4.26932 11.4367 4.92061 10.9899 5.78679 10.6511C5.22781 9.73999 4.83772 8.65756 4.67221 7.49992H3.33333C3.33333 6.94781 3.73977 6.3957 4.58854 5.9513C4.64857 4.25004 5.22575 2.95289 6.22208 2.0811ZM6.35982 7.49992C6.53911 8.51064 6.92727 9.4232 7.44478 10.1348C8.17273 11.1357 9.09342 11.6666 10 11.6666C10.9066 11.6666 11.8273 11.1357 12.5552 10.1348C13.0727 9.4232 13.4609 8.51064 13.6402 7.49992L6.35982 7.49992ZM13.6867 5.35216C12.7116 5.13157 11.4875 4.99992 10 4.99992C8.51254 4.99992 7.28839 5.13157 6.3133 5.35216C6.45885 4.38885 6.84178 3.75348 7.31959 3.3354C7.95229 2.78178 8.87603 2.49992 10 2.49992C11.124 2.49992 12.0477 2.78178 12.6804 3.3354C13.1582 3.75348 13.5411 4.38885 13.6867 5.35216ZM10 13.3333C11.1832 13.3333 12.2438 12.8219 13.0958 12.0301L13.0997 12.0312C14.0439 12.307 14.6591 12.7184 15.0604 13.1042C15.7203 13.7387 15.8333 14.783 15.8333 16.147L15.8333 17.4999H15L15 16.6666C15 16.4716 14.9317 16.2829 14.8069 16.1331L13.7652 14.8831C13.6069 14.6931 13.3723 14.5833 13.125 14.5833L6.875 14.5833C6.62768 14.5833 6.39314 14.6931 6.23482 14.8831L5.19315 16.1331C5.06835 16.2829 5 16.4716 5 16.6666V17.4999H4.16667V16.147C4.16667 14.783 4.27975 13.7387 4.93963 13.1042C5.3409 12.7184 5.95613 12.307 6.90031 12.0312L6.90424 12.0301C7.75623 12.8219 8.81679 13.3333 10 13.3333ZM13.3333 17.4999L13.3333 16.9683L12.7347 16.2499H7.26531L6.66667 16.9683V17.4999H13.3333Z" 
                        fill="#53565C">
                    </path>
                </svg>
                <p className='inline-block w-auto h-auto m-spacing-0 p-spacing-0 font-vrg text-scales-caption leading-lineHeight-caption text-initial text-carbon-main'>پیک فروشنده</p>
                <span className='mr-[4px] inline-block w-auto h-auto m-spacing-0 p-spacing-0 font-vb text-scales-caption leading-lineHeight-caption text-initial text-carbon-main'>۱۵,۰۰۰</span>
                <span className='mr-[4px] inline-block w-auto h-auto m-spacing-0 p-spacing-0 font-vrg text-scales-caption leading-lineHeight-caption text-initial text-carbon-main'>تومان</span>
            </div>
        </div>
    </div>
  )
}

export default Ventor