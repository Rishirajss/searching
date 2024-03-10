import UserLogin from "./login";

export default function page(){
    return(
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full md:w-1/3 p-2">
                <UserLogin/>
            </div>
        </div>
    )
}