import { obtenerPizzas } from "@/lib/data";
import Link from "next/link";
import Modal from "@/components/modal";
import PizzaInsertar from "./insertar";
import PizzaModificar from "./modificar";
import PizzaEliminar from "./eliminar";
import { auth } from "@/auth";


export default async function Pizzas() {
    const pizzas = await obtenerPizzas()
    const sesion = await auth()

    return (
        <div className="flex flex-col gap-4">

            {sesion && sesion?.user?.role === 'ADMIN' &&
                <Modal openElement={<p className="inline p-2 rounded-lg bg-green-500 text-white cursor-pointer">Insertar</p>}>
                    <PizzaInsertar />
                </Modal>
            }

            {
                pizzas.map(pizza =>
                    <div key={pizza.id} className="p-4 mb-4 bg-cyan-100 rounded-lg">
                        <div className="flex flex-col gap-4">
                            <Link href={`/pizzas/${pizza.id}`} className="font-bold cursor-pointer">
                                {pizza.nombre}
                            </Link>
                            <p>{pizza.precio} €</p>
                            <p><img src="{pizza.foto}" /></p>

                            {sesion && sesion?.user?.role === 'ADMIN' &&
                                <Modal openElement={<p className="inline p-2 rounded-lg bg-yellow-400 text-white cursor-pointer">Modificar</p>}>
                                    <PizzaModificar pizza={pizza} />
                                </Modal>
                            }

                            {sesion && sesion?.user?.role === 'ADMIN' &&
                                <Modal openElement={<p className="inline p-2 rounded-lg bg-red-600 text-white cursor-pointer">Eliminar</p>}>
                                    <PizzaEliminar pizza={pizza} />
                                </Modal>
                            }

                        </div>
                        <hr />
                    </div>
                )
            }
        </div>
    );
}