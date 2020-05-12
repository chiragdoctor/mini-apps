const getKelToCel = (temp) => {
    const kelToCel = 273.15;
    const tempInCel = temp - kelToCel;
    return tempInCel.toFixed(2);
}

module.exports = getKelToCel;