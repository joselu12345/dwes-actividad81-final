import { obtenerPedidos,  obtenerPedidosDeUsuario, obtenerPizzas, obtenerRepartidores } from "@/lib/data";
import Link from "next/link";
import Modal from "@/components/modal";
import PedidoInsertar from "./insertar";
import PedidoModificar from "./modificar";
import PedidoEliminar from "./eliminar";
import { auth } from "@/auth";


export default async function Pedidos() {
    const sesion = await auth()
    let pedidos;

    if (sesion && sesion.user.role === 'ADMIN')
        pedidos = await obtenerPedidos()
    else if (sesion && sesion.user.role === 'USER')
        pedidos = await obtenerPedidosDeUsuario(sesion.user.id)

    const repartidores = await obtenerRepartidores()
    const pizzas = await obtenerPizzas()

    return (
        <div className="flex flex-col gap-4">
            <Modal openElement={<p className="inline p-2 rounded-lg bg-green-500 text-white cursor-pointer">Insertar</p>}>
                <PedidoInsertar repartidores={repartidores} pizzas={pizzas} user = {sesion.user}/>
            </Modal>
            {
                pedidos.map(pedido =>
                    <div key={pedido.id} className="p-4 mb-4 bg-cyan-100 rounded-lg">
                        <div className="flex flex-col gap-4">
                            <Link href={`/pedidos/${pedido.id}`} className="font-bold cursor-pointer">
                                {new Date(pedido.fecha_hora).toLocaleString()}
                            </Link>
                            <p>Nombre del cliente: {pedido.nombre_cliente}</p>
                            <p>Dirección del cliente: {pedido.direccion_cliente}</p>
                            <div>Pedido:
                                {pedido.pizzas.map(pizza => <p key={pizza.id} className="indent-8"> {pizza.nombre} </p> )}
                            </div>

                            <Modal openElement={<p className="inline p-2 rounded-lg bg-yellow-400 text-white cursor-pointer">Modificar</p>}>
                                <PedidoModificar pedido={pedido} repartidores={repartidores} pizzas={pizzas} />
                            </Modal>

                            <Modal openElement={<p className="inline p-2 rounded-lg bg-red-600 text-white cursor-pointer">Eliminar</p>}>
                                <PedidoEliminar pedido={pedido} />
                            </Modal>
                        </div>
                        <hr />
                    </div>
                )
            }
        </div>
    );
}