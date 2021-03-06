const dishes = [
  {
    "id":32244,
    "nombre": "Plato 1",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu1@2x.png"
  },
  {
    "id":55562,
    "nombre": "Plato 2",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu2@2x.png"
  },
  {
    "id":656778,
    "nombre": "Plato 3",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu3@2x.png"
  },
  {
    "id":868779,
    "nombre": "Plato 4",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu4@2x.png"
  },
  {
    "id":7686799,
    "nombre": "Plato 5",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu5@2x.png"
  },
  {
    "id":86995809,
    "nombre": "Plato 6",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu1@2x.png"
  },
  {
    "id":392244,
    "nombre": "Plato 7",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu1@2x.png"
  },
  {
    "id":555062,
    "nombre": "Plato 8",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu2@2x.png"
  },
  {
    "id":6056778,
    "nombre": "Plato 9",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu3@2x.png"
  },
  {
    "id":8608779,
    "nombre": "Plato 10",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu4@2x.png"
  },
  {
    "id":76868799,
    "nombre": "Plato 11",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu5@2x.png"
  },
  {
    "id":869809,
    "nombre": "Plato 12",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu1@2x.png"
  }
]

const input_name = document.getElementById("name");
const input_email = document.getElementById("email");
const input_btn = document.getElementById("send");

input_btn.addEventListener("click", ()=>{
  let name = input_name.value;
  let email = input_email.value;

  if(name != "" && email != ""){
    sendForm(name, email);
  }else{
    notification("Los campos no pueden estar vacios", 'error', ":c")
  }

});

function sendForm(name, email){

  if(localStorage.getItem('products')){
    
    let tempProducts = JSON.parse(localStorage.getItem('products'));
    let productos = '';
    let precioTotal = 0;

    tempProducts.forEach((producto)=>{

      let index = dishes.findIndex(dish=> {
        return dish.id == producto.id
      });

      let tempPrice = (dishes[index].precio) * Number(producto.quantity);

      let tempInfo = `
        producto = ${dishes[index].nombre},
        valor unitario = ${dishes[index].precio}, 
        cantidad = ${producto.quantity},
        valor total:  ${tempPrice};
      `;

        precioTotal+= tempPrice;
        productos += tempInfo;
    })
  
    
    let emailBody = {
      userEmail: email, 
      subject: 'Notificacion de pedido',
      name: name,
      message: productos,
      totalValue: precioTotal
    }

    emailjs.send('service_6nraj6z', 'template_c7vrlva', emailBody).then(
      ()=>{
        notification("Correo enviado correctamente", 'success', ":)")
        localStorage.clear();
        input_name.value = '';
        input_email.value = '';
      },
      (err)=>{console.log(err)}
    
    )
  }else{
    notification("No tienes elementos agregados en tu carrito", 'error');
  }
  
  

}

function notification(message,icon, textbtn){
  Swal.fire({
    text: message,
    icon: icon,
    confirmButtonText: textbtn,
    timer: 2000
  })
}