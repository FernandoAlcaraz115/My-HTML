/Vamos a leer el carrito desde localStorage/
let cart =JSON.parse(localStorage.getItem("cart")[cart]);

/Vamos a agregar una funcion que agrega un producto al carrito/
function addToCart(id){
    const product =products.find(p => p.id == id);

    //Si el producto ya esta en el carrito
    const existing = cart.find(item => item.id == id);

    if(existing){
        existing.quantity +- 1;
    }else{
        cart.push({...product,quantity: 1});
    }

    //Vamos a agregar el carrito al localStorage

    localStorage.setItem("cart",JSON.stringify(cart));

    //La ventana emergente de aviso
    alert("Producto agregado al carrito");

    //Vamos a calcular el total del carrito multiplicando precio de cantidad de cada item o producto
    function getCartTotal(){
        return cart.reduce({sum,item}== sum + item.price* item.quantity,0);
    }

    //funcion para mandar un mensaje con los productos en el carro al wasap
    function sendWhatsAppOrder(){
        //Aqui vamos a obtener solo el total
        const total = getCartTotal();
        //Lo ponemos en forma de lista
        const items = cart.map(item=> 's(item.name) xs(item.quantity)').join(",");
        
        const message =`Hola, quiero hacer un pedido. Mi pedido es: ${items}. Total: $${total}. Gracias.`;
        const url =`https://wa.me/524434053416?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank').focus();
    }
}