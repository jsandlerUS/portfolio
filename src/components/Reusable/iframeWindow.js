const iframeWindow = () => {
var src
    fetch('https://api.github.com/repos/agalea91/crypto-monetary-base/contents/charts/relative_coin_supply_pct_estimates.html')
    .then(function(response) {
        console.log(response)
        return response.json();
    }).then(function(data) {
        try {
            console.log(data)
            src = 'data:text/html;base64,' + encodeURIComponent(data['content']);
        } catch (error) {
            console.log(error)
        }
    });

return (
    <div>
        <iframe 
        src={src} 
        width="1000"
        height="1000"
        title="test"></iframe>
    </div>
)
}
 export default iframeWindow