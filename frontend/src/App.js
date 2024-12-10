import ExpandedFooter from './components/footer/ExpandedFooter';
import Footer from './components/footer/Footer';
import GetInTouch from './components/get-in-touch/GetInTouch';
import PopOut from './components/popout/PopOut';
import GradientBackground from './components/header/GradientBackground';
import Test from './components/header/Test';

export default function App() {
    return (
        <div className='flex flex-col'>
            {/* <Test /> */}
            <GradientBackground />
            <PopOut />
            <GetInTouch />
            <ExpandedFooter />
            <Footer />
        </div>
    );
}
