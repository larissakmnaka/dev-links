function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  const img = document.querySelector("#profile img")
  console.log(img)
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/perfil2.HEIC")
  } else {
    img.setAttribute("src", "./assets/perfil1.HEIC")
  }

  const alt = document.querySelector("#profile img")
  console.log(img)
  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de uma japonesa sorrindo de óculos, com a cabeça meio inclinada")
  } else {
    img.setAttribute("alt", "Foto de uma japonesa sorrindo de óculos, com a cabeça reta")
  }
}
