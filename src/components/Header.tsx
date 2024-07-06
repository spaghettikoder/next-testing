
import Link from 'next/link';
import React from 'react';


export default function Header() {
  return (
    <div className="top-rectangle">
      <img
        src="/assets/images/dark.jpg"
        alt="profile image"
        className="profile-image"
      />
       <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/comic">Comic</Link></li>
        </ul>
      </nav>
    </div>
  );
}


// export default function Header() {
//   return (
//     <header>
      // <nav>
      //   <ul>
      //     <li><Link href="/">Home</Link></li>
      //     <li><Link href="/comic">Comic</Link></li>
      //   </ul>
      // </nav>
//     </header>
//   );
// }
