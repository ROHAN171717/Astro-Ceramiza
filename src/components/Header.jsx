import React from 'react'

const Header = () => {
  return (
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-28 py-4 text-white bg-stone-600 z-10">
          <div className="text-3xl font-bold">
              <a href="/">Ceramiza</a>
          </div>
          <div className="flex gap-14 font-medium">
              <a href="/">ABOUT</a>
              <a href="/">FAQ</a>
              <a href="/">CONTACT US</a>
          </div>
      </div>
  );
}

export default Header