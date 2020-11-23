module.exports = {
    success: (res, data) => {
        const resObj = {
            status: 'success',
            code: 200,
            data,
            };
            res.json(resObj);
    },
    error: (res, err) => {
        res.status(500).json(err)
    },
}