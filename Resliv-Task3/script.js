(function () {

    const urls = [
        'https://stats.nba.com/stats/leaderstiles',
        'https://stats.nba.com/stats/boxscore'
    ]

    const get = (url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onload = () => {
                try {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(new Error(xhr.status + ' ' + xhr.statusText));
                    }
                } catch (e) {
                    reject(e);
                }
            }

            xhr.send();
        })
    }

    Promise.all(urls.map(get))
        .then(console.log('оба ответа получены'))
        .catch((err) => console.log(err))

}());
