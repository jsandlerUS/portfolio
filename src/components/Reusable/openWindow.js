export const openWindow = (URL) => {

    var iframe;
    iframe = window.open(
        "http://localhost:3000/iframe-window",
        'iframeWindow',
        "width=500, height=500"
    )
    

    
    return (
        <div>
            <iframe 
            id="github-iframe"
            width="1000"
            height="1000"
            src="/iframe-Window/"
            title="iframe-Window"
            ></iframe>
        </div>
    )
}