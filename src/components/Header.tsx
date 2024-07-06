
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './header.module.css';


export default function Header() {
  return (
    <div className="top-rectangle">
      <img
        src="${basePath}/assets/images/dark.jpg"
        alt="profile image"
        className="profile-image"
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <nav>
        <ul className='headerList'>
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
