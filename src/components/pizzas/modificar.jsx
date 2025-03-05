import { modificarPizza } from "@/lib/actions";

function PizzaModificar({ pizza }) {
    return (
        <form className="flex flex-col gap-4" action={modificarPizza}>
            <h1 className="text-xl text-blue-500">Modificar pizza</h1>

            <input type="hidden" name="id" defaultValue={pizza.id} />
            
            <label>Nombre:
                <input name="nombre" defaultValue={pizza.nombre}  />
            </label>

            <label>Precio:
                <input name="precio" type='number' step={0.01} min={0} defaultValue={pizza.precio} />
            </label>

            <button className="p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Modificar</button>
        </form>
    );
}

export default PizzaModificar;