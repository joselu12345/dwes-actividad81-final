import { modificarRepartidor } from "@/lib/actions";

function RepartidorModificar({ repartidor }) {
    return (
        <form className="flex flex-col gap-4" action={modificarRepartidor}>
            <h1 className="text-xl text-blue-500">Modificar repartidor</h1>

            <input type="hidden" name="id" defaultValue={repartidor.id} />

            <label>Nombre:
                <input name='nombre' defaultValue={repartidor.nombre} />
            </label>

            <label>Teléfono:
                <input name='telefono' defaultValue={repartidor.telefono} />
            </label>

            <button className="p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Modificar</button>
        </form>
    );
}

export default RepartidorModificar;