const Banner = (props) => {
    const banner = props.banner
    const title = props.title
    const button = props.button
    const assistiveText = props.assistiveText

    return (
        <div role="img" aria-label={assistiveText} className="banner w-full bg-cover bg-center"
        style={ banner }>
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-40">
                <h1>{title}</h1>
                    { button ? button : ""}
            </div>
        </div>
    )
}

export default Banner
