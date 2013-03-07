
(function () {
    
    var iframe;

    function openIFrame () {
        iframe = document.createElement('iframe');
        iframe.id = '_ANGEL_Timeout_Reset_';
        iframe.src = 'https://angel.conestogac.on.ca/profile/default.asp';
        iframe.style.display = 'none';   

        document.body.appendChild(iframe);
    }

    function closeIFrame () {
        document.body.removeChild(iframe);
    }

    (function () {
        window.setInterval( function () {
            openIFrame();

            iframe.onload( function () {

                window.setTimeout( function () {
                    closeIFrame();
                }, 1000);

            });
            

        }, 2 * 60 * 1000);

    })();
    
})();