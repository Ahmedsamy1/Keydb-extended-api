const axios = require('axios');

const cache = [];

const SortArrayWithDirection = (resultPosts, sortBy, direction) => {
    if (sortBy === 'reads') {
        if (direction === 'desc') {
            resultPosts.sort((a, b) => (a.reads > b.reads) ? -1 : 1);
        }
        else {
            resultPosts.sort((a, b) => (a.reads > b.reads) ? 1 : -1);
        }
    }

    else if (sortBy === 'likes') {
        if (direction === 'desc') {
            resultPosts.sort((a, b) => (a.likes > b.likes) ? -1 : 1);
        }
        else {
            resultPosts.sort((a, b) => (a.likes > b.likes) ? 1 : -1);
        }
    }

    else if (sortBy === 'popularity') {
        if (direction === 'desc') {
            resultPosts.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1);
        }
        else {
            resultPosts.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1);
        }
    }

    else {
        if (direction === 'desc') {
            resultPosts.sort((a, b) => (a.id > b.id) ? -1 : 1);
        }
        else {
            resultPosts.sort((a, b) => (a.id > b.id) ? 1 : -1);
        }
    }
};

exports.GetPosts =  (req, res) => {
    let tags = req.query.tags;
    let sortBy = req.query.sortBy;
    let direction = req.query.direction;

    if (!tags) {
        res.status(400);
        return res.json({'error':'Tags parameter is required'});
    }

    if (sortBy && sortBy !== 'id' && sortBy !== 'reads' && sortBy !== 'likes' && sortBy !== 'popularity') {
        res.status(400);
        return res.json({'error':'sortBy parameter is invalid'});
    }

    if (direction && direction !== 'asc' && direction !== 'desc') {
        res.status(400);
        return res.json({'error':'direction parameter is invalid'});
    }
    
    const requests = [];
    const resultPosts = [];
    const addedPosts = [];
    const cachedPostsInThisRequest = [];

    tags = tags.split(',');


    
    // var is used instead of let as its performance inside a loop is about 60% better
    // utilizing parallel requests
    for (var i = 0; i < tags.length; i++) {
        if (cache[`https://api.hatchways.io/assessment/blog/posts?tag=${tags[i]}`]) {
            cachedPostsInThisRequest.push(cache[`https://api.hatchways.io/assessment/blog/posts?tag=${tags[i]}`]);
        }
        else {
            requests.push(axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tags[i]}`));
        }
    }

    axios.all(requests).then((allData) => {
        for (var i = 0; i < cachedPostsInThisRequest.length; i++) {
            let singleRequestPosts = cachedPostsInThisRequest[i];

            for (var j = 0; j < singleRequestPosts.length; j++) {
                let onePostStringified = JSON.stringify(singleRequestPosts[j]);

                if (!addedPosts[onePostStringified]) {
                    resultPosts.push(singleRequestPosts[j]);
                    addedPosts[onePostStringified] = true;
                }
            }
        }


        for (var i = 0; i < allData.length; i++) {
            cache[allData[i].config.url] = allData[i].data.posts;
            
            let singleRequestPosts = allData[i].data.posts;

            for (var j = 0; j < singleRequestPosts.length; j++) {
                let onePostStringified = JSON.stringify(singleRequestPosts[j]);

                if (!addedPosts[onePostStringified]) {
                    resultPosts.push(singleRequestPosts[j]);
                    addedPosts[onePostStringified] = true;
                }
            }
        }

        SortArrayWithDirection(resultPosts, sortBy, direction);

        res.json({
            "posts": resultPosts
        });
    });
};