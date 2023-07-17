
import logo from '../Component/logo.png'
const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title"> <img src={logo} alt="logo icon" />  To-Do App </h1>
             <div className="image-container">
               <img className='head-photo' src="https://img.freepik.com/free-vector/hand-drawn-college-entrance-exam-illustration_52683-112608.jpg?size=626&ext=jpg&ga=GA1.2.887998636.1689605611&semt=ais" alt="" />
             
             </div>
           
        </div>
    );
};

export default Header;