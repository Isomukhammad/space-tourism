import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return(
        <Link href = '/'>
            <Image src="/shared/logo.svg" width="48px" height="48px" alt = "logo" style = {{cursor: "pointer"}}/>
        </Link>
    )
}

export default Logo;