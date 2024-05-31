
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import ForgetPassword from "./pages/ForgetPassword";
import SignUp from "./pages/SignUp";
import Teamstyle1 from "./pages/Page/Team/Teamstyle1";
import Teamstyle2 from "./pages/Page/Team/Teamstyle2";
import Services from "./pages/Page/services/Services";
import ServicesDetails from "./pages/Page/services/ServicesDetails";
import Portfolio from "./pages/Page/portfolio/Portfolio";
import PortfolioDetails from "./pages/Page/portfolio/PortfolioDetails";
import MyAccount from "./pages/MyAccount";
import CartShop from "./pages/Page/shop/CartShop";
import Blog from "./pages/blogs/Blog";
import BlogGrid from "./pages/blogs/BlogGrid";
import FAQ from "./pages/Page/Faq/FAQ";
import Error from './pages/Page/Error'
import Checkout from "./pages/Page/shop/Checkout";
import Shop from "./pages/shop/Shop";
import ShopGrid from "./pages/shop/ShopGrid";
import Shop2Col from "./pages/shop/Shop2Col";
import ShopLeft from "./pages/shop/ShopLeft";
import ShopRight from "./pages/shop/ShopRight";
import SingleProducts from "./pages/shop/SingleProducts";
import Blogleft from "./pages/blogs/Blogleft";
import Blogright from "./pages/blogs/Blogright";
import Blogdetails from "./pages/blogs/Blogdetails";
import HomeStyle01 from "./pages/homepages/HomeStyle01";
import HomeStyle02 from "./pages/homepages/HomeStyle02";
import HomeStyle03 from './pages/homepages/HomeStyle03';
import HomeStyle04 from './pages/homepages/HomeStyle04';
import HomeStyle05 from './pages/homepages/HomeStyle05';
import Whishlist from "./pages/Page/shop/Whishlist";
import PricingPlane from "./pages/Page/PricePlane/PricingPlane";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/home01",
      element: <HomeStyle01/>,
    },
    {
      path: "/home02",
      element: <HomeStyle02/>,
    },
    {
      path: "/home03",
      element: <HomeStyle03/>,
    },
    {
      path: "/home04",
      element: <HomeStyle04/>,
    },
    {
      path: "/home05",
      element: <HomeStyle05/>,
    },
    {
      path: "/signin",
      element: <SignIn/>,
    },
    {
      path: "/signup",
      element: <SignUp/>,
    },
    {
      path: "/ForgetPassword",
      element: <ForgetPassword/>,
    },
    {
      path: "/checkout",
      element: <Checkout/>,
    },
    {
      path: "/myaccount",
      element: <MyAccount/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
      // pages 

      {
        path:"/pricing",
        element:<PricingPlane />
      },
    {
      path: "/team1",
      element: <Teamstyle1/>,
    },

    {
      path: "/team2",
      element: <Teamstyle2/>,
    },

    {
      path:'/services',
      element:<Services />
    },
    {
      path:'/servicesdetails',
      element:<ServicesDetails />
    },
    {
      path:'/portfolio',
      element:<Portfolio />
    },
    {
      path:'/portfoliodetails',
      element:<PortfolioDetails />
    },

    {
      path:'/cart',
      element:<CartShop />
    },
    {
      path:'/whishlist',
      element:<Whishlist />
    },
    {
      path:'/faq',
      element:<FAQ />
    },
    {
      path:'/error',
      element:<Error />
    },

    //blog pages
    {
      path:'/blog',
      element:<Blog />
    },
    {
      path:'/bloggrid',
      element:<BlogGrid />
    },
    {
      path:'/blogleft',
      element:<Blogleft />
    },
    {
      path:'/blogright',
      element:<Blogright />
    },
    {
      path:'/blogdetails',
      element:<Blogdetails />
    },
//shop pages

{
  path:'/shop',
  element:<Shop />
},
{
  path:'/shopgrid',
  element:<ShopGrid />
},
{
  path:'/shop2col',
  element:<Shop2Col />
},
{
  path:'/shopleft',
  element:<ShopLeft />
},
{
  path:'/shopright',
  element:<ShopRight />
},
{
  path:'/singleproduct',
  element:<SingleProducts/>
},







    {
      path:'/contact',
      element:<Contact />
    }
  ])
  return (
    <div className="w-full overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
