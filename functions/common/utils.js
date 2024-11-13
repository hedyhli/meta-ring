let path = require("path");
let members = require(path.resolve("./_data/members.json"));

export const redirect = site => {
    const statusMessage = `Redirecting to: ${site.url}`
    console.log(statusMessage)

    return {
        statusCode: 303,
        headers: { Location: site.url },
        body: statusMessage
    }
}

export const getIndex = url =>
    url ? members.findIndex(site => url.includes(site.url)) : -1

export const getNext = url => {
    const index = getIndex(url)
    if (index !== -1) {
        const nextIndex = index < members.length - 1 ? index + 1 : 0
        return members[nextIndex]
    }
    console.log('referrer position not found.')
    return members[0]
}

export const getPrevious = url => {
    const index = getIndex(url)
    if (index !== -1) {
        const prevIndex = index > 0 ? index - 1 : members.length - 1
        return members[prevIndex]
    }
    console.log('referrer position not found.')
    return members[members.length-1]
}

export const getRandom = url => {
    const selection = url
        ? members.filter(site => !url.includes(site.url))
        : members
    const randomIndex = Math.floor(Math.random() * selection.length)
    return selection[randomIndex]
}
