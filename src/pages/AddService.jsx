

const AddService = () => {
    return (
        <main className="ui-container">
        <section>
            <form className="grid grid-cols-2 gap-4 rounded md:p-[10%] bg-[#F3F3F3] my-5">
                <div>
                    <input className="w-full border-none outline-none rounded p-2" type="text" placeholder="Service Name" />
                </div>
                <div>
                    <input className="w-full border-none outline-none rounded p-2" type="text" placeholder="Service Price" />
                </div>
                <div>
                    <input className="w-full border-none outline-none rounded p-2" type="text" placeholder="Text here" />
                </div>
                <div>
                    <input className="w-full border-none outline-none rounded p-2" type="text" placeholder="Service Type" />
                </div>
                <div className="md:col-span-2">
                    <textarea className="w-full resize-none p-2 border-none outline-none rounded h-[250px]" name="" placeholder="Product Description"></textarea>
                </div>
                <div className="md:col-span-2">
                    <input className="w-full py-3 bg-[#FF3811] rounded text-white" type="submit" value="Submit" />
                </div>

            </form>
        </section>
    </main>
    );
};

export default AddService;