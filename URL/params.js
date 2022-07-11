// 增加参数
let addUrlParams = (key, value) => {
    let urlObj = new window.URL(window.location.href)
    urlObj.searchParams.set(key, value)
    return urlObj.href
}

// 删除参数
let delUrlParams = (key) => {
    let urlObj = new window.URL(window.location.href)
    urlObj.searchParams.delete(key)
}

/**
 * pushState(state, title, url) 会创建历史
 * replaceState(state, title, url) 不会创建历史，是替换当前的url
*/

let addParams = () => {
    history.pushState({}, 0, addUrlParams(key, value))
}

let delParams = () => {
    history.pushState({}, 0, delUrlParams(key))
}