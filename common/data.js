
export const navItems = [
    {
        name : "صفحه اصلی" , href: "/" , 
    },
    {
        name : "منو" , href: "/menu" , 
        items: [
            {name : "منو 1" , href : "/menu/menu1"},
            {name : "منو 2" , href : "/menu/menu2"},
            {name : "منو 3" , href : "/menu/menu3"},
        ]
    },
    {
        name : "درباره ما" , href: "/about" , 

    },
    {
        name : "تماس با ما" , href: "/contact" , 
    },
]
// npm install gsap @gsap/react