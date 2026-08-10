"use client"

import { useRef , useState } from "react"
import { navItems } from "@/common/data"
import Link from "next/link"

const MyLink = ({item , isActive , onHover}) => {
    const linkRef = useRef()

    const handleHover = () => {
        const rect = linkRef.current.getBoundingClientRect();
        onHover(item , `${rect.x}px`)
    }

    return (
        <Link
        href={item.href}
        className={isActive ? "active" : ""}
        ref={linkRef}
        onMouseEnter={handleHover}
        >
        {item.name}
        </Link>
    )
}
const Navbar = () => {
    const [translateX , setTranslateX] = useState("0")
    const [activeItem , setActiveItem] = useState(null)
    const [isHidden , setIsHidden] = useState(true)
    const handleLinkHover = (item , x) => {
        setActiveItem(item)
        setTranslateX(x)
    }
    const handleMouseEnter = () => {
        setIsHidden(false)
    }
    const handleMouseLeave = () => {
        setIsHidden(true)
    }
  return (
    <div
      className="menu"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {navItems.map((item) => (
        <MyLink
          isActive={item.name === activeItem.name && !isHidden}
          item={item}
          onHover={handleLinkHover}
          href={item.href}
        />
      ))}
      <div style={{translate: `${translateX} 0` , visibility: "hidden"}} className={`drop ${activeItem && !isHidden ? "visibling" : ""}`}>
        {
            activeItem.items.map((link , index) => (
                <Link key={index} href={link.href} >{link.name}</Link>
            ))
        }
      </div>
    </div>
  );
}

export default Navbar