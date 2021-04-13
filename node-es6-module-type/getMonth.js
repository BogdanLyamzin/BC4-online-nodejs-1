const getMonth = ()=> {
    const date = new Date();
    return (date.getMonth()+1)
}

module.exports = getMonth;