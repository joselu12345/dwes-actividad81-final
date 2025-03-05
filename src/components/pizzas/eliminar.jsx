import { eliminarPizza } from "@/lib/actions";

function PizzaEliminar({ pizza }) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos?</h1>
            <p>PIZZA: {pizza.nombre}</p>
            <p>PRECIO: {pizza.precio}</p>

            <form className="flex flex-col gap-4" action={eliminarPizza}>
                <input type="hidden" name="id" defaultValue={pizza.id} />
                <button className="p-2 rounded-lg bg-indigo-500 text-white cursor-pointer">Eliminar</button>
            </form>
        </div>
    );
}

export default PizzaEliminar;