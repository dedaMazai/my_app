module.exports = {
    secret: "3zaebis1secret2",
    port: process.env.PORT || 4000,
    production: ((process.env.NODE_ENV === "production") ? true : false)
}