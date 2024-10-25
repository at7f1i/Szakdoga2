import Form from "@/components/form";
import PostsList from "@/components/posts-lists";
import { Suspense } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"

export default async function Posts(){
    

    return(
        <main className="text-center pt-16 px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>
        <Suspense fallback="Loading..."> 
            <PostsList/>
        </Suspense>

        <Form/>
        <LogoutLink>Log out</LogoutLink>
        </main>
    )
}
