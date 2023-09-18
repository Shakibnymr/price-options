import Link from "../link/Link";


const NavBar = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Product Detail', path: '/products/:id' },
        { id: 5, name: 'Not Found', path: '*' }
      ];
      
      
      

    return (
        <nav>
           <ul className="md: flex ">
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;