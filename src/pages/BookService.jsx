import { MdOutlineClose, MdOutlineDeleteOutline } from "react-icons/md";
import { BsArrow90DegLeft } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const BookService = () => {
    return (
        <main className="ui-container my-10">
            <table className="w-full">
                
                <tbody>
                    <tr >
                        <td ><button className="bg-[#444444] p-2 rounded-full"><MdOutlineClose className="text-white text-xl rounded-full  text-center"/></button></td>
                        <td className="flex gap-8 ml-16">                            
                            <img className="w-[150px] h-[150px] rounded" src="https://i.ibb.co/T2cpBd5/888.jpg" alt="" />
                            <span className="h-[70px] my-auto text-[#444444]">
                                <h3 className="text-xl font-bold">Martha Knit Top</h3>
                                <p>Color : Green</p>
                                <p>Size: S</p>
                            </span>
                        </td>
                        {/* <td>
                        
                        </td> */}
                        <td className="text-xl">$25.00</td>
                        <td className="text-xl">22-10-2022</td>
                        <td><button className="bg-[#FF3811] py-2 px-4 text-white rounded">Pending</button></td>
                    </tr>
                </tbody>
            </table>
            <section className="flex justify-between mt-[140px]">
                <button ><Link className="flex gap-3 items-center"><BsArrow90DegLeft/> <p>Continue Shopping</p></Link></button> <button><Link className="flex gap-3 items-center"><MdOutlineDeleteOutline/> <span>Clear Shopping Cart</span></Link></button>
            </section>
        </main>
    );
};

export default BookService;