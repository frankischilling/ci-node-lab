function toTitleCase(s) {
    return String(s).replace(/\w\S*/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase());
}

module.exports = { toTitleCase };