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

module.exports = SortArrayWithDirection;