function errorBoom(err, req, res, next) {
    if (err.isBoom) {
        const { output } = err;
        res.status
    }
}