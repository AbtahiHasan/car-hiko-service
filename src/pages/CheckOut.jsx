const CheckOut = () => {
    return (
        <main className="ui-container">
            <section>
                <form className="grid grid-cols-2 gap-4 rounded md:p-[10%] bg-[#F3F3F3] my-5">
                    <div>
                        <input className="w-full border-none outline-none rounded p-2" type="text" placeholder="First Name" />
                    </div>
                    <div>
                        <input className="w-full border-none outline-none rounded p-2" type="text" placeholder="Last Name" />
                    </div>
                    <div>
                        <input className="w-full border-none outline-none rounded p-2" type="text" placeholder="Your Phone" />
                    </div>
                    <div>
                        <input className="w-full border-none outline-none rounded p-2" type="text" placeholder="Your Email" />
                    </div>
                    <div className="md:col-span-2">
                        <textarea className="w-full resize-none p-2 border-none outline-none rounded h-[250px]" name="" placeholder="Your Message"></textarea>
                    </div>
                    <div className="md:col-span-2">
                        <input className="w-full py-3 bg-[#FF3811] rounded text-white" type="submit" value="Order Confirm" />
                    </div>

                </form>
            </section>
        </main>
    );
};

export default CheckOut;