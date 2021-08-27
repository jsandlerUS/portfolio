export const openWindow = (URL) => {

    var iframe;
    iframe = window.open(
        URL,
        'iframeWindow',
        "width=1000, height=1000"
    )

    return (
        <div>
            <iframe 
            id="github-iframe"
            width="1000"
            height="1000"
            title="iframe-Window"
            ></iframe>
        </div>
    )
}