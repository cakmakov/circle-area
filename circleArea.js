const arguments = process.argv.slice(2)

function CircleAreaCalc(radius) {
  const area = Math.PI * Math.pow(radius, 2)
  console.log(
    `Yarıçapı (${radius}) olan dairenin alanı: (${parseFloat(area).toFixed(2)})`
  )
}

CircleAreaCalc(arguments[0])
