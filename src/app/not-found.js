import Link from 'next/link'
import './not-found.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
 
export default function NotFound() {
  return (
    <div className="notFound-container">
      <Image src="/images/error/undraw_404.svg" width={350} height={350} alt='404 error'></Image>
      <h1>Sorry, this page is not available.</h1>
      <Link className="return-home" href="/"><FontAwesomeIcon icon={faArrowLeftLong}/>Return Home</Link>
    </div>
  )
}