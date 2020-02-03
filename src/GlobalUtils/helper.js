
export const mapSize = (size) => {
    const width = size >= 1200 ? 250 : size < 768 ? size : size >= 768 ? size : 0
    const height = size >= 1200 ? "100%" : size < 768 ? size : size >= 768 ? size : 0
    return { width, height }
}

export const homeView = (size) => {
    const direction = size >= 1200 ? "flex" : size < 768 ? "block" : size >= 768 ? "block" : "flex"
    const offset = size >= 1200 ? "offset-md-1" : size < 768 ? "" : size >= 768 ? "" : ""
    const container = size >= 1200 ? "container" : size < 768 ? "" : size >= 768 ? "" : ""
    const width = size >= 1200 ? 250 : size < 768 ? size : size >= 768 ? size :  0
    return { width, direction, offset, container }
}