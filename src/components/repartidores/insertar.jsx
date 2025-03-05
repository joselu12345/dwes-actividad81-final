import { insertarRepartidor } from "@/lib/actions";

function RepartidorInsertar() {
    return (
        <form className="flex flex-col gap-4" action={insertarRepartidor}>
            <h1 className="text-xl text-blue-500">Nuevo repartidor</h1>

            <label>Nombre:
                <input name='nombre' placeholder="Nombre" />
            </label>

            <label>Teléfono:
                <input name='telefono' placeholder="Teléfono" />
            </label>

            <button className="p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Insertar repartidor</button>
        </form>

    );
}

export default RepartidorInsertar;