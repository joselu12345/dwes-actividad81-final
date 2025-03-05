'use client'
import { modificarPedido } from "@/lib/actions";
import { useActionState, useEffect, useId } from "react";

function PedidoModificar({ pedido, repartidores, pizzas }) {
    const formId = useId()

    const [state, action, pending] = useActionState(modificarPedido, {})

    useEffect(() => {
        if (state.success) {
            // toast.success(state.success)
            document.getElementById(formId)?.closest('dialog')?.close()
        }
    }, [state])

    const IDs = pedido.pizzas.map(p => p.id)

    return (
        <form className="flex flex-col gap-4" action={action} id={formId}>
            <h1 className="text-xl text-blue-500">Modificar pedido</h1>
            <input type="hidden" name="id" defaultValue={pedido.id} />

            <label> Fecha y hora:
                <input name="fecha_hora" type="datetime-local" defaultValue={new Date(pedido.fecha_hora).toISOString().split('Z')[0]} />
            </label>

            <label> Nombre del cliente:
                <input name="nombre_cliente" placeholder="Nombre cliente" defaultValue={pedido.nombre_cliente} />
            </label>

            <label> Nombre del cliente:
                <input name="direccion_cliente" placeholder="Dirección cliente" defaultValue={pedido.direccion_cliente} />
            </label>
            
            <p className="font-bold">Repartidor</p>
            <select name="repartidorId" defaultValue={pedido.repartidorId} key={pedido.repartidorId}>
                {
                    repartidores.map(repartidor =>
                        <option key={repartidor.id} value={repartidor.id}>
                            {repartidor.nombre}
                        </option>
                    )
                }
            </select>


            <p className="font-bold">Pizzas</p>
            {
                pizzas.map(pizza =>
                    <label key={pizza.id}>
                        <input
                            type="checkbox"
                            name={`pizza${pizza.id}`}
                            value={pizza.id}
                            defaultChecked={IDs.includes(pizza.id)}
                        />

                        {pizza.nombre}

                    </label>
                )
            }


            <button className="p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Modificar</button>
        </form>
    );
}

export default PedidoModificar;