import { auth } from "@/auth";
import { redirect } from "next/navigation";


async function Dashboard() {

    const sesion = await auth()
    if (!sesion) redirect ('/auth/login')

    return ( 

        <div>
            <h1 className="text-3xl font-bold">
                DASHBOARD
            </h1>
            <p>{sesion.user.name}</p>
            <p>{sesion.user.email}</p>
            <img src={sesion.user.image}/>
        </div>

     );
}

export default Dashboard;