import { eliminarRepartidor } from "@/lib/actions";

function RepartidorEliminar({ repartidor }) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos?</h1>
            <p>REPARTIDOR: {repartidor.nombre}</p>
            <p>TELÉFONO: {repartidor.telefono}</p>
            <form className="flex flex-col gap-4" action={eliminarRepartidor}>
                <input type="hidden" name="id" defaultValue={repartidor.id} />
                <button className="p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Eliminar</button>
            </form>
        </div>
    );
}

export default RepartidorEliminar;