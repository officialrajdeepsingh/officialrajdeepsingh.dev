import Link from "next/link";

export function Card({ tittle, description, url }: { tittle: string; description: string; url: string; }) {
    return (
        <Link target="_blank" href={url} key={url} className="my-0 bg-blue-400 dark:bg-gray-600 rounded-lg shadow-md text-sm no-underline">
            <div className="w-full p-6 ">
                <div className="p-2 mx-auto">
                    <h2 className="my-2 font-bold  text-xl">{tittle}</h2>
                    <p className="my-2 text-sm">{description}</p>
                </div>
            </div>
        </Link>
    )
}