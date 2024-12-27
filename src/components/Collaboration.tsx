import Link from "next/link";

export function Collaboration() {
    return (
        <section className="mt-14 w-full bg-blue-600 py-10 px-8 md:py-16 md:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-center">

                <div className="text-center lg:text-left w-full md:w-8/12">
                    <h3 className="mt-0 mb-0">Ask Query</h3>
                    <p className="text-lg">You can contact me about related business and collaboration.</p>
                </div>

                <div className="w-full  md:w-4/12 flex justify-center items-center">
                    <Link className="font-semibold p-2" href="/pages/contact">Contact Me.</Link>
                </div>

            </div>

        </section>
    )
}
