import Image from "next/image"

const Card = ({src, title, content, buttonTitle}) => {
    return (
        <section className="thumbnail mb-5">
            <Image src={src} className="w-full" width={480} height={270}
            alt="Alt text not available"/>
            <h2 className="text-gray-700 font-semibold mt-4">{title}</h2>
            <p className="text-sm text-gray-600 mt-4">{content}</p>
            <button className="mt-8 btn-secondary mb-4">{buttonTitle}</button>
        </section>
    )
}

export default Card
