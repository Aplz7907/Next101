import Link from "next/link";
import Image from "next/image";

export default function Page1() {
  return (
    <div>
      <h1 className="text-5xl text-green-400 text-center">Page1</h1>
      <p className="text-center ">66162110386-2</p>
      <div className="flex justify-center">
        <Image 
          src="/R.jpg" 
          alt="A" 
          width={500} 
          height={500} 
        />
      </div>
      <ul className="text-center text-red-700">
        <li>
          <Link href="/page1">Go to Page 1</Link>
        </li>
        <li>
          <Link href="/page2">Go to Page 2</Link>
        </li>
        <li>
          <Link href="/page3">Go to Page 3</Link>
        </li>
      </ul>
    </div>
  );
}
